import React from 'react'

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export function SideBar() {
  return (
    <>
      <section>
        <div style={{ display: "flex",  height: "100%" }}>
          <Sidebar >
            <Menu>
              <MenuItem>
              <a className="links_for_products" href="/DashboardComponent">Dashboard</a></MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/banner">Banner</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Payment">Payment and Reports</a>{" "}
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Vendores">Vendors use management</a>{" "}
              </MenuItem>
              <MenuItem>
                {" "}
                <a  className="links_for_products" href="/Category">Category</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Services">Services</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Voucher">Voucher and Discount</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Reviews">Review Management</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Exclusive">Exclusive Store</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Setting">Settings</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Logout">Logout</a>
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      </section>
    </>
  );
}
