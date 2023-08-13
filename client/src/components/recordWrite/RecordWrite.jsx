import React, { useState } from "react";
import "./recordWrite.scss";
import { TeamSelect, positions, teamURL } from "../../../src/datatable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../../redux/recordSlice";

const RecordWrite = ({ info, onCloseModal, editInfo }) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const { myTeam } = useSelector((state) => state.user.currentUser);
  const [recordData, setRecordData] = useState({
    aSum: Array(4).fill(""),
    hSum: Array(4).fill(""),
    place: "",
    win: "",
    hold: [],
    saveP: "",
    mvp: "",
    comment: "",
    location: "Home",
    aTeam: "",
    hTeam: myTeam,
  });
  const [lineUp, setLineUp] = useState(positions);
  const [awayScore, setAwayScore] = useState(Array(12).fill(""));
  const [homeScore, setHomeScore] = useState(Array(12).fill(""));
  const dispatch = useDispatch();

  // 배열에 빈칸 없애기
  const aScore = awayScore.filter((value) => value !== null && value !== "");
  const hScore = homeScore.filter((value) => value !== null && value !== "");

  // onChange 함수
  const createChangeHandler = (key) => (e) => {
    setRecordData((prevData) => ({ ...prevData, [key]: e.target.value }));
  };

  // 핸들러 함수
  const handleWinChange = createChangeHandler("win");
  const handleHoldChange = createChangeHandler("hold");
  const handleSaveChange = createChangeHandler("saveP");
  const handleMvpChange = createChangeHandler("mvp");
  const handleCommentChange = createChangeHandler("comment");
  const handleChangePlace = createChangeHandler("place");
  const handleCheckLocation = createChangeHandler("location");
  const handlehTeamChange = createChangeHandler("hTeam");
  const handleaTeamChange = createChangeHandler("aTeam");

  // 포지션
  const handleNameChange = (index, newName) => {
    const updatedPlayers = [...lineUp];
    updatedPlayers[index].name = newName;
    setLineUp(updatedPlayers);
  };

  // 점수판
  // 원정경기면 Ascore에 입력, 홈경기면 HScore에 입력
  const handleChangeScore = (team, index, value) => {
    if (team === "Away") {
      setAwayScore((prev) => {
        const newAScore = [...prev];
        newAScore[index] = value;
        return newAScore;
      });
    } else {
      setHomeScore((prev) => {
        const newHScore = [...prev];
        newHScore[index] = value;
        return newHScore;
      });
    }
  };

  // result
  const handleChangeSum = (team, index, value) => {
    setRecordData((prevData) => {
      if (team === "Away") {
        const newASum = [...prevData.aSum];
        newASum[index] = value;
        return { ...prevData, aSum: newASum };
      } else {
        const newHSum = [...prevData.hSum];
        newHSum[index] = value;
        return { ...prevData, hSum: newHSum };
      }
    });
  };
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
  const handleClick = async (e) => {
    e.preventDefault();
    const playerName = lineUp.some((player) => player.name.trim() === "");
    if (playerName) {
      alert("모든 선수의 이름을 입력해주세요.");
      return;
    }

    if (!recordData.place) {
      alert("구장을 입력해주세요");
      return;
    }

    const awayImgUrl = teamURL[recordData.aTeam];
    const date = info;
    const players = lineUp.map((position) => position.name);
    const RecordDatas = {
      ...recordData,
      players,
      awayImgUrl,
      date,
      aScore,
      hScore,
    };
    try {
      await axios.post(`${PROXY}/api/record`, RecordDatas);
      alert("추가 되었습니다.");
      const clearedPlayers = lineUp.map((player) => ({ ...player, name: "" }));
      setLineUp(clearedPlayers);

      setRecordData({});
      onCloseModal();
      dispatch(addRecord(RecordDatas));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="recordW">
      {/* 타이틀 */}
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
                  checked={recordData.location === "Home"}
                  onChange={handleCheckLocation}
                />
                <span>Home</span>
              </label>
              <label htmlFor="Away">
                <input
                  type="radio"
                  value="Away"
                  id="Away"
                  checked={recordData.location === "Away"}
                  onChange={handleCheckLocation}
                />
                <span>Away</span>
              </label>
            </div>
            <div className="info_locationName">
              구장
              <input
                type="text"
                id="place"
                placeholder="문학"
                onChange={handleChangePlace}
                value={recordData.place}
              />
            </div>
          </div>

          {/* 스코어 박스 */}
          <div className="team">
            <div>
              우리 팀{" "}
              <TeamSelect onChange={handlehTeamChange} defaultTeam={myTeam} />
            </div>
            <div>
              상대 팀 <TeamSelect onChange={handleaTeamChange} />
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
                {awayScore.map((value, index) => (
                  <td key={index}>
                    <input
                      value={value}
                      type="number"
                      pattern="^[0-9]*"
                      onChange={(e) =>
                        handleChangeScore("Away", index, e.target.value)
                      }
                    />
                  </td>
                ))}
                {recordData.aSum.map((value, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      pattern="^[0-9]*"
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
                {homeScore.map((value, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      pattern="^[0-9]*"
                      value={value}
                      onChange={(e) =>
                        handleChangeScore("Home", index, e.target.value)
                      }
                    />
                  </td>
                ))}
                {recordData.hSum.map((value, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      pattern="^[0-9]*"
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

      {/* 포지션 */}
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

        {/* etc */}
        <div className="detail">
          <div className="player">
            <div className="col">
              <div>
                <input
                  type="text"
                  id="win"
                  placeholder=" "
                  value={recordData.win}
                  onChange={handleWinChange}
                />
                <label htmlFor="win">승리투수</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  value={recordData.hold}
                  onChange={handleHoldChange}
                />
                <label>홀드</label>
              </div>
            </div>
            <div className="col">
              <div>
                <input
                  type="text"
                  placeholder=" "
                  value={recordData.saveP}
                  onChange={handleSaveChange}
                />
                <label>세이브</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  value={recordData.mvp}
                  onChange={handleMvpChange}
                />
                <label>MVP</label>
              </div>
            </div>
          </div>
          <div className="comment">
            <p>comment</p>
            <textarea
              name=""
              id=""
              rows="5"
              value={recordData.comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn">
        <button onClick={handleClick}>추가하기</button>
      </div>
    </div>
  );
};
export default RecordWrite;
