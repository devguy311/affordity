import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeadingText } from "../../commoncomponent/Text";
import ContactFaq from "./ContactFaq";
import ContactInputForm from "./ContactInputForm";

const ContactFormView = () => {
  const { t } = useTranslation("contact");
  return (
    <Grid container p={"24px"}>
      <Grid mb={"40px"} item xs={12}>
        <HeadingText textsize="32px">
          {t("title")}
        </HeadingText>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        order={[2, 2, 1]}
        borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
      >
        <ContactInputForm />
      </Grid>
      <Grid item xs={12} mb={["16px", "16px", "0px"]} md={5} order={[1, 1, 2]}>
        <ContactFaq />
      </Grid>
    </Grid>
  );
};

export default ContactFormView;
