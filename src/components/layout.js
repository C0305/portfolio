import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const links = [{name: 'contact', no: '04'}, {name: 'work', no: '03'}, {name: 'about', no: '02'}, {name: 'home', no: '01'}];
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
            <p>Crafted with <span role="img" aria-label="Love">&#10084;&#65039;</span> from mexico</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Layout
