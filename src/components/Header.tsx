import Image from "next/image";
import React from "react";
import myImage from "../assets/react-core-concepts.png";

type Props = {};
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max: any) {
  return Math.random() * (max + 1);
}

function Header() {
  const description = reactDescriptions[genRandomInt(Math.random)];
  return (
    <header>
      <Image src={myImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description}Fundamental React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

export default Header;
