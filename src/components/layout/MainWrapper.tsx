// @ts-ignore
import React, {FC}from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {ISocialLinks, ISocial} from "./interfaces"
import useMediaQuery from "../hooks/useMediaQuery"
import c from "../../constants"

// @ts-ignore
const SocialLinks: FC<ISocialLinks> = ( {links} ) => {
  const isPageWide = useMediaQuery(c.MOBILE_MIN_WIDTH)
  return Object.keys(links).map((key: string, index: number) => {
    let icon;
    let link;
    switch (key) {
      case 'github':
        icon = faGithub
        link = `https://github.com/${links[key]}`
        break;
      case 'linkedin':
        icon = faLinkedinIn
        link = `https://www.linkedin.com/in/${links[key]}`
        break;
      case 'medium':
        icon = faMediumM
        link = `https://medium.com/@${links[key]}`
        break;
    }
    if(key !== "email") {
      return (
        <div key={key+"-"+index}>
          <a href={link}><FontAwesomeIcon className="icon" size={isPageWide ? 'lg' : '2x'} icon={icon}/></a>
        </div>
      )
    }
  })
}

interface IMainWrapper {
  social: ISocial;
  hideSocialLinks?: boolean;
  topDown?: boolean;
}

const MainWrapper: FC<IMainWrapper> = ({social, children, hideSocialLinks, topDown}) => {
  const mailToClass = topDown ? 'top' : "lateral lateral--left"
  const socialToClass = topDown ? 'bottom' : "lateral lateral--right"
  const firstHr = topDown ? '' : "side-line"
  const secondHr = topDown ? '' : "side-line side-line--hide"

  // @ts-ignore
  return (
    <div className="main-wraper">
      <main>
        {hideSocialLinks ? (<></>) : (
          <div className={mailToClass}>
            <hr className={firstHr} color="#B3E3FF"/>
            <p>
              <a href={`mailto:${social.email}?subject=I saw your portfolio, let's talk`}>
                {social.email}
              </a>
            </p>
            <hr className={secondHr} color="#B3E3FF"/>
          </div>
        )}
        <div className={topDown ? 'middle middle-height': 'middle-height'}>
          {children}
        </div>
        {hideSocialLinks ? (<></>) : (
          <div className={socialToClass}>
            <hr className={firstHr} color="#B3E3FF"/>
            <div className="icons">
              <SocialLinks links={social}/>
            </div>
            <hr className={secondHr} color="#B3E3FF"/>
          </div>
        )}
      </main>
    </div>
  )
}

export default MainWrapper;