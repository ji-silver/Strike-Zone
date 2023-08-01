import React from "react";
import "./recordWrite.scss";
import { styled } from "styled-components";

const RecordWrite = ({ info }) => {
  const {
    aTeam,
    hTeam,
    aScore,
    hScore,
    aSum,
    hSum,
    place,
    location,
    mvp,
    comment,
    win,
    hold,
    save,
  } = info.extendedProps;

  // 띄어쓰기 있으면 팀명 자르기
  const aTeamName = aTeam.split(" ")[0];
  const hTeamName = hTeam.split(" ")[0];

  // 스코어보드 9회말 경기 없을 때 테이블 빈값으로 넣기 위해서 함수 정의
  // 배열 길이 계산해서 나머지는 빈값 넣기
  const padArray = (arr, length) => {
    return arr.concat(Array.from({ length: length - arr.length }, () => ""));
  };

  // 원정팀, 홈팀 나눠서 배열 중 더 긴값을 기준으로 정하고 padArray함수 실행
  const paddedAScore = padArray(aScore, Math.max(aScore.length, hScore.length));
  const paddedHScore = padArray(hScore, Math.max(aScore.length, hScore.length));

  const renderTableHeader = () => {
    return (
      <thead>
        <Tr>
          <th>팀명</th>
          {/* 원정이면 원정 기준으로 인덱스길이(이닝) 생성 */}
          {location === "Away"
            ? aScore.map((score, index) => <th key={index}>{index + 1}</th>)
            : hScore.map((score, index) => <th key={index}>{index + 1}</th>)}
          <th>R</th>
          <th>H</th>
          <th>E</th>
          <th>B</th>
        </Tr>
      </thead>
    );
  };

  const renderTeamRow = (teamName, scores, sums) => {
    return (
      <Tr>
        <td>{teamName}</td>
        {scores.map((score, index) => (
          <td key={index}>{score}</td>
        ))}
        {sums.map((score, index) => (
          <td
            key={index}
            style={
              index === 0
                ? { borderLeft: "1px solid #e5e5e5", fontWeight: "bold" }
                : {}
            }
          >
            {score}
          </td>
        ))}
      </Tr>
    );
  };

  return (
    <div className="recordW">
      <div className="title">
        <p>경기 일정</p>
        <div className="info">
          <span className="date">{info.startStr}</span>
          <span className="place">{place}</span>
        </div>
      </div>
      <div className="score">
        <table className="scoreTable">
          {renderTableHeader()}
          <tbody>
            {location === "Away" ? (
              <>
                {renderTeamRow(aTeamName, paddedAScore, aSum)}
                {renderTeamRow(hTeamName, paddedHScore, hSum)}
              </>
            ) : (
              <>
                {renderTeamRow(hTeamName, paddedHScore, hSum)}
                {renderTeamRow(aTeamName, paddedAScore, aSum)}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="boxScore">
        <div className="lineUp">
          <ul className="lineUpImg">
            <img src={`${process.env.PUBLIC_URL}/images/park.png`} alt="" />
            <li className="p1">추신수</li>
            <li className="p2">박성한</li>
            <li className="p3">최정</li>
            <li className="p4">에레디아</li>
            <li className="p5">최주환</li>
            <li className="p6">하재훈</li>
            <li className="p7">최지훈</li>
            <li className="p8">김성현</li>
            <li className="p9">김민식</li>
            <li className="p10">맥카티</li>
          </ul>
        </div>
        <div className="record">
          <span>승리:{win}</span>
          <span>홀드:{hold}</span>
          <span>세이브:{save}</span>
          <p>오늘의 MVP: {mvp}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default RecordWrite;

const Tr = styled.tr`
  border-bottom: 1px solid #e5e5e5;
`;
