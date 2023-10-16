import React from "react";
import Styled from "@emotion/styled";
import ActivateSubsription from "../profile/component/ActivateSubsription"
import {
    Box,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { DescriptionText2 } from "../commoncomponent/Text";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { CheckIcon } from "../icons";


const CardRoot = Styled(Box)`
    max-width: 750px;
    padding: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
`;

const features = (t: TFunction<"dashboardOverview">) => [
    t("pricingFeature1"),
    t("pricingFeature2"),
    t("pricingFeature3"),
    t("pricingFeature4"),
];

const PricingView = () => {
    const { t } = useTranslation("dashboardOverview");

    return (
        <Box py={[10, 10]}>
            <CardRoot>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <DescriptionText2
                            variant="h1"
                            ml={"32px"}
                            textweight={700}
                            textsize="32px"
                        >
                            {t("pricingTitle")}
                        </DescriptionText2>

                        <List sx={{ maxWidth: "280px", ml: "12px", mt: "20px" }}>
                            {features(t).map((item, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "24px",
                                            " & > svg": {
                                                fontSize: 24,
                                                color: "#248A8A",
                                            },
                                        }}
                                    >
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        sx={{
                                            fontFamily: "Inter",
                                            fontWeight: 400,
                                            color: "#000000",
                                            "& > span": { fontSize: 14, fontFamily: "Inter" },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ActivateSubsription />
                    </Grid>
                </Grid>
            </CardRoot>
        </Box>
    )

}

export default PricingView;