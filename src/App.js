import React from "react";
import * as S from "./style";
import LogoAndTitle from "./components/LogoAndTitle";
import InputAndAddition from "./components/InputAndAddition";
import SubmitButtons from "./components/SubmitButtons";
import "./styles/global.css";

function App() {
  return (
    <S.Wrapper>
      <S.MainContentBox>
        <S.FlexBox>
          <LogoAndTitle />
          <InputAndAddition />
        </S.FlexBox>
        <SubmitButtons />
      </S.MainContentBox>
      <S.SubContentBox>
        <div>asdf</div>
        <div>asdf</div>
      </S.SubContentBox>
    </S.Wrapper>
  );
}

export default App;
