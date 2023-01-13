import React, { useState, useEffect } from "react";
import "./Avatar.css";
const Avatar = (props) => {
  // const [avatarImg, setAvatarImg] = useState("check");
  // useEffect(() => {
  //   if (props.money <= 3000) {
  //     setAvatarImg("new img");
  //   }
  // });
  return (
    <React.Fragment>
      <div className="avatar-frame">
        <div className="avatar-img">
          <p className="avatar-rank">#1</p>
          <div></div>
        </div>
        <div className="avatar-name"></div>
      </div>
    </React.Fragment>
  );
};

export default Avatar;
