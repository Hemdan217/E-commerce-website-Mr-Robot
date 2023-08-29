import React from "react";

const SectionWrapper = (props) => {
  return (
    <>
      <div className="section-wrapper container">{props.children}</div>
    </>
  );
};

export default SectionWrapper;
