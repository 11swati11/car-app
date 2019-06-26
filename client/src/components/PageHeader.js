import React from "react";

import { Logo, PageContainer, Img } from "../styles/CommonStyles";
import { Header, Nav, NavItem } from "../styles/Header";
import LogoImage from "../images/logo.png";

const PageHeader = () => {
    return <Header>
        <PageContainer>
            <Logo><Img src={LogoImage} alt="Auto1" /></Logo>
            <Nav>
                <NavItem>Purchase</NavItem>
                <NavItem>My Orders</NavItem>
                <NavItem>Sell</NavItem>
            </Nav>
        </PageContainer>
    </Header>
}

export default PageHeader;