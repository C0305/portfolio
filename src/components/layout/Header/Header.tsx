// @ts-ignore
import React, {FC, useState} from "react"
import logo from "./logo"
import useMediaQuery  from "../../hooks/useMediaQuery"
import c from "../../../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import MainWrapper from "../MainWrapper"
// @ts-ignore
import config from "../../../../gatsby-config"
import {IHeader} from "../interfaces"
import PageLinks from "./PageLinks"
import styled from "styled-components"

const HeaderFullPageNavBar = styled.div<{visible: boolean;}>`
  width: 100vw;
  height: 100vh;
  background-color: #040D21;
  position: absolute;
  z-index: 2;
  display: ${p => p.visible ? 'initial' : 'none'};
`;

const HeaderFullPageNavBarWrapper = styled.div`
  margin-top: 5.5rem;
`;

const ECHEader =  styled.header`
  padding-top: 1rem;
  background: #040D21;
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ECHEaderItem = styled.div`
  display: flex;
  justify-content: center;
`;

const ECHEaderItemNavLogo = styled.div`
  height: 100%;
  margin: auto auto auto 2rem;
  padding: 1%;
  z-index: 3;
`;

const ECHEaderItemNavLogoIMG = styled.img`
  height: 80%;
  color:  white;
  transition: .5s;
  &:hover {
    transition: .5s;
    height: 100%;
  }
`;

const ECHEaderItemRight = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  ul {
    list-style: none;
    margin: auto 1rem auto auto;
    li {
      float: right;
      margin: 0 .8rem;
    }
  }
`;

const ECHEaderMenuIcon = styled.div`
  align-self: start;
  width: 100%;
  height: 100%;
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-items: center;

  .icon {
    transition: .6s;
    opacity: 1;
    float: left;
    z-index: 3;
    position: absolute;
    &--active {
      transform: rotate(90deg);
      opacity: 0;
      transition: .6s;
    }
  }

  svg {
    margin-right: 1rem;
    color: white;
    height: 2rem;

  }
`;
const Header: FC<IHeader> = ({links, path}) => {
  const isPageWide = useMediaQuery(c.MOBILE_MIN_WIDTH)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { social } = config.siteMetadata
  return (
    <>
      <HeaderFullPageNavBar visible={isMenuActive}>
        <HeaderFullPageNavBarWrapper>
          <MainWrapper social={social} hideSocialLinks={false} topDown={true}>
            <PageLinks links={links} path={path}/>
          </MainWrapper>
        </HeaderFullPageNavBarWrapper>
      </HeaderFullPageNavBar>
      <ECHEader>
        <ECHEaderItem>
          <ECHEaderItemNavLogo>
            <ECHEaderItemNavLogoIMG alt="Ernesto Cobos Logo"  src={ 'data:image/svg+xml;base64,'+logo }/>
          </ECHEaderItemNavLogo>
        </ECHEaderItem>
        <ECHEaderItemRight>
          {isPageWide ? (
            <PageLinks links={links} path={path}/>
          ): (
            <ECHEaderMenuIcon>
              <FontAwesomeIcon size="2x"
                               onClick={() => setIsMenuActive(!isMenuActive)}
                               className={`icon ${isMenuActive ? 'icon--active': ''}`}
                               icon={faBars}/>
              <FontAwesomeIcon size="2x"
                               onClick={() => setIsMenuActive(!isMenuActive)}
                               className={`icon ${!isMenuActive ? 'icon--active': ''}`}
                               icon={faTimes}/>
            </ECHEaderMenuIcon>
          )}
        </ECHEaderItemRight>
      </ECHEader>
    </>
  );
}

export default React.memo(Header);