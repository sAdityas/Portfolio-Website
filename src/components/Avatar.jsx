import React from "react";
import Profile from '../resources/profile.jpeg'
import './styles/Avatar.css'

const Avatar = () => (
  <div className={`opacity-55 hover:opacity-100 transition-all duration-1000`}>
  <img
  src={Profile}
  alt="Avatar"
  className=" border-2 border-white  w-60 h-60 rounded-full object-cover shadow-3xl shadow-yellow-400/25 hover:shadow-yellow-400 transition-all duration-1000"
/>
</div>
);

export default Avatar;
