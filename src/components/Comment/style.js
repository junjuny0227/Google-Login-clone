import styled from "styled-components";

export const Wrapper = styled.div`
  width: 460px;
  height: 116px;
  padding: 0 24px 0 0;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 44px;
  color: #1f1f1f;
  margin-top: 22px;
  line-height: 52px;
`;

export const SubText = styled(Text)`
  font-size: 16px;
  margin-top: 17px;
  line-height: 24px;
`;
