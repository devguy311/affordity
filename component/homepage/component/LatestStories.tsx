/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Description1, Heading1 } from "../../commoncomponent/Style";
import { SecondaryButton1 } from "../../commoncomponent/Button";
import CarouselStories from "./CarouselStories";
import { getAssetUrl } from "../../../util/SiteUtil";
import { useWindowSize } from "../../../hooks";
import StoryMobileCard from "./StoryMobileCard";
import Image from "next/image";
import { useRouter } from "next/router";

type LatestStoriesProps = {
  storiesList: any[];
};

const LatestStories: FC<LatestStoriesProps> = ({ storiesList }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { mobileView } = useWindowSize();
  const router = useRouter();
  const { t } = useTranslation("homepage");

  const locale = router?.locale ?? "en";

  const handleNextStory = () => {
    if (storiesList.length - 1 > selectedIndex) {
      scrollRef.current?.scroll({
        behavior: "smooth",
        left: scrollRef.current!.scrollLeft + 350,
      });
      setTimeout(() => {
        setSelectedIndex((prev) => prev + 1);
      }, 500);
    }
  };
  const handlePrevStory = () => {
    if (selectedIndex !== 0) {
      scrollRef.current?.scroll({
        behavior: "smooth",
        left: scrollRef.current!.scrollLeft - 350,
      });
      setTimeout(() => {
        setSelectedIndex((prev) => prev - 1);
      }, 500);
    }
  };

  if (mobileView) {
    return (
      <Grid container justifyContent={"center"}>
        <Grid item xs={10} mt={"64px"}>
          <Description1 textAlign={"left"} textsize="14px" textcolor="#285D74">
            {t("storiesTitle")}
          </Description1>
          <Heading1 textAlign={"left"} textsize="32px" mt={"15px"}>
            {t("storiesDescription")}
          </Heading1>
        </Grid>
        <Grid item xs={11}>
          {storiesList?.slice(4, 7).map((item) => (
            <StoryMobileCard story={item[locale]} key={item[locale].blogId} />
          ))}
        </Grid>
        <Grid
          mt={"40px"}
          item
          xs={11}
          display={"flex"}
          justifyContent={"center"}
        >
          <SecondaryButton1 onClick={() => router.push("/blog")}>
            {t("seeAllstories")}
          </SecondaryButton1>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container mt={"120px"}>
      <Grid item xs={10}>
        <Description1 textcolor="#285D74">{t("storiesTitle")}</Description1>
        <Heading1 mt={"15px"}>{t("storiesDescription")}</Heading1>
      </Grid>
      <Grid item xs={2} display={"flex"} flexDirection={"column-reverse"}>
        <Description1
          width={"fit-content"}
          position={"relative"}
          bottom={"20px"}
          textsize="12px"
          style={{ fontWeight: 700, cursor: "pointer" }}
          borderBottom={"1px solid #000000"}
          textcolor="#000"
          onClick={() => router.push("/blog")}
        >
          {t("seeAllstories")}
        </Description1>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"40px"}
        display={"flex"}
        gap={"30px"}
        onScroll={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        overflow={"hidden"}
        ref={scrollRef}
      >
        {storiesList.slice(0, 6).map((item, index) => (
          <CarouselStories
            isActive={index === selectedIndex}
            story={item[locale]}
            key={item[locale].blogId}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <Box display={"flex"} gap={"40px"}>
              <Description1
                style={{ cursor: "pointer" }}
                onClick={handlePrevStory}
                alignItems={"center"}
                display={"flex"}
                gap={"16px"}
              >
                <Image
                  src={getAssetUrl("redesign/arrowleft.webp")}
                  alt={"left"}
                  width={"20px"}
                  height={"20px"}
                />
                {t("previous")}
              </Description1>
              <Description1
                onClick={handleNextStory}
                style={{ cursor: "pointer" }}
                alignItems={"center"}
                display={"flex"}
                gap={"16px"}
              >
                {t("next")}
                <Image
                  src={getAssetUrl("redesign/arrowright.webp")}
                  alt={"left"}
                  width={"20px"}
                  height={"20px"}
                />
              </Description1>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestStories;
