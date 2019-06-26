import styled from "styled-components";
import { colors, spacing, fontSize } from "./_variables";

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
`;


export const DropdownToggleIcon = styled.i`
    float: right;
    &:before{
        color: ${colors.light};
        content: ${props => props.name === "angle-up" ? "'\\25B2'" : "'\\25BC'"};
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
    &:hover, &.active{
        text-decoration: none;
        color: #fff;
        background-color: ${colors.primary}
    }
`;
