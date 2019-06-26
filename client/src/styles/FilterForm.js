import styled from "styled-components";
import { spacing } from "./_variables";
import { Widget } from "./CommonStyles";
import { Dropdown } from "./Dropdown";

export const FilterFormWidget = styled(Widget)`

`;

export const FilterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ${Dropdown}{
        width: 100%; 
        margin-bottom: ${spacing.md}
    }
    @media (max-width: 768px) {
        margin-bottom: ${spacing.md}
    }
`;