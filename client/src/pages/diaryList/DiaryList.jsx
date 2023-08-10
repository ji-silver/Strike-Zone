import React from "react";
import "./diaryList.scss";
import Nav from "../../components/nav/Nav";
import { NavLink } from "react-router-dom";
import FloatingBtn from "../../components/floatingBtn/FloatingBtn";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

const Diary = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const { data, loading } = useFetch(`${PROXY}/api/diary`);

  // 작성일, 시간 출력
  const formatDate = (dateTime) => {
    const dateObj = new Date(dateTime);
    const formattedDate = dateObj.toLocaleDateString("ko-KR");
    const formattedTime = dateObj.toLocaleTimeString("ko-KR", {
      timeStyle: "short",
    });

    return `${formattedDate} ${formattedTime}`;
  };

  // date 기준으로 요일 출력하기
  const getDayOfWeek = (date) => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
  };

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Error>
          <p>등록된 기록이 없습니다.</p>
          <p>오늘 직관한 걸 기록해보세요!</p>
        </Error>
      ) : (
        <div className="container top">
          <div className="diary">
            <ul className="cards">
              {/* reverse()를 사용하여 배열을 역순으로 만들기 */}
              {data
                .slice()
                .reverse()
                .map((item) => {
                  const dateObj = new Date(item.date);
                  const dayOfWeek = getDayOfWeek(dateObj);
                  const formattedDateTime = formatDate(item.updatedAt);
                  return (
                    <li key={item._id}>
                      <NavLink to={`/diary/${item._id}`} className="card">
                        <img
                          src={item.imgUrl[0]}
                          alt=""
                          className="cardImage"
                        />
                        <div className="cardOverlay">
                          <div className="cardHeader">
                            <svg
                              className="cardArc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <div>
                              <h3 className="cardTitle">
                                관람일 | {item.date} ({dayOfWeek})
                              </h3>
                              <span className="cardStatus">
                                {formattedDateTime}
                              </span>
                            </div>
                          </div>
                          <p className="cardDescription">
                            {item.myTeam} VS {item.opposingTeam}
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      <NavLink to="/diary/new">
        <FloatingBtn />
      </NavLink>
    </>
  );
};

export default Diary;
