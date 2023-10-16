import Box from "@mui/material/Box";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Checkbox from "@mui/material/Checkbox";
import React, { FC, useState } from "react";
import { BankFilterType } from "../type";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Heading1 } from "../../commoncomponent/CommonStyle";
import { StyledAccordian } from "../style";
import { useWindowSize } from "../../../hooks";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { Tooltip } from "@mui/material";

type FilterAccordianProps = {
  filterInfo: BankFilterType;
  checkedAccounts: number[];
  handleCheckedAccount: (accountId: number) => void;
};
const FilterAccordian: FC<FilterAccordianProps> = ({
  filterInfo,
  checkedAccounts,
  handleCheckedAccount,
}) => {
  const [expand, setExpand] = useState(true);
  const { mobileView } = useWindowSize();

  return (
    <StyledAccordian
      expanded={expand}
      onChange={() => setExpand((prev) => !prev)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"10px"}
        >
          <Box width={["100%"]} minWidth={180} alignItems={"center"} display={"flex"}>
            <NextImage
              alt="Bank"
              height="21px"
              width="41px"
              src={getAssetUrl("redesign/bank.svg")}
            />
            <Tooltip title={filterInfo.name}>
              <DescriptionText2
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                textcolor={"#4F5459"}
                textweight={700}

              >
                {filterInfo.name}
              </DescriptionText2>
            </Tooltip>
          </Box>
          <Box width={"30%"}>
            <Heading1 textsize="14px" textcolor="4F5459">
              {filterInfo.currency || "€"}
              {filterInfo.value.toLocaleString()}
            </Heading1>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0 }}>
        {filterInfo.account.map((item) => (
          <Box
            key={item.name}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"10px"}
          >
            <Box width={"60%"} alignItems={"center"} display={"flex"}>
              <Checkbox
                key={item.name}
                icon={
                  <NextImage
                    src={getAssetUrl("redesign/circle_check.svg")}
                    height="24px"
                    width="24px"
                    alt={"check"}
                  />
                }
                checked={checkedAccounts.includes(item.id)}
                onClick={() => handleCheckedAccount(item.id)}
                checkedIcon={
                  <NextImage
                    src={getAssetUrl("redesign/checkmark.svg")}
                    height="24px"
                    width="24px"
                    alt={"check"}
                  />
                }
              />
              <Tooltip title={item.name}>
                <DescriptionText2
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                  textcolor={"rgba(0, 0, 0, 0.70)"}
                >
                  {item.name}
                </DescriptionText2>
              </Tooltip>
            </Box>
            <Box width={"40%"}>
              <DescriptionText2 textcolor="rgba(0, 0, 0, 0.40)" textsize="14px">
                {item.currency} {item.value.toLocaleString()}
              </DescriptionText2>
            </Box>
          </Box>
        ))}
      </AccordionDetails>
    </StyledAccordian>
  );
};

export default FilterAccordian;
