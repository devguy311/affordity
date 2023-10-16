import React, { FC } from "react";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { StyledDataGrid } from "./style";

type Props = {
  rows: any;
  columns: any;
  nodataheight?: string;
  noPadding?: boolean;
} & DataGridProps;
const DataGridWrapper: FC<Props> = ({
  columns,
  rows,
  nodataheight,
  noPadding,
  ...rest
}) => {
  return (
    <StyledDataGrid
      nopadding={noPadding ? 1 : 0}
      nodataheight={nodataheight}
      height={"100%"}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination
        hideFooter
        disableColumnMenu
        autoHeight
        {...rest}
      />
    </StyledDataGrid>
  );
};

export default DataGridWrapper;
