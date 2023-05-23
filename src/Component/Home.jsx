import React from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";

export default function Voucher() {
  return (
    <div className="row " >
      <div className="col-md-1 sidebar_container">
        <SideBar />
      </div>
      <div className="col-md-11 Navabr_container">
        <NavBar />
        <div className="product_container">Wellcome to Home</div>
      </div>
    </div>
  );
}
