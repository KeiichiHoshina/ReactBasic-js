import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="お元気です！" /> */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
