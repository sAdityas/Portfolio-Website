import React from "react";
import Profile from '../resources/profile.jpeg'
import '../components/styles/Avatar.css'

const Avatar = () => (
  <img
    src={Profile}
    alt="Avatar"
    className="drop-shadow-xl"
  >
  </img>
);

export default Avatar;
