import styled from "styled-components";
import { colors, spacing, fontSize} from "./_variables";

export const PaginationList = styled.div`
    display: flex;
    justify-content: center;
`;

export const PaginationItem = styled.a`
    color: ${colors.primary};
    margin: ${spacing.sm} ${spacing.md};
    &:hover{
        color: ${colors.primaryHover};
    }
`;

export const PaginationStatus = styled.span`
    margin: ${spacing.sm} ${spacing.md};
`;
