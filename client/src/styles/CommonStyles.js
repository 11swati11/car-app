import styled, { css, createGlobalStyle } from "styled-components";
import { containerWidth, colors, spacing, fontSize } from "./_variables";

export const GlobalStyles = createGlobalStyle`
  html, body, #root{margin: 0; height: 100%; min-height: 100%;}
  html{box-sizing: border-box; font-size: 62.5%;}
  body{font-size: ${fontSize.md}; color: ${colors.dark}; font-family: "Roboto", sans-serif;}
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  button, 
  [type="button"], 
  [type="reset"], 
  [type="submit"]{
    -webkit-appearance: none; outline: none;
   &:focus{ -webkit-appearance: none; outline: none;}
  }
  a{
    text-decoration: none;
    :hover{text-decoration: underline;}
    }
`;

export const Headings = css`
  color: ${colors.dark};
  font-weight: 600;
  margin: 0;
`;

export const H1 = styled.h1`
  ${Headings}
  font-size: ${fontSize.xl};
  line-height: 38px;  
`;

export const H2 = styled.h2`
  ${Headings}
  font-size: ${fontSize.lg};
  line-height: 1.6;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  font-size: ${props => (props.textLg ? fontSize.lg : fontSize.md)};
  margin: ${props => (props.textLg ? 0 : spacing.sm)} 0;
  ${H2} &{font-weight: 400; margin-top: ${spacing.sm};} 
`;

export const Button = styled.button`
  width: 50%;
  background-color: ${colors.primary};
  color: #fff;
  font-size: ${fontSize.md};
  text-align: center;
  padding: ${spacing.sm} ${spacing.lg};  
  cursor: pointer;
  border-radius: 3px;
  border: none;
  outline: none;
  &:hover{
    background-color: ${colors.primaryHover};
    text-decoration: none;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const AnchorLink = styled.a`
  color: ${colors.primary};
  font-size: inherit;
`;

export const Logo = styled.a`
    width: 180px;
    cursor: pointer;
    @media (max-width: 768px) {
        display: inline-block;
        width: 140px;
        margin-top: ${spacing.sm}
    }
`;

export const PageWrapper = styled.div`
  min-height: 100%;
  padding-bottom: 8rem; 
  margin-bottom: -8rem;
`;

export const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;  
    max-width: ${containerWidth};
    margin: 0 auto;
    padding: ${spacing.lg};   
    &[data-pagename='page-not-found']{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      ${Paragraph}, ${H1}{margin: 1rem 0;}
      a{color:${colors.primary}}
    }
    &[data-pagename='page-details']{
      a{
        display: inline-block;
        color: ${colors.primary};
        margin: 1rem 0 2rem;
      }
    }
    @media (max-width: 768px) {
        display: block;
        padding: ${spacing.md};
    }
  `;

export const PageSidebar = styled.aside`
    flex: 0 0 30%;
`;

export const PageContent = styled.section`
    flex: 0 0 66%;
`;

export const PageBanner = styled.section`
    flex: 0 0 100%;
    text-align: center;
    min-height: 30rem;
    background-color: ${colors.light};
    img{margin-top: 2rem;}
    @media (max-width: 768px) {
        min-height: 20rem;
    }
`;

export const Widget = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${colors.light};
    padding: ${spacing.lg};

    ${Button}{
        width: 50%;
        align-self: flex-end;
    }
    ${Paragraph}{
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: ${spacing.md};
    }

`;




