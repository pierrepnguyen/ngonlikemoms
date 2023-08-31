import React from "react";

export const Sidebar = ({
  setSelectedPage,
  links, 
  close
}) => {
  // const handleClick = (val) => {
  //   setSelectedPage(`${val}`)
  // }
  return(
    <div className="sidebar" onClick={close}>
      {links.map(link => (
        <a href='' key={link.name} className="sidebar-link"><i className={link.icon}/>{link.name}</a>
      ))}
    </div>
  )
}