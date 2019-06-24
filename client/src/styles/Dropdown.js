import styled from "styled-components";
import { colors, spacing, fontSize} from "./_variables";

// const upArrowCode = "\25B2";
// const downArrowCode = "\25BC";

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;    
    width: 250px;
`;

export const DropdownLabel = styled.label`
    display: inline-block;
    font-size: ${fontSize.sm};
    line-height: 2.2;    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const DropdownToggle = styled.div`
    width: 100%;
    background-color: #fff;
    position: relative;    
    border-radius: 3px;
    border: 2px solid ${colors.light};
    text-align: left;
    padding: ${spacing.sm};
    &:after{
        position: absolute;
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: .255em;
        vertical-align: .255em;
        content: "\25bc";
    }
`;

export const DropdownList = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 103%;
    border-radius: 3px;
    background-color: #fff;
    border: 2px solid ${colors.light};
    z-index: 2;
`;

export const DropdownItem = styled.a`
    display: block;
    width: 100%;
    padding: ${spacing.sm};
    color: inherit;
    border-bottom: 2px solid ${colors.light};
    cursor: pointer;
    &:last-child{border-bottom: none;}
    &:hover{
        text-decoration: none;
        color: #fff;
        background-color: ${colors.primary}
    }
`;
