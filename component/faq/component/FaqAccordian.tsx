import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import { AccordianContainer } from "../style";
import { FaqQuestionType } from "../type";
import { DescriptionText2 } from "../../commoncomponent/Text";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type FaqAccordianProps = {
  question: FaqQuestionType;
};
const FaqAccordian: FC<FaqAccordianProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <AccordianContainer>
      <Grid
        alignItems={"center"}
        container
        style={{ cursor: "pointer" }}
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        <Grid item xs={11} display={"flex"} gap={"20px"}>
          <DescriptionText2>{question.question}</DescriptionText2>
        </Grid>
        <Grid item xs={1}>
          {showAnswer ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Grid>
      </Grid>
      {showAnswer && (
        <Box mt={"30px"}>
          <DescriptionText2
            style={{ lineHeight: "175%" }}
            textcolor="rgba(0, 0, 0, 0.5)"
            textsize="14px"
          >
            {question.answer}
          </DescriptionText2>
        </Box>
      )}
    </AccordianContainer>
  );
};

export default FaqAccordian;
