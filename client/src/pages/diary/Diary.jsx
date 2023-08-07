import React from "react";
import "./diary.scss";
import Nav from "../../components/nav/Nav";

const Diary = () => {
  return (
    <>
      <Nav />
      <div className="container top">
        <div className="diary">
          <ul className="cards">
            <li>
              <a href="#" className="card">
                <img src="/images/stadium1.jpg" alt="" className="cardImage" />
                <div className="cardOverlay">
                  <div className="cardHeader">
                    <svg class="cardArc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <div>
                      <h3 class="cardTitle">2023-08-07 (월)</h3>

                      <span class="cardStatus">작성일: 1 hour ago</span>
                    </div>
                  </div>
                  <p class="cardDescription">SSG 랜더스 VS 롯데 자이언츠</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="card">
                <img src="/images/stadium1.jpg" alt="" className="cardImage" />
                <div className="cardOverlay">
                  <div className="cardHeader">
                    <svg class="cardArc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <div>
                      <h3 class="cardTitle">2023-08-07 (월)</h3>

                      <span class="cardStatus">작성일: 1 hour ago</span>
                    </div>
                  </div>
                  <p class="cardDescription">SSG 랜더스 VS 롯데 자이언츠</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="card">
                <img src="/images/stadium1.jpg" alt="" className="cardImage" />
                <div className="cardOverlay">
                  <div className="cardHeader">
                    <svg class="cardArc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <div>
                      <h3 class="cardTitle">2023-08-07 (월)</h3>

                      <span class="cardStatus">작성일: 1 hour ago</span>
                    </div>
                  </div>
                  <p class="cardDescription">SSG 랜더스 VS 롯데 자이언츠</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Diary;
