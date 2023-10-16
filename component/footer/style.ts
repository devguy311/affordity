import Styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid/Grid";
import { getAssetUrl } from "../../util/SiteUtil";

export const FooterContainer = Styled(Grid)`
    background-image: url(${getAssetUrl("redesign/footerbg.svg")});
    height: 438px;
    margin-top: 102px;
    border-top: 1px solid #E0E0E0;
    padding-top: 50px;
`;

export const SoonTagStyle = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.02em;
    color: dark green;
    background: white;
    border-radius: 100px;
`;
