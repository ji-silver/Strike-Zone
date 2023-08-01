import React, { useState } from "react";
import "./recordModal.scss";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import RecordWrite from "../recordWrite/RecordWrite";

const RecordModal = ({ event, onClose }) => {
  return (
    <Container>
      <div className="modal">
        <div className="container">
          <div className="closeBtn" onClick={onClose}>
            <IoClose />
          </div>
          <RecordWrite info={event} />
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
