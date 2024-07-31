import React, { Component, useState } from "react";
import TabButton from "./TabButton";
import styles from "./NavBar.module.css";
import { EXAMPLES } from "./data";
type Props = {
  title: string;
  desciption: string;
  code: any;
};

const ExampleNavbar = (props: Props) => {
  const [selected, setSelected] = useState(null);
  //   let tabContent = "Click any button";
  function handleSelect(selected: string) {
    // tabContent = selectedButton;
    setSelected(selected);
    console.log(selected);
  }
  console.log("button clicked");
  let displayContent = "Select a button";
  if (selected) {
    displayContent = (
      <div className={styles.tabContent}>
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].desciption}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.examples}>
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selected === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selected === "components"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selected === "components"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selected === "components"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
      </div>
      {/* <div style={{ padding: "20px" }}>{selected}</div> */}
      {/* {!selected ? (
        <p>Please select a button</p>
      ) : (
        <div className={styles.tabContent}>
          <h3>{EXAMPLES[selected].title}</h3>
          <p>{EXAMPLES[selected].desciption}</p>
          <pre>
            <code>{EXAMPLES[selected].code}</code>
          </pre>
        </div>
      )} */}
      {/* -------------OR----------- */}
      {/* {!selected && <p>Please select a button</p>}
      {selected && (
        <div className={styles.tabContent}>
          <h3>{EXAMPLES[selected].title}</h3>
          <p>{EXAMPLES[selected].desciption}</p>
          <pre>
            <code>{EXAMPLES[selected].code}</code>
          </pre>
        </div>
      )} */}
      {displayContent}
    </div>
  );
};

export default ExampleNavbar;
