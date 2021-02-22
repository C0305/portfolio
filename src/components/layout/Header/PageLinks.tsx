// @ts-ignore
import React, { FC } from "react"
import { IPageLinks } from "../interfaces"
import { Link } from "gatsby"

const PageLinks: FC <IPageLinks> = ({links, path}) => {
  return (
    <ul>
      {links.map((item, index) => {
        let isPathActive;
        if(item.name === 'home') {
          isPathActive = path === "/"
          const linkClass = isPathActive ? "ec_header__item__nav-link ec_header__item__nav-link__nav-link--selected" : "ec_header__item__nav-link"
          return (
            <li key={item.name}>
              <Link className={linkClass} to="/">
                <p className="ec_header__item__nav-p">{item.no}.</p>
                {item.name}
              </Link>
            </li>
          )
        }
        isPathActive = path === "/"+item.name
        const linkClass = isPathActive ? "ec_header__item__nav-link ec_header__item__nav-link__nav-link--selected" : "ec_header__item__nav-link"
        return (
          <li key={item.name}>
            <Link className={linkClass} to={"/"+item.name}>
              <p className="ec_header__item__nav-p">{item.no}.</p>
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default React.memo(PageLinks)