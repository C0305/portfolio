// @ts-ignore
import React, { FC } from "react"

import Header from "./Header"
// @ts-ignore
import config from "../../../gatsby-config"
import useMediaQuery from "../hooks/useMediaQuery"
import c from "../../constants"
import { ILayout } from "./interfaces"
import MainWrapper from "./MainWrapper"



const Layout: FC<ILayout> = ({ location, children }) => {
  const links = [{name: 'contact', no: '04'}, {name: 'work', no: '03'}, {name: 'about', no: '02'}, {name: 'home', no: '01'}];
  const isPageWide = useMediaQuery(c.MOBILE_MIN_WIDTH)
  const { social } = config.siteMetadata
  const { pathname } = location
  return (
    <div className="global-wrapper">
      <Header links={links} path={pathname}/>
      <MainWrapper social={social} hideSocialLinks={!isPageWide}>
        {children}
      </MainWrapper>
      <footer className={pathname === '/' && 'home-page'}>
        <p>Crafted with <span role="img" aria-label="Love">&#10084;&#65039;</span> from México</p>
      </footer>
    </div>
  )
}

export default React.memo(Layout)
