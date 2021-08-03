import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("カラフル");
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color,
    fontSize: "18px"
  };
  return (
    <>
      {/* <p style={contentStyle}>{props.message}</p> */}
      <p style={contentStyle}>{children}</p>
    </>
  );
};

// export default ColorfulMessage;
