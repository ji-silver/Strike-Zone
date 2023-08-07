import React, { useState } from "react";
import "./recordModal.scss";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import RecordInfo from "../recordInfo/RecordInfo";
import RecordWrite from "../recordWrite/RecordWrite";
import LoginModal from "../loginModal/LoginModal";
import { useSelector } from "react-redux";

const RecordModal = ({ event, onClose, newEvent }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  const handleModalClose = () => {
    onClose();
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true);
  };

  return user ? (
    <Container>
      <div className="modal">
        <div className="container modal_h">
          <div className="closeBtn" onClick={onClose}>
            <IoClose />
          </div>
          {/* event가 존재하는 경우 RecordInfo 컴포넌트 렌더링, 아닌 경우 RecordWrite 컴포넌트 렌더링 */}
          <>
            {event && !isEditMode ? (
              <>
                <RecordInfo info={event} onCloseModal={handleModalClose} />
                <button onClick={handleEditButtonClick}>수정하기</button>
              </>
            ) : (
              <RecordWrite
                info={newEvent}
                editInfo={event}
                onCloseModal={handleModalClose}
              />
            )}
          </>
        </div>
      </div>
    </Container>
  ) : (
    <LoginModal isOpen={!user} onClose={onClose} />
  );
};

export default RecordModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.211);
  margin: 0 auto;
`;
