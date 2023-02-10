import styled from "@emotion/styled";
import { colors } from "../../styles";
import { keyframes } from "@emotion/react";

const animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  animation: ${animation} 2s linear infinite;
  border: 16px solid ${colors.offWhite};
  border-radius: 50%;
  border-top: 16px solid ${colors.navy};
  height: 120px;
  margin: auto;
  width: 120px;
`;
