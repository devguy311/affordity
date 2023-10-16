import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import FaqContact from "./FaqContact";
import Grid from "@mui/material/Grid";
import { HeadingText } from "../../commoncomponent/Text";
import FaqAccordian from "./FaqAccordian";
import { faqQuestion } from "../util";

const FaqQuestion = () => {
  const { t } = useTranslation("faq");
  const { mobileView } = useWindowSize();
  return (
    <Grid container p={"24px"}>
      <Grid mb={"40px"} item xs={12}>
        <HeadingText textsize={mobileView ? "32px" : "52px"}>
          {t("faqTitle")}
        </HeadingText>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        pr={["0px", "0px", "80px"]}
        order={[2, 2, 1]}
        borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
      >
        {faqQuestion(t).map((item) => (
          <Grid mt={"20px"} key={item.id} item xs={12}>
            <FaqAccordian question={item} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} mb={["16px", "16px", "0px"]} md={5} order={[1, 1, 2]}>
        <FaqContact />
      </Grid>
    </Grid>
  );
};

export default FaqQuestion;
