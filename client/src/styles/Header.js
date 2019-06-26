import styled from "styled-components";
import {colors,spacing} from "./_variables";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${colors.light};
    height: 8rem;
    padding: ${spacing.sm} ${spacing.lg};
    @media (max-width: 768px) {
        display: block;
        text-align: center;
        height: auto;
    }
`;

export const Nav = styled.nav`
    display:flex;
    align-self: center;
    list-style: none;
    @media (max-width: 768px) {
        display: block;
        justify-content: center;
        margin-top: ${spacing.md}
    }
`;

export const NavItem = styled.a`
    color: inherit;
    cursor: pointer;
    margin: 0 ${spacing.sm};
    padding: ${spacing.sm} ${spacing.md}
`;