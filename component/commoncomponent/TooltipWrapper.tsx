import Grid from "@mui/material/Grid";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { FC, useState } from "react";
import { DescriptionText } from "./CommonStyle";
import { LinkText } from "./Style";
import { styled } from "@mui/material/styles";

type TooltipWrapperProps = {
    description: string;
    label: string;
};

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 489,
        background: "#333",
        boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        padding: 24,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#333",
    },
}));

const TooltipWrapper: FC<TooltipWrapperProps> = ({ description, label }) => {
    const [openTooltip, setOpenToolTip] = useState(false);

    return (
        <HtmlTooltip
            arrow
            open={openTooltip}
            title={
                <Grid container>
                    <Grid item xs={12}>
                        <DescriptionText
                            style={{ letterSpacing: "-0.02em" }}
                            textcolor="#fff"
                            textsize="14px"
                        >
                            {description}
                        </DescriptionText>
                    </Grid>
                </Grid>
            }
        >
            <LinkText
                onMouseLeave={() => setOpenToolTip(false)}
                onMouseEnter={() => setOpenToolTip(true)}
            >
                {label}
            </LinkText>
        </HtmlTooltip>
    );
};

export default TooltipWrapper;
