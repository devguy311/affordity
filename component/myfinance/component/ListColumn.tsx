import Box from "@mui/material/Box";
import { TFunction } from "i18next";
import { GridCellParams } from "@mui/x-data-grid";
import { DataGridColumnText } from "../../commoncomponent/Text";
import { Tooltip } from "@mui/material";
import { hideSensitiveNumber } from "../../../util/SiteUtil";

export const transactionColumn = (t: TFunction<"dashboardResult">) => [
  {
    field: "date",
    headerName: t("transactionCol1"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>{params.row.date}</DataGridColumnText>
      </Box>
    ),
  },
  {
    field: "value",
    headerName: t("transactionCol2"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>{params.row.value}</DataGridColumnText>
      </Box>
    ),
  },
  {
    field: "type",
    headerName: t("transactionCol3"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>{params.row.type}</DataGridColumnText>
      </Box>
    ),
  },
  {
    field: "category",
    headerName: t("transactionCol4"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>{params.row.category}</DataGridColumnText>
      </Box>
    ),
  },
  {
    field: "bank",
    headerName: t("transactionCol5"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} width={"100%"} display={"flex"}>
        <Tooltip title={params.row.bank}>
          <DataGridColumnText
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {params.row.bank}
          </DataGridColumnText>
        </Tooltip>
      </Box>
    ),
  },
  {
    field: "account",
    headerName: t("transactionCol6"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} width={"100%"} display={"flex"}>
        <Tooltip title={params.row.account}>
          <DataGridColumnText
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
          >
            {params.row.account}
          </DataGridColumnText>
        </Tooltip>
      </Box>
    ),
  },
  {
    field: "cardNumber",
    headerName: t("transactionCol7"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>
          {params.row.cardNumber === "Not loaded"
            ? "Not loaded"
            : hideSensitiveNumber(params.row.cardNumber)}
        </DataGridColumnText>
      </Box>
    ),
  },
  {
    field: "counterparty",
    headerName: t("transactionCol8"),
    minWidth: 118,
    flex: 1,
    renderCell: (params: GridCellParams) => (
      <Box gap={"10px"} display={"flex"}>
        <DataGridColumnText>{params.row.counterparty}</DataGridColumnText>
      </Box>
    ),
  },
];
