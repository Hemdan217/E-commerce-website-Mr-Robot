import React from "react";

const SectionHeader = (props) => {
  return (
    <>
      <div className="section-header">{props.children}</div>
    </>
  );
};

export default SectionHeader;
