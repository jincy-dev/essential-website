import React from "react";
import Header from "@/components/Header";
import CoreConceptImageBox from "@/components/CoreConceptImageBox";
import ExampleNavbar from "@/components/ExampleNavbar";

const index = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <CoreConceptImageBox />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <ExampleNavbar/>
    </div>
  );
};

export default index;
