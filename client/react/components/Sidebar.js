import React from "react";
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({
  setSelectedPage,
  links, 
  close
}) => {
  const location = useLocation()

  return(
    <div className="sidebar" onClick={close}>
      {links.map(link => (
        <Link to={link.path} key={link.name} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link" } ><i className={link.icon}/>{link.name}</Link>
      ))}
    </div>
  )
}