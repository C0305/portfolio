// @ts-ignore
import React, {FC}from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {ISocialLinks, ISocial} from "./interfaces"
import useMediaQuery from "../hooks/useMediaQuery"
import c from "../../constants"
import styled from "styled-components"

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

const MainWrapperDiv = styled.div`
  background-color: #040D21;
  position: relative;
`;

const MiddleWrapperDiv = styled.div`
  display: flex;
  height: calc(100% - 10rem);
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
  ul {
    margin: auto;
    padding-right: 1rem;
    display: flex;
    flex-flow: column-reverse;
    list-style: none;
    li {
      text-align: left;
      a {
        font-size: 3.5rem;
      }
      p {
        font-size: 3.5rem;
        margin: 0;
      }
      margin: 0 .8rem;
    }
  }
`;



const MainWrapper: FC<IMainWrapper> = ({social, children, hideSocialLinks, topDown}) => {
  const mailToClass = topDown ? 'top' : "lateral lateral--left"
  const socialToClass = topDown ? 'bottom' : "lateral lateral--right"
  const firstHr = topDown ? '' : "side-line"
  const secondHr = topDown ? '' : "side-line side-line--hide"

  // @ts-ignore
  return (
    <MainWrapperDiv className="main-wraper">
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
        <MiddleWrapperDiv>
          {children}
        </MiddleWrapperDiv>
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
    </MainWrapperDiv>
  )
}

export default MainWrapper;