import React from "react";
import './home.css'

const UserInfo = () => {
  return (
    <div className="info-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        className="user-icon"
        alt="profile"
      />
      <h1 className="user-title">Wade Warren</h1>
      <p className="user-desc">Software Developer at India</p>
    </div>
  );
};

export default UserInfo;
