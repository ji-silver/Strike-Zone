import React from "react";
import { format } from "date-fns-tz";
import { styled } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Nav from "../../components/nav/Nav";
import "./calendar.scss";

const events = [
  {
    aScore: [0, 0, 0, 2, 0, 5, 0, 0, 0],
    hScore: [0, 0, 0, 0, 4, 2, 1, 1],
    aSum: [7, 13, 0, 4],
    hSum: [8, 14, 0, 2],
    date: "2023-07-29",
    location: "Away",
    homeImgUrl: `${process.env.PUBLIC_URL}/images/SGL.png`,
    awayImgUrl: `${process.env.PUBLIC_URL}/images/NCD.png`,
  },
  {
    aScore: [0, 0, 0, 2, 0, 5, 0, 0, 0],
    hScore: [0, 0, 0, 0, 4, 2, 1, 1],
    aSum: [7, 13, 0, 4],
    hSum: [8, 14, 0, 2],
    date: "2023-07-30",
    location: "Home",
    homeImgUrl: `${process.env.PUBLIC_URL}/images/SGL.png`,
    awayImgUrl: `${process.env.PUBLIC_URL}/images/DUB.png`,
  },
];

const Calendar = () => {
  const customContent = (e) => {
    // 달력에서 날짜 '일' 출력 안 하게 빈 문자열로 바꾸기
    const dayNumber = e.dayNumberText.replace("일", "");

    // date-fns-tz 라이브러리로 달력 날짜 포맷하기
    const formatDate = format(e.date, "yyyy-MM-dd");

    // 가져온 날짜 데이터랑 달력 날짜랑 같은 거 매칭 하기
    const matchingEvent = events.find((e) => e.date === formatDate);

    // location이 있으면 앞글자만 저장, 없으면 빈 문자열 저장
    const firstLetter = matchingEvent?.location
      ? matchingEvent.location[0]
      : "";

    // firstLetter가 H(Home), A(Away)인지에 따라 색상 다르게
    const locationColor = firstLetter === "H" ? "#e02b66" : "#157994";

    // location, 일자 반환
    return (
      <>
        <Location color={locationColor}>{firstLetter}</Location>
        <span>{dayNumber}</span>
      </>
    );
  };

  const customEventContent = (info) => {
    // extendedProps로 이벤트 객체 속성 정의할 수 있음
    const event = info.event.extendedProps;

    // 팀 점수는 sum 배열 첫번째 인덱스로 정의
    const awayScore = event.aSum[0];
    const homeScore = event.hSum[0];

    // 원정경기면 우리팀 점수가 앞에 -> 홈경기면 원정팀 점수가 앞에 배치
    const isAwayGame = event.location === "Away";
    const scoreTitle = isAwayGame
      ? `${homeScore} : ${awayScore}`
      : `${awayScore} : ${homeScore}`;

    // 우리 팀 기준 Win, Lose 정의 하기
    const gameResult = homeScore > awayScore ? "W" : "L";

    return (
      <>
        <img src={event.awayImgUrl} alt="" className="event-icon" />
        <div>
          <span
            style={{
              color: gameResult === "W" ? "red" : "gray",
              paddingRight: "5px",
            }}
          >
            {gameResult}
          </span>
          <span>{scoreTitle}</span>
        </div>
      </>
    );
  };
  return (
    <>
      <Nav />
      <Calcontainer className="container top">
        <div className="section">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            locale={"ko"}
            contentHeight={"auto"}
            // 속성값 전달
            events={events}
            // 이벤트 커스텀
            eventContent={customEventContent}
            // day top 컨텐츠
            dayCellContent={customContent}
          />
        </div>
      </Calcontainer>
    </>
  );
};

export default Calendar;

const Calcontainer = styled.div`
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Location = styled.span`
  color: ${(props) => props.color};
`;
