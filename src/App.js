import React from "react";
import * as S from "./style";
import Logo from "./components/logo";
import Comment from "./components/Comment";
import EnterEmail from "./components/EnterEmail";
import "./style/global.css";

function App() {
  return (
    <S.Wrapper>
      <S.ContentBox>
        <Logo />
        <div style={{ display: "flex" }}>
          <Comment />
          <EnterEmail />
        </div>
      </S.ContentBox>
      <S.ToolBox>Test</S.ToolBox>
    </S.Wrapper>
  );
}

export default App;
