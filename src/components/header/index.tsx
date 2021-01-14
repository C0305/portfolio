// @ts-ignore
import React, {FC} from "react"
import { Link } from "gatsby"
import logo from "./logo"

interface IHeader {
  links: {
    name: string;
    no: string;
  }[]
}

const Header: FC<IHeader> = ({links}) => {
  return (
    <header className="ec_header">
      <div className="ec_header__item">
        <div className="ec_header__item__nav-logo">
          <img className="ec_header__item__nav-logo__img" src={ 'data:image/svg+xml;base64,'+logo }/>
        </div>
      </div>
      <nav className="ec_header__item">
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
      </nav>
    </header>
  );
}

export default Header;