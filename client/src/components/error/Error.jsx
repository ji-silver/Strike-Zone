import React from "react";
import "./error.scss";
import { BiError } from "react-icons/bi";

const Error = ({ children }) => {
  return (
    <div className="errorWrap">
      <BiError className="icon" />
      {children}
    </div>
  );
};

export default Error;
