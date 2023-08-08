import React from "react";
import "./diaryList.scss";
import Nav from "../../components/nav/Nav";
import { NavLink } from "react-router-dom";

const data = {
  _id: "1",
  date: "2023-08-08",
  createdAt: "2023-08-07T07:41:22.233+00:00",
  myTeam: "SSG 랜더스",
  opposingTeam: "롯데 자이언츠",
  imgUrl: ["/images/stadium1.jpg"],
};

const Diary = () => {
  const dateObj = new Date(data.date);
  const dayOfWeek = dateObj.getDay();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeekInKorean = days[dayOfWeek];

  const dateObject = new Date(data.createdAt);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  return (
    <>
      <Nav />
      <div className="container top">
        <div className="diary">
          <ul className="cards">
            <li>
              <NavLink to={`/diary/${data._id}`} className="card">
                <img src={data.imgUrl[0]} alt="" className="cardImage" />
                <div className="cardOverlay">
                  <div className="cardHeader">
                    <svg class="cardArc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <div>
                      <h3 class="cardTitle">
                        {data.date} ({dayOfWeekInKorean})
                      </h3>

                      <span class="cardStatus">
                        작성일: {year}-{month}-{day}
                      </span>
                    </div>
                  </div>
                  <p class="cardDescription">
                    {data.myTeam} VS {data.opposingTeam}
                  </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Diary;
