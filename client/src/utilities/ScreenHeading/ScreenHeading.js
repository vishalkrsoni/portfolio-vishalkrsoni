import React from "react";
import "./ScreenHeading.css";

const ScreenHeading = ({ title, subHeading }) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="screen-separator">
        <div className="separator-line">
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
