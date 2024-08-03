import React from "react";
import * as S from "./style";
import Logo from "./components/logo";
import Comment from "./components/comment/comment.jsx";
import "./style/global.css";

function App() {
  return (
    <S.Wrapper>
      <S.ContentBox>
        <Logo />
        <div>
          <Comment></Comment>
        </div>
      </S.ContentBox>
      <S.ToolBox>Test</S.ToolBox>
    </S.Wrapper>
  );
}

export default App;
