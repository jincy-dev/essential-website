import Image from "next/image";
import React from "react";
import CoreConcept from "./CoreConcept";
import componentImage from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";
import styles from "./NavBar.module.css";
type Props = {};

const CoreConceptImageBox = (props: Props) => {
  return (
    <>
      <section
        id="core_concept"
        style={{ backgroundColor: "black", width: "70%" }}
      >
        <h2 style={{ color: "#8964b0", textAlign: "center" }}>Core Concepts</h2>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className={styles.coreConcepts}>
            <Image src={componentImage} alt="componentImage" width={200} />
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              desciption={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
          </div>
          <div>
            <Image src={propsImg} alt="componentImage" width={200} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              desciption={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
          </div>
          <div>
            <Image src={jsxImg} alt="componentImage" width={200} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              desciption={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
          </div>
          <div>
            {" "}
            <Image src={stateImg} alt="componentImage" width={200} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              desciption={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </div>
        </ul>
      </section>
    </>
  );
};

export default CoreConceptImageBox;
