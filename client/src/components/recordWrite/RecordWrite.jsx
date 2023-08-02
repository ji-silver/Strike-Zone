import React, { useEffect, useRef, useState } from "react";
import "./recordWrite.scss";
import { styled } from "styled-components";
import { TeamSelect, positions } from "../../../src/datatable";

const RecordWrite = ({ info }) => {
  const [aScore, setAScore] = useState(Array(12).fill(""));
  const [hScore, setHScore] = useState(Array(12).fill(""));
  const [aSum, setASum] = useState(Array(4).fill(""));
  const [hSum, setHSum] = useState(Array(4).fill(""));
  const [location, setLocation] = useState("Home");
  const [lineUp, setLineUp] = useState(positions);

  const handleNameChange = (index, newName) => {
    const updatedPlayers = [...lineUp];
    updatedPlayers[index].name = newName;
    setLineUp(updatedPlayers);
  };

  const handleCheckLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputChange = (team, index, value) => {
    if (team === "Away") {
      setAScore((prev) => {
        const newAScore = [...prev];
        newAScore[index] = value;
        return newAScore;
      });
    } else {
      setHScore((prev) => {
        const newHScore = [...prev];
        newHScore[index] = value;
        return newHScore;
      });
    }
  };

  const handleChangeSum = (team, index, value) => {
    if (team === "Away") {
      setASum((prev) => {
        const newASum = [...prev];
        newASum[index] = value;
        return newASum;
      });
    } else {
      setHSum((prev) => {
        const newHSum = [...prev];
        newHSum[index] = value;
        return newHSum;
      });
    }
  };

  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="recordW">
      <div className="title">
        <p>경기 기록</p>
      </div>
      <div className="infoBox">
        <div className="todayInfo">
          <div className="info">
            <div className="info_location">
              <span>장소</span>
              <label htmlFor="Home">
                <input
                  type="radio"
                  value="Home"
                  id="Home"
                  checked={location === "Home"}
                  onChange={handleCheckLocation}
                />
                <span>Home</span>
              </label>
              <label htmlFor="Away">
                <input
                  type="radio"
                  value="Away"
                  id="Away"
                  checked={location === "Away"}
                  onChange={handleCheckLocation}
                />
                <span>Away</span>
              </label>
            </div>
            <div className="info_locationName">
              구장
              <input type="text" id="place" placeholder="문학" />
            </div>
          </div>

          <div className="team">
            <div>
              우리 팀 <TeamSelect />
            </div>
            <div>
              상대 팀 <TeamSelect />
            </div>
          </div>
        </div>
        <div className="Wscore">
          <table className="scoreTable">
            <thead>
              <tr>
                <th>팀</th>
                {numbers.map((number) => (
                  <th key={number}>{number}</th>
                ))}
                <th>R</th>
                <th>H</th>
                <th>E</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상대 팀</td>
                {aScore.map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleInputChange("Away", index, e.target.value)
                      }
                    />
                  </td>
                ))}
                {aSum.map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleChangeSum("Away", index, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td>우리 팀</td>
                {hScore.map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleInputChange("Home", index, e.target.value)
                      }
                    />
                  </td>
                ))}
                {hSum.map((value, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleChangeSum("Home", index, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="gameBox">
        <div className="lineUp">
          <table>
            <thead>
              <tr>
                <th>포지션</th>
                <th>이름</th>
              </tr>
            </thead>
            <tbody>
              {lineUp.map((player, index) => (
                <tr key={index}>
                  <td>{player.position}</td>
                  <td>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="detail">
          <div className="player">
            <div className="col">
              <div>
                <input type="text" id="win" placeholder=" " />
                <label htmlFor="win">승리투수</label>
              </div>
              <div>
                <input type="text" placeholder=" " />
                <label>홀드</label>
              </div>
            </div>
            <div className="col">
              <div>
                <input type="text" placeholder=" " />
                <label>세이브</label>
              </div>
              <div>
                <input type="text" placeholder=" " />
                <label>MVP</label>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>comment</p>
            <textarea name="" id="" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div className="btn">
        <button>추가하기</button>
      </div>
    </div>
  );
};
export default RecordWrite;
