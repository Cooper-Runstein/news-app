import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 10px ${colors.navy}, inset 0 -1px 1px ${colors.navy};
  padding: 16px;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  min-width: 300px;
`;
