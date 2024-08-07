import styled from "styled-components";

export const Wrapper = styled.div`
  width: 508px;
  height: 252.8px;
  padding: 0 24px 0 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 400;
  color: #1f1f1f;
  margin: 21px 0 0; // 원본보다 3px 적음
  line-height: 44px;
`;

export const Text = styled(Title)`
  font-size: 16px;
  line-height: 24px;
  margin: 18px 0 0; // 원본보다 2px 큼
`;
