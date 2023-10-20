import React, {useState} from "react";
import { Link, useLocation } from 'react-router-dom';

import { Sidebar } from './Sidebar'

export const Nav = ({
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation()
  
  const links = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-5-line'
    },
    {
      name: 'Recipes',
      path:'/food/recipes',
      icon: 'ri-list-check'
    },
    {
      name: 'Add Recipe',
      path:"/add-recipe",
      icon: 'ri-add-box-line'
    }
  ]

  const closeSidebar = () => {
    setShowSidebar(true)
  }


  return(
    <>
      <div className="navbar">
        <a href='#!' className="logo"><span>ngon</span>likemoms</a>
        <div className="nav-links">
          { links.map(link => (
            <Link to={link.path} key={link.name} className={location.pathname == link.path ? "active" : "" } >{link.name}</Link>
          ))}
        </div>
        <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      { showSidebar && <Sidebar close={closeSidebar} links ={links} /> }
    </>
  );
};