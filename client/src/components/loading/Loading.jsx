import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <p>잠시만 기다려주세요.</p>
      <img src={"/images/spinner.gif"} alt="로딩중" width="4%" />
    </div>
  );
};

export default Loading;
