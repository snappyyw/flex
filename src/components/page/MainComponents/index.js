import React from "react";

import "./style.scss";

function MainComponents() {
  return (
    <div className="main">
      <div className="mainBody">
        <div className="mainText">
          <svg
            width="28"
            height="14"
            viewBox="0 0 28 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H14C21.732 0 28 6.26801 28 14V14H14C6.26801 14 0 7.73199 0 0V0Z"
              fill="white"
            />
          </svg>
          <div className="mainSubtitle">Укрепление здоровья</div>
          <svg
            width="28"
            height="14"
            viewBox="0 0 28 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mainTitle">Акватерапия RitmStyle</div>
      </div>
    </div>
  );
}

export default MainComponents;
