import React from 'react'
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";

export default function Logout() {
  return (
    <div className="row Header_container">
    <div className="col-md-2 sidebar_container">
      <SideBar />
    </div>
    <div className="col-md-10 Navabr_container">
      <NavBar />

      <div className="product_container">Wellcome to Home</div>
    </div>
  </div>
  )
}
