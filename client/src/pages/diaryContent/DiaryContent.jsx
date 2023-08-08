import React, { useState } from "react";
import "./diaryContent.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import FloatingBtn from "../../components/floatingBtn/FloatingBtn";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const data = {
  _id: "1",
  date: "2023-08-08",
  createdAt: "2023-08-07T07:41:22.233+00:00",
  myTeam: "SSG 랜더스",
  opposingTeam: "롯데 자이언츠",
  imgUrl: ["/images/stadium1.jpg", "/images/stadium1.jpg"],
  result: "true",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facilis ducimus saepe voluptas numquam ad aspernatur assumenda quod? Ipsum dicta aperiam porro dolorem cum quis voluptatem tenetur eveniet eaque saepe?",
};

const DiaryContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleDeleteClick = async () => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container dContainer">
        <div className="diary">
          <div className="closeBtn" onClick={handleClick}>
            <IoClose />
          </div>
          <div className="content">
            <div className="title">
              <p className="date">{data.date}</p>
              <h1>
                {data.myTeam} VS {data.opposingTeam}
                <span className="result">
                  {data.result === "true" ? "승리" : ""}
                </span>
              </h1>
            </div>
            <div className="desc">
              <div className="images">
                {data.imgUrl.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt=""
                    onClick={() => openModal(imageUrl)}
                  />
                ))}
              </div>
              <div className="text">{data.desc}</div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="diaryModal">
          <div className="modal-content">
            <img src={selectedImage} onClick={closeModal} alt="" />
          </div>
        </div>
      )}
      <FloatingBtn>
        <div className="floatingMenu">
          <NavLink to="/diary/edit/:id">
            <button>
              <BiEdit className="btnIcon" />
              수정
            </button>
          </NavLink>
          <button onClick={handleDeleteClick}>
            <RiDeleteBinLine className="btnIcon" />
            삭제
          </button>
        </div>
      </FloatingBtn>
    </>
  );
};

export default DiaryContent;
