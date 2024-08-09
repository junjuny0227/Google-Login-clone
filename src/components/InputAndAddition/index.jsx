import React from "react";
import * as S from "./style";

function InputAndAddition() {
  return (
    <S.Wrapper>
      <S.InputEmail placeholder="이메일 또는 휴대전화" />
      <S.ForgetEmail>이메일을 잊으셨나요?</S.ForgetEmail>
      <S.Text>
        내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요.
      </S.Text>
      <S.GeustMode>게스트 모드 사용 방법 자세히 알아보기</S.GeustMode>
    </S.Wrapper>
  );
}

export default InputAndAddition;
