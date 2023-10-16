import Styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

export const CardInfoContainer = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(40, 132, 216, 0.25);
    border-radius: 16px;
    padding: 40px;
`;

export const CardContainer = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.15));
`;

export const Box1 = Styled(Grid)`
    width: 100px;
    display: flex;
`;

export const ValueContainer = Styled(Grid)`
    flex: 1;
    display: flex;
`;

export const ValueText = Styled(Typography)`
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #7A7A7A;
    text-transform: uppercase;
    
`;

export const ColumnContainer = Styled(Grid)`
    width: 9px;
    border-radius: 20px;
`;
type StyledDataGridProps = {
    nodataheight?: string;
    nopadding?: number;
};
export const StyledDataGrid = Styled(Grid) <StyledDataGridProps>`
  & .MuiDataGrid-columnSeparator {
      display: none;
  };
  
  & .MuiDataGrid-root {
      border-radius: 13px;
      border: 0px;
  };
  
  & .MuiDataGrid-virtualScrollerContent {
      height: ${(props) => props.nodataheight || undefined} !important;
  }
  
  & .MuiDataGrid-columnHeader {
      font-size: 12px;
      outline: none !important;
  };
  
  & .MuiDataGrid-columnHeaders {
      border: 0 !important;
  }
  & .MuiDataGrid-cell {
      font-size: 12px;
      outline: none !important;
      ${(props) =>
        props.nopadding &&
        `
          padding: 0px !important;
          border-bottom: 0px;
      `};
  };
  
  & .MuiDataGrid-columnHeaderTitle {
              color: #4F5459;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400 !important;
          line-height: 125%; /* 17.5px */
          letter-spacing: -0.28px;
            /* text-transform: uppercase; */
            letter-spacing: -0.01em;
            overflow: visible;
            text-overflow: unset;
            
  };
  
  & .MuiDataGrid-columnsContainer {
      border-bottom: none !important;
            border-radius: 12;
            top: 4px;
  };
  
  & .MuiDataGrid-row {
      width: unset;
      outline: none !important;
  }
  
  & .MuiDataGrid-row:hover {
      background-color: red;
      border-radius: 0px;
  }
  
  & .MuiDataGrid-main {
      background-color: white;
            border-radius: 10px;
  }
  
  & .MuiDataGrid-window {
      top: 62px !important;
  }
  & .MuiDataGrid-columnHeaderTitleContainer {
      padding: 0;
  }
`;
