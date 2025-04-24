import React, { Component } from "react";

// Complete this Component
const ListItem = ({obj}) => {
  // console.log(obj)
  const {name, link, icon, bgColor} = obj;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt="" />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
