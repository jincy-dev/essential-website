import React from "react";

type Props = {};

function CoreConcept(props: any) {
  return (
    <>
      <li>
        {/* <img src={props.image} alt={props.title}/> */}
        <h3>{props.title}</h3>
        <p style={{ width: "200px" }}>{props.desciption}</p>
      </li>
    </>
  );
}
export default CoreConcept;
