import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../images/logo.svg"
import openBar from "../images/open.svg"
import closeBAr from "../images/close.svg"

type Bool = {
    active: boolean,
    func: () => void
}


const Header = ({active, func}:Bool) => {

  return (
      <header className="container mx-auto flex justify-between items-center py-3 absolute z-10 top-0 right-0 left-0 w-full px-2">
          <div className="logo">
              <img src={logo} alt="" />
          </div>

          <nav className="hidden bg-gray-500 px-3 py-2 rounded-sm md:block">
              <ul className="flex jusfify-between items-center space-x-8">
                  <li><NavLink to={"/"} >00 Home</NavLink></li>
                  <li><NavLink to={"/destination"} >01 Destination </NavLink></li>
                  <li><NavLink to={"/crew"} >02 Crew</NavLink></li>
                  <li><NavLink to={"/technology"} >03 Technology </NavLink></li>
              </ul>
          </nav>


          <div  className="md:hidden" onClick={func}>
              {active ? (
                  <img src={closeBAr} alt="" />
              ) : (
                      <img src={openBar} alt="" />
              )}
          </div>


            <nav className={`bg-gray-500 px-3 py-2 rounded-sm mobile ${active && "active"}`}>
              <ul className="flex jusfify-between items-center">
                  <li><NavLink to={"/"} >00 Home</NavLink></li>
                  <li><NavLink to={"/destination"} >01 Destination </NavLink></li>
                  <li><NavLink to={"/crew"} >02 Crew</NavLink></li>
                  <li><NavLink to={"/technology"} >03 Technology </NavLink></li>
              </ul>
          </nav>
    </header>
  )
}


export default Header
