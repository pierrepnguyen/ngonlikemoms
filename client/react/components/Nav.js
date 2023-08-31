import React, {useState} from "react";
import {Sidebar} from './Sidebar'

export const Nav = ({
  setSelectedPage
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleHome = async () => {
    setSelectedPage("Main View")
  }
  const handleAll = async () => {
    setSelectedPage("Recipe List")
  }
  const handleAdd = async () => {
    setSelectedPage("Add Recipe")
  }
  
  // const links = [
  //   {
  //     name: 'Home',
  //     path: '/',
  //     icon: 'ri-home-5-line'
  //   },
  //   {
  //     name: 'Recipes',
  //     path:'/recipes',
  //     icon: 'ri-list-check'
  //   },
  //   {
  //     name: 'Add Recipe',
  //     path:"/add-recipe",
  //     icon: 'ri-add-box-line'
  //   }
  // ]

  const closeSidebar = () => {
    setShowSidebar(false)
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