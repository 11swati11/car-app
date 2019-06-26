import React from "react";
import { NavLink } from "react-router-dom";

import { Logo, PageContainer, H1, Img, Paragraph } from "../styles/CommonStyles";
import LogoImage from "../images/logo.png";

const NotFound = () => {
    return <PageContainer data-pagename="page-not-found">
        <Logo><Img src={LogoImage} alt="Auto1" /></Logo>
        <H1>404 - Not Found</H1>
        <Paragraph textLg>Sorry, the page you are looking for does not exist.</Paragraph>
        <Paragraph textLg>You can always go back to the <NavLink to="/">homepage</NavLink>.</Paragraph>
    </PageContainer>
}

export default NotFound;