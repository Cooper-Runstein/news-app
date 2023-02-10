import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Button = styled.button`
  background-color: ${colors.yellow};
  border-radius: 8px;
  border: none;
  box-shadow: 1px 1px ${colors.yellow};
  color: ${colors.purple};
  cursor: pointer;
  padding: 16px;
  width: 128px;
`;
