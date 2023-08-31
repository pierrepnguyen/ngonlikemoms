import React from "react";

export const Sidebar = ({links, close}) => {
  return(
    <div className="sidebar" onClick={close}>
      {links.map(link => (
        <a href='#!' key={link.name} className="sidebar-link"><i className={link.icon}/>{link.name}</a>
      ))}
    </div>
  )
}