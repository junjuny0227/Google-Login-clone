import styled from "styled-components";

export const Wrapper = styled.div`
  width: 460px;
  /* height: 116px; */
  margin-top: 32px;
  padding: 0 0 0 24px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

export const EnterEmail = styled.input`
  width: 100%;
  height: 56px;
  padding: 13px 15px;
  border: 1px solid #747775;
  border-radius: 4px;

  ::placeholder {
    color: #444746;
    font-size: 17px;
  }
`;
