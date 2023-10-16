import { FC } from "react";
import { Box1, ColumnContainer, ValueContainer, ValueText } from "./style";

type GraphBlockProps = {
  height: string;
  color: string;
  valueText: string;
  reverse?: boolean;
};

const GraphBlock: FC<GraphBlockProps> = ({
  color,
  height,
  reverse,
  valueText,
}) => {
  return (
    <Box1
      mt={"5px"}
      style={{ height, flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <ValueContainer
        style={{
          flexDirection: reverse ? "row-reverse" : "row",
          borderTop: "1px dashed #B0AEB3",
        }}
      >
        <ValueText>{valueText}</ValueText>
      </ValueContainer>
      <ColumnContainer bgcolor={color} />
    </Box1>
  );
};

export default GraphBlock;
