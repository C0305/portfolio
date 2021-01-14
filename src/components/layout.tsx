// @ts-ignore
import React, { FC } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Header from "./header"
interface ILayout {
  title: string;
  location: {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string
    state: any
  }
}
const Layout: FC<ILayout> = ({ location, title, children }) => {
  const links = [{name: 'contact', no: '04'}, {name: 'work', no: '03'}, {name: 'about', no: '02'}, {name: 'home', no: '01'}];
  return (
    <div className="global-wrapper">
      <Header links={links}/>
      <div className="main-wraper">
        <main>
          <div className="lateral lateral--left">
            <hr className="side-line" color="#B3E3FF"/>
            <p>ernesto@cobos.io</p>
          </div>
          <div>
            {children}
          </div>
          <div className="lateral lateral--right">
            <hr className="side-line" color="#B3E3FF"/>
            <div className="icons">
              <div>
                <FontAwesomeIcon className="icon" size={'lg'} icon={faGithub}/>
              </div>
              <div>
                <FontAwesomeIcon className="icon" size={'lg'} icon={faMediumM}/>
              </div>
              <div>
                <FontAwesomeIcon className="icon" size={'lg'} icon={faLinkedinIn}/>
              </div>
            </div>
          </div>
          <footer>
            <p>Crafted with <span role="img" aria-label="Love">&#10084;&#65039;</span> from México</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Layout
