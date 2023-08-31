import React, {useState} from "react";
import {Sidebar} from './Sidebar'

export const Nav = ({
  setSelectedPage
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleHome = () => {
    setSelectedPage("Main View")
  }
  const handleAll = () => {
    setSelectedPage("Recipe List")
  }
  const handleAdd = () => {
    setSelectedPage("Add Recipe")
  }
  
  const links = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-5-line',
      page: 'Main View'
    },
    {
      name: 'Recipes',
      path:'/recipes',
      icon: 'ri-list-check',
      page: 'Recipe List'
    },
    {
      name: 'Add Recipe',
      path:"/add-recipe",
      icon: 'ri-add-box-line',
      page: 'Add Recipe'
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
          <a onClick={handleHome}>Home</a>
          <a onClick={handleAll}>Recipes</a>
          <a onClick={handleAdd}>Add Recipe</a>
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