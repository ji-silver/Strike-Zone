import React from "react";
import Nav from "../../components/nav/Nav";
import "./odd.scss";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const Odd = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const { data, loading } = useFetch(`${PROXY}/api/diary`);
  const { nickname } = useSelector((state) => state.user.currentUser);

  const currentYear = new Date().getFullYear();

  // data에서 올해의 데이터만 필터링
  const filteredData = data.filter((item) => {
    const itemYear = parseInt(item.date.split("-")[0]); // 날짜에서 년도 추출
    return itemYear === currentYear;
  });

  filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // 올해 방문횟수 계산
  const visit = filteredData.length;

  // 승률 계산
  const trueCount = filteredData.filter((item) => item.result === true).length;
  const winRate = ((trueCount / visit) * 100).toFixed(0);

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : data.length === 0 ? (
        <Error>
          <p>직관 기록을 작성해야 확인할 수 있어요!</p>
          <p>직관 기록을 작성해보세요</p>
          <NavLink to="/diary/new">
            <div className="diaryBtn">
              <span>작성하기</span>
            </div>
          </NavLink>
        </Error>
      ) : (
        <>
          <div className="oddBg">
            <div></div>
          </div>
          <div className="container top">
            <div className="oddWrap">
              <div className="desc">
                <p>
                  <strong>{nickname}</strong>님은 올해 총 {visit}번 야구장에
                  방문하였습니다.
                </p>
                <p>
                  방문한 경기에 대한 승률은 <span>{winRate}%</span>입니다.
                </p>
              </div>
              <div className="detail">
                {filteredData.map((item, index) => (
                  <div key={index} className="stamp">
                    <div className="oddIcon">
                      <img
                        src={
                          item.result === true
                            ? "/images/odd.png"
                            : "/images/lose.png"
                        }
                        alt=""
                      />
                    </div>
                    <p>{item.date.split("-").slice(1).join(".")}</p>
                    <span>
                      {item.myTeam.split(" ")[0]} VS{" "}
                      {item.opposingTeam.split(" ")[0]}
                    </span>
                    <p className="result">
                      {item.result === true ? "승리" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Odd;
