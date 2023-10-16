import Box from "@mui/material/Box";
import Image from "next/image";
import React, { FC } from "react";

type NextImageProps = {
  alt: string;
  height: string;
  width: string;
  src: string;
  style?: React.CSSProperties;
};
const NextImage: FC<NextImageProps> = ({ alt, height, src, width, style }) => {
  return (
    <Box position={"relative"} height={height} width={width}>
      <Image
        style={style}
        alt={alt}
        src={src}
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default NextImage;
