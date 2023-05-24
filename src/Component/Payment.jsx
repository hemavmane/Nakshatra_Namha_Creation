import React from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";
import Button from "react-bootstrap/Button";
import  MyComponent from "./DataTable";

export default function Payment() {
  return (
    <div className="row s">
      <div className="col-md-2 ">
        <SideBar />
      </div>
      <div className="col-md-10">
        <NavBar />
        <div className="row set_margin ">
          <div className="col set_margin">
            <Button variant="primary">Add Products</Button>
            <Button col-md-5 variant="outline-info">
              Download Excel
            </Button>
            <Button col-md-2 variant="outline-info">
              Import Excel
            </Button>
            <Button col-md-1 variant="outline-success">
              Upload
            </Button>
            <Button col-md-4 variant="outline-info">
              Select Images/Videos
            </Button>
            <Button col-md-2 variant="outline-success">
              Upload Images/Videos
            </Button>
          </div>
          <div className="row ">
            <div className="col set_margin ">
              <Button col-md-4 variant="outline-success">Export to CV</Button>
              <input col-md-6 type="text" placeholder="Search" />
              <Button col-md-2 variant="outline-info">Clear</Button>
            </div>
          </div>
          <div>
            < MyComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}
