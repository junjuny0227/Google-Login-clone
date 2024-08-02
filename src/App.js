import React from "react";
import * as S from "./style";
import Logo from "./components/logo";
import "./style/global.css";

function App() {
  return (
    <S.Wrapper>
      <S.contentBox>
        <Logo />
      </S.contentBox>
    </S.Wrapper>
  );
}

export default App;
