import styled from "styled-components";
import { colors, spacing, fontSize } from "./_variables";
import { H2, Paragraph } from "./common";
import { Dropdown, DropdownLabel } from "./Dropdown";

export const CarListHeader = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {        
        flex-direction: column-reverse;
        ${Dropdown}{
            margin-bottom: ${spacing.md};
        }
        ${DropdownLabel}{
            display: inline-block;
        }
        ${Paragraph}{
            float: right;
            font-size: ${fontSize.md};
        }
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    padding-left: 0;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const ListItem = styled.li`
    display: flex;  
    width: 100%;
    border: 2px solid ${colors.light};
    padding: ${spacing.md};
    margin-bottom: ${spacing.md};
`;

export const ListItemImg = styled.picture`
    height:100%; 
    width: 10%; 
    background-color: ${colors.light};
    @media (max-width: 768px) {
        width: 30%;
        min-height: 88px;
    }
`;

export const ListItemText = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 ${spacing.md};
    ${Paragraph}{
        text-transform: capitalize; margin: 0;
    }
    a{
        color: ${colors.primary};
        &:hover{
            ${colors.primaryHover}
        }
    }
`;

export const ListLoader = styled(List)`
    ${ListItemText}{
        width: 90%;
        ${H2}, ${Paragraph}, a{
            background-color: ${colors.light}; 
            line-height: 1.2;
        }
        ${H2}{
            width: 40%; 
            line-height: 1.5; 
            margin-bottom: 0.3rem;
        }
        ${Paragraph}{
            width: 40%; 
            margin-bottom: 0.5rem;
        }
        a{
            width: 10%;
        }        
    }
`;