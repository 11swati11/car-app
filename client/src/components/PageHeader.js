import React from "react";
import { Header, Logo, Nav, NavItem } from "../styles/Header";
import LogoImage from "../images/logo.png";

const PageHeader = () => {
    return <Header>
        <Logo href="javascript:;"><img src={LogoImage} alt="Auto1" /></Logo>
        <Nav>
            <NavItem href="javascript:;">Purchase</NavItem>
            <NavItem href="javascript:;">My Orders</NavItem>
            <NavItem href="javascript:;">Sell</NavItem>
        </Nav>
    </Header>
}

export default PageHeader;