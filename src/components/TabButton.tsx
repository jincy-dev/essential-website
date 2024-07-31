import React from "react";
import "./NavBar.module.css";
type Props = {};

const TabButton = ({ children, onSelect, isSelected }) => {
  // function handleClick(){
  //     console.log('Button clicked');
  // }
  console.log("Tabbutton clicked");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
