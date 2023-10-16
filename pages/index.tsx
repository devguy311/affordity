import dynamic from "next/dynamic";
import Seo from "../component/Seo";

import { useTranslation } from "react-i18next";

const HomePage = dynamic(import("../component/homepage"), {
  ssr: false,
});

export default function Home() {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
        meta={[
          {
            name: "keywords",
            content: t("home.keywords"),
          },
        ]}
      />
      <HomePage />
    </>
  );
}
