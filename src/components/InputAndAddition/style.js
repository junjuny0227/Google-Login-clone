import styled from "styled-components";

export const Wrapper = styled.div`
  width: 508px;
  height: 180.8px;
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
`;

export const InputEmail = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid #747775;
  border-radius: 4px;
  margin: 8px 0 0;
  padding: 13px 15px;
  box-sizing: border-box;
  font-size: 17px;

  &::placeholder {
    font-size: 17px;
    color: #444746;
    padding-left: 0.1px;
    transform: translateY(-2.5px);
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: #444746;
  line-height: 20px;
  margin-top: 41px;
`;

export const ForgetEmail = styled(Text)`
  color: #0b57d0;
  font-weight: 500;
  margin: 0;
  padding: 8.5px 0 3px;
  letter-spacing: 0.25px;
`;

export const GeustMode = styled(Text)`
  color: #0b57d0;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.25px;
`;
