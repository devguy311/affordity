/* eslint-disable react-hooks/exhaustive-deps */

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { useTranslation } from "react-i18next";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import LinkMail from "../LinkMail";

const Privacy = () => {
    const { t } = useTranslation("privacy");

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
                                        {t("title2")}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {t("titleDescription1")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("titleTypes")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("titleTypesDescription")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
                                        {t("titleHow")}
                                    </Typography>

                                    <List
                                        subheader={
                                            <ListSubheader>
                                                <Typography variant="subtitle1">
                                                    {t("titleHowListTitle")}
                                                </Typography>
                                            </ListSubheader>
                                        }
                                    >
                                        <ListItem dense >
                                            <Typography variant="body2" >
                                                {t("listItem1")}
                                            </Typography>
                                        </ListItem>
                                        <ListItem dense>
                                            <Typography variant="body2" >
                                                {t("listItem2")}
                                            </Typography>
                                        </ListItem >
                                        <ListItem dense>
                                            <Typography variant="body2" >
                                                {t("listItem3")}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("titleDisclosure")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("titleDisclosureDescription1")}
                                        <br />
                                        {t("titleDisclosureDescription2")}
                                        <br />
                                        {t("titleDisclosureDescription3")}
                                        <br />
                                        {t("titleDisclosureDescription4")}
                                        <br />
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("titleYourRights")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("titleYourRightsDescription1")}
                                        {" "}
                                        <LinkMail
                                            email="hello@affordify.io"
                                            label="hello@affordify.io"
                                        />
                                        {t("titleYourRightsDescription2")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {t("titleChanges")}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {t("titleChangesDescription")}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} >
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

export default Privacy;
