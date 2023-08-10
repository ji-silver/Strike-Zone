import React, { useState } from "react";
import "./diaryContent.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import FloatingBtn from "../../components/floatingBtn/FloatingBtn";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const DiaryContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const { data, loading } = useFetch(`/diary/${id}`);
  const { imgUrl, date, myTeam, opposingTeam, desc, result } = data;

  const handleDeleteClick = async () => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      try {
        await axios.delete(`${PROXY}/api/diary/${id}`);
        alert("삭제되었습니다.");
        navigate("/diary");
      } catch (err) {
        console.error(err);
      }
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

  const handleClick = () => {
    navigate(-1);
  };

  if (!data || !data.imgUrl || !Array.isArray(data.imgUrl) || loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container dContainer">
        <div className="diary">
          <div className="closeBtn" onClick={handleClick}>
            <IoClose />
          </div>
          <div className="content">
            <div className="title">
              <p className="date">{date}</p>
              <h1>
                {myTeam} VS {opposingTeam}
                <span className={result === true ? "result" : ""}>
                  {result === true ? "승리" : ""}
                </span>
              </h1>
            </div>
            <div className="desc">
              <div className="images">
                {imgUrl.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt=""
                    onClick={() => openModal(url)}
                  />
                ))}
              </div>
              <div className="text">{desc}</div>
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
          <NavLink to={`/diary/edit/${id}`}>
            <span>
              수정
              <div>
                <BiEdit className="btnIcon" />
              </div>
            </span>
          </NavLink>
          <span onClick={handleDeleteClick}>
            삭제
            <div>
              <RiDeleteBinLine className="btnIcon" />
            </div>
          </span>
        </div>
      </FloatingBtn>
    </>
  );
};

export default DiaryContent;
