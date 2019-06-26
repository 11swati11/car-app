import styled from "styled-components";
import { colors, spacing} from "./_variables";

export const PaginationList = styled.div`
    display: flex;
    justify-content: center;
`;

export const PaginationItem = styled.button`
    color: ${colors.primary};
    margin: ${spacing.sm} ${spacing.md};
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        color: ${colors.primaryHover};
    }
    &[disabled]{opacity:0.4; pointer-events:none}
`;

export const PaginationStatus = styled.span`
    margin: ${spacing.sm} ${spacing.md};
    @media (max-width: 768px) { margin: ${spacing.sm} 0}
`;
