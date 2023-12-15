"use client";

import React, { useState } from "react";
// import HeavyComponent from "./HeavyComponent";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const AddHeavyComponentButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sortedElements, setSortedElements] = useState<JSX.Element[]>([]);

  return (
    <div>
      <div className="py-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
          }}
        >
          {isVisible === true ? <p>Hide Component</p> : <p>Show Component</p>}
        </button>
        {isVisible && <HeavyComponent />}
      </div>
      <div className="py-3">
        <button
          className="btn btn-primary"
          onClick={async () => {
            const _ = (await import("lodash")).default;
            const users = [
              { name: "c" },
              { name: "a" },
              { name: "d" },
              { name: "b" },
            ];
            const sorted = _.orderBy(users, ["name"]);
            const sortElements = sorted.map((m, index) => (
              <p key={index}>{m.name}</p>
            ));
            setSortedElements(sortElements);
          }}
        >
          <p>Sort</p>
        </button>
        <div>{sortedElements}</div>
      </div>
    </div>
  );
};

export default AddHeavyComponentButton;
