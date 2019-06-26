import styled from "styled-components";
import {colors,spacing} from "./_variables";

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    border-top: 2px solid ${colors.light};
    padding: ${spacing.sm} ${spacing.lg};
`;