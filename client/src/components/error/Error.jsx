import React from "react";
import "./error.scss";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="errorWrap">
      <BiError className="icon" />
      <p>등록된 기록이 없습니다.</p>
      <p>오늘 직관한 걸 기록해보세요!</p>
    </div>
  );
};

export default Error;
