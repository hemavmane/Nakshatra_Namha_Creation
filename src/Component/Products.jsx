import React from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";

export default function Products() {
  return (
    <div className="row">
      <div className="col-md-2 ">
        <SideBar />
      </div>
      <div className="col-md-10 ">
        <NavBar />
        <div className="product_container">Wellcome to Products</div>
      </div>
    </div>
  );
}
