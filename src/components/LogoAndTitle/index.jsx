import React from "react";
import Logo from "../Logo";
import * as S from "./style";

function LogoAndTitle() {
  return (
    <S.Wrapper>
      <Logo />
      <S.Title>로그인</S.Title>
      <S.Text>Google 계정 사용</S.Text>
    </S.Wrapper>
  );
}

export default LogoAndTitle;
