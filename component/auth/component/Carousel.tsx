import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { FC, useCallback, useState } from "react";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Heading1 } from "../../commoncomponent/CommonStyle";
import { Description1 } from "../../commoncomponent/Style";
import { CarouselContainer } from "../style";
import { AuthCarouselData } from "../util";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import Image from "next/image";
import { useWindowSize } from "../../../hooks";

type FeatureCarouselProps = {
  carouselHeight: string;
};
const FeatureCarousel: FC<FeatureCarouselProps> = ({ carouselHeight }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const { mobileView } = useWindowSize();
  return (
    <Swiper
      navigation={true}
      loop={true}
      onSwiper={setSwiperRef}
      modules={[EffectFade, Navigation]}
      className="mySwiper"
    >
      {AuthCarouselData.map((item) => (
        <SwiperSlide key={item.id}>
          <CarouselContainer
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            p={"40px"}
            height={carouselHeight}
            bgimage={item.image}
          >
            <Grid container>
              <Grid item xs={12}>
                <Description1 align="left" textcolor="#fff" textsize="12px">
                  {item.title}
                </Description1>
              </Grid>
              <Grid item xs={12}>
                <Heading1
                  textcolor="#fff"
                  textsize={mobileView ? "24px" : "40px"}
                  style={{ lineHeight: mobileView ? "28px" : undefined }}
                >
                  {item.info}
                </Heading1>
              </Grid>
              <Grid
                display={["none", "none", "block"]}
                item
                xs={12}
                mt={"16px"}
              >
                <Grid
                  container
                  justifyContent={"flex-end"}
                  gap={"16px"}
                  flexWrap={"nowrap"}
                >
                  <Box
                    position={"relative"}
                    height={"48px"}
                    width={"48px"}
                    onClick={handlePrevious}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      alt="prev"
                      src={getAssetUrl("redesign/arrowleftoutline.svg")}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                  <Box
                    position={"relative"}
                    height={"48px"}
                    style={{ cursor: "pointer" }}
                    onClick={handleNext}
                    width={"48px"}
                  >
                    <Image
                      alt="next"
                      src={getAssetUrl("redesign/arrow_right_outline.svg")}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CarouselContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureCarousel;
