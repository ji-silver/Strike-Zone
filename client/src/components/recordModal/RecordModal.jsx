import React, { useState } from "react";
import "./recordModal.scss";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import RecordInfo from "../recordInfo/RecordInfo";
import RecordWrite from "../recordWrite/RecordWrite";

const RecordModal = ({ event, onClose, newEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    onClose();
  };

  return (
    <Container>
      <div className="modal">
        <div className="container modal_h">
          <div className="closeBtn" onClick={onClose}>
            <IoClose />
          </div>
          {/* event가 존재하는 경우 RecordInfo 컴포넌트 렌더링, 아닌 경우 RecordWrite 컴포넌트 렌더링 */}
          {event ? (
            <RecordInfo info={event} onCloseModal={handleModalClose} />
          ) : (
            <RecordWrite info={newEvent} />
          )}
        </div>
      </div>
    </Container>
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
