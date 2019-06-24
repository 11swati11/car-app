import styled, { css, createGlobalStyle } from "styled-components";
import { colors, spacing, fontSize } from "./_variables";
import { Widget, Button } from "./common";
import {Dropdown} from "./Dropdown";


export const FilterSection = styled(Widget)`
    @media (max-width: 768px) {
        margin-bottom: ${spacing.md}
    }
`;

export const FilterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ${Dropdown}{
        width: 100%; 
        margin-bottom: ${spacing.md}
    }
`;