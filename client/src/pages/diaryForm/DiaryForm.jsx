import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { TeamSelect } from "../../datatable";
import { useSelector } from "react-redux";
import Nav from "../../components/nav/Nav";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./diaryForm.scss";
import { HiPlus } from "react-icons/hi";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading";
import LoginModal from "../../components/loginModal/LoginModal";

const DiaryForm = () => {
  const { id } = useParams();
  const { data } = useFetch(`/diary/${id}`);
  const [loading, setLoading] = useState(false);
  const { myTeam } = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    result: true,
    date: moment().format("YYYY-MM-DD"),
    myTeam: myTeam,
    opposingTeam: "",
    desc: "",
    imgUrl: [""],
  });

  // useEffect(() => {
  //   if (data) {
  //     setFormData({
  //       result: data.result,
  //       myTeam: data.myTeam,
  //       opposingTeam: data.opposingTeam,
  //       desc: data.desc,
  //       imgUrl: data.imgUrl,
  //     });
  //   }
  // }, [data]);

  const navigate = useNavigate();

  // 클라우드에 이미지 저장 후 url 받아오기
  const handleImageUpload = async (files) => {
    const uploadedUrls = [];

    for (const file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      setLoading(true);
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/jisilver/image/upload",
          data
        );
        uploadedUrls.push(uploadRes.data.url);
      } catch (err) {
        console.error(err);
      }
    }

    return uploadedUrls;
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
    navigate(-1);
  };

  // 이미지 미리보기 업로드
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const readerPromises = selectedFiles.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readerPromises).then((dataUrls) => {
        setFiles(dataUrls);
      });
    }
  };

  // Calendar 열기
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 팀 선택
  const handleChange = (event, isMyTeam) => {
    const selectedTeam = event.target.value;
    if (isMyTeam) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        myTeam: selectedTeam,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        opposingTeam: selectedTeam,
      }));
    }
  };

  // 경기 결과 toggle
  const handleClickBtn = () => {
    setFormData((prev) => ({
      ...prev,
      result: !prev.result,
    }));
  };

  // Calendar 날짜 변경
  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: formattedDate,
    }));
    setIsOpen(false);
  };

  const handleDescChange = (e) => {
    const newFormData = { ...formData, desc: e.target.value };
    setFormData(newFormData);
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (formData.opposingTeam === "" || formData.desc === "") {
      alert("상대팀 또는 내용을 입력해주세요.");
      return;
    }

    let formDatas = { ...formData };

    if (files) {
      const uploadedUrls = await handleImageUpload(files);
      if (uploadedUrls) {
        formDatas.imgUrl = uploadedUrls;
      }
    }

    try {
      await axios.post("/diary", formDatas);
      alert("등록되었습니다.");
      navigate("/diary");
    } catch (err) {
      alert("해당 날짜에 작성된 기록이 있습니다");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      <Nav />
      {user ? (
        <div className="container top">
          {loading ? <Loading /> : null}
          <div className="form">
            <div className="selected">
              <Section>
                <p>직관날짜</p>
                <button className="date" onClick={handleClick}>
                  {moment(formData.date).format("YYYY-MM-DD")}
                </button>
                {isOpen && (
                  <div className="calendarWrap">
                    <Calendar
                      onChange={handleDateChange}
                      value={new Date(formData.date)}
                      formatDay={(locale, date) => moment(date).format("DD")}
                    />
                  </div>
                )}
              </Section>
              <Section>
                <p>우리팀</p>
                <TeamSelect
                  onChange={handleChange}
                  defaultValue={formData.myTeam}
                  value={formData.myTeam}
                />
              </Section>
              <Section>
                <p>상대팀</p>
                <TeamSelect
                  onChange={handleChange}
                  value={formData.opposingTeam}
                />
              </Section>
              <Section className="toggle">
                <p>경기 결과</p>
                <div className="toggleBtn">
                  <div className="button r" id="button-1">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={handleClickBtn}
                    />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                  </div>
                </div>
              </Section>
            </div>
            <div className="content">
              <h1>이미지 업로드</h1>
              <div className="imgWrap">
                <label htmlFor="file">
                  <div className="imageBtn">
                    <HiPlus />
                  </div>
                </label>
                <div className="imageFile">
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
                <div className="thumbnail">
                  {files.map((file, index) => (
                    <div key={index} className="thumbnail-item">
                      <img src={file} alt="" />
                      {index === 0 && <span>대표</span>}
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="comment">
                <h1>내용</h1>
                <textarea
                  placeholder="오늘 직관은 어땠는지 남겨주세요."
                  name=""
                  id=""
                  onChange={handleDescChange}
                  value={formData.desc}
                />
              </div>
              <button onClick={handleSubmitClick}>등록하기</button>
            </div>
          </div>
        </div>
      ) : (
        <LoginModal isOpen={!user} onClose={closeModal} />
      )}
    </>
  );
};

export default DiaryForm;

const Section = styled.div`
  padding: 10px 0;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }

  p {
    color: gray;
    padding-bottom: 5px;

    @media (max-width: 768px) {
      padding: 0;
      flex: 1;
    }
  }
`;
