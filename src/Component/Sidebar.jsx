import React from 'react'

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export function SideBar() {
  return (
    <>
      <section>
        <div style={{ display: "flex", height: "100%" }}>
          <Sidebar>
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
                <a  className="links_for_products" href="/Vendors use management">Vendors use management</a>{" "}
              </MenuItem>
              <MenuItem>
                {" "}
                <a  className="links_for_products" href="/Category">Category</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Servies">Services</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Voucher and Discount">Voucher and Discount</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Review Management">Review Management</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Exclusive Store">Exclusive Store</a>
              </MenuItem>
              <MenuItem>
                <a  className="links_for_products" href="/Settings">Settings</a>
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
