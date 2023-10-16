/* eslint-disable react-hooks/exhaustive-deps */

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import LinkMail from "../LinkMail";

const Terms = () => {
    const { t } = useTranslation("terms");

    return (
        <Container>
            <Box sx={{ flexGrow: 1, padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid textAlign={"left"}>
                            <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" textAlign={"center"}>
                                        {t("title")}
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }} >
                                        {t("title1")}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {t("description1")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("title2")}
                                    </Typography>
                                    <Typography variant="body2" paragraph >
                                        {t("description2")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("title3")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description3")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title4")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description4")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title5")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description5")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title6")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description6")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title7")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description7")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title9")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description9")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("title10")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description10")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title14")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description14")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title15")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description15")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("title16")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description16")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("title17")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description17")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("title18")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("description18")}
                                    </Typography>



                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("titleContact")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("titleContactDescription")}
                                        {" "}
                                        <LinkMail
                                            email="hello@affordify.io"
                                            label="hello@affordify.io"
                                        />
                                        .
                                    </Typography>
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid></Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Terms;