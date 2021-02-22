
// @ts-ignore
import React from "react"
import { render, screen } from "@testing-library/react"
import PageLinks from "./PageLinks"
import { shallow }from "jest";

const links = [{name: 'contact', no: '04'}, {name: 'work', no: '03'}, {name: 'about', no: '02'}, {name: 'home', no: '01'}];

describe('<PageLinks/>', () => {
  beforeEach(() => {
    const rendered = shallow(<PageLinks links={links} path={"/"}/>)
  })

  it('renders correctly', () => {
    expect(screen).toMatchSnapshot();
  })

})