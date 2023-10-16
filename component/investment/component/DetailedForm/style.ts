import { Box } from "@mui/material";
import Styled from "@emotion/styled";

type GoalTabProps = {
  isactive: boolean;
  istransparent?: boolean;
};

export const GoalTab = Styled(Box)<GoalTabProps>`
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1rem;
  background: rgba(40, 132, 216, 0.05);
  color: black;

  transition: background-color .25s ease-in-out, color .25s ease-in-out;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    letter-spacing: -0.0175rem;
  }

  ${(props) =>
    props.isactive &&
    `
      color: #1976d2;
  `}

  ${(props) =>
    props.istransparent &&
    `
      background: transparent;
  `}
`;
