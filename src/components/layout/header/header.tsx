// @ts-ignore
import React, {FC, useState} from "react"
import { Link } from "gatsby"
import logo from "./logo"
import useMediaQuery  from "../../hooks/useMediaQuery"
import c from "../../../constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import MainWrapper from "../MainWrapper"
// @ts-ignore
import config from "../../../../gatsby-config"

interface IHeader {
  links: {
    name: string;
    no: string;
  }[]
}

const PageLinks = ({links}) => {
  return (
    <ul>
      {links.map((item, index) => {
        if(item.name === 'home') {
          return (
            <li key={index}>
              <Link className="ec_header__item__nav-link" to="/">
                <p className="ec_header__item__nav-p">{item.no}.</p>
                {item.name}
              </Link>
            </li>
          )
        }
        return (
          <li key={index}>
            <Link className="ec_header__item__nav-link" to={"/"+item.name}>
              <p className="ec_header__item__nav-p">{item.no}.</p>
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const Header: FC<IHeader> = ({links}) => {
  const isPageWide = useMediaQuery(c.MOBILE_MIN_WIDTH)
  const [isMenuActive, setIsMenuActive] = useState(false)
  const { social } = config.siteMetadata
  return (
<>
  <div className={`ec_header__full-page-navbar ${!isMenuActive ? 'ec_header__full-page-navbar--hide': ''}`}>
    <div className={"ec_header__full-page-navbar__wrapper"}>
      <MainWrapper social={social} hideSocialLinks={false} topDown={true}>
        <PageLinks links={links}/>
      </MainWrapper>
    </div>
  </div>
  <header className="ec_header">
    <div className="ec_header__item">
      <div className="ec_header__item__nav-logo ">
        <img alt="Ernesto Cobos Logo" className="ec_header__item__nav-logo__img ec_header__item__nav-logo__img--full" src={ 'data:image/svg+xml;base64,'+logo }/>
      </div>
    </div>
    <nav className="ec_header__item ec_header__item--right">
      {isPageWide ? (
        <PageLinks links={links}/>
      ): (
        <div className="ec_header__menu_icon">
          <FontAwesomeIcon size="2x"
                           onClick={() => setIsMenuActive(!isMenuActive)}
                           className={`icon ${isMenuActive ? 'icon--active': ''}`}
                           icon={faBars}/>
          <FontAwesomeIcon size="2x"
                           onClick={() => setIsMenuActive(!isMenuActive)}
                           className={`icon ${!isMenuActive ? 'icon--active': ''}`}
                           icon={faTimes}/>
        </div>
      )}
    </nav>
  </header>
</>);
}

export default Header;