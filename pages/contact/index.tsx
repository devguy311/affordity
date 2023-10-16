import React from "react";

import Seo from "../../component/Seo";
import ContactPage from "../../component/contactus/ContactUs";
import { useTranslation } from "react-i18next";


const ContactPageView = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("contact.title")}
        description={t("contact.description") as string}
      />
      <ContactPage />
    </>
  );
};

export default ContactPageView;
