import React from "react";
import Seo from "../../component/Seo";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";


const Faq = dynamic(import("../../component/faq/Faq"), { ssr: false });
const FaqPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("faq.title")}
        description={t("faq.description") as string}
      />

      <Faq />
    </>
  );
}

export default FaqPage;
