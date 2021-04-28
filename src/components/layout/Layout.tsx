// @ts-ignore
import React, { FC } from "react"

import Header from "./Header"
// @ts-ignore
import config from "../../../gatsby-config"
import useMediaQuery from "../hooks/useMediaQuery"
import c from "../../constants"
import { ILayout } from "./interfaces"
import MainWrapper from "./MainWrapper"
import styled from "styled-components"
const CurvedTop = styled.svg`
  bottom: -15px;
  left: 0;
  overflow: hidden;
  z-index: 1!important;
  width: 100%!important;
  position: absolute!important;
`;

const FooterContainer = styled.footer`
  height: 2rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top-left-radius: 100% 70px;
  border-top-right-radius: 100% 70px;
`;

const FooterParagraph = styled.p`
  z-index: 1;
  line-height: .5;
  position: absolute;
  margin: 0;
`;

const GlobalWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const Layout: FC<ILayout> = ({ location, children }) => {
  const links = [{name: 'contact', no: '04'}, {name: 'work', no: '03'}, {name: 'about', no: '02'}, {name: 'home', no: '01'}];
  const isPageWide = useMediaQuery(c.MOBILE_MIN_WIDTH)
  const { social } = config.siteMetadata
  const { pathname } = location
  return (
    <GlobalWrapper>
      <Header links={links} path={pathname}/>
      <MainWrapper social={social} hideSocialLinks={!isPageWide}>
        {children}
      </MainWrapper>
      {/*<FooterContainer>*/}
      {/*  <CurvedTop xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40">*/}
      {/*    <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"/>*/}
      {/*  </CurvedTop>*/}
      {/*    <FooterParagraph>Crafted with <span role="img" aria-label="Love">&#10084;&#65039;</span> from México</FooterParagraph>*/}
      {/*</FooterContainer>*/}
    </GlobalWrapper>
  )
}

export default React.memo(Layout)
