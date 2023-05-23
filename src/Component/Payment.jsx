import React from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";

export default function Payment() {
  return (
    <div className="row Header_container">
      <div className="col-md-2 sidebar_container">
        <SideBar />
      </div>
      <div className="col-md-10 Navabr_container">
        <NavBar />
        <div className="product_container product_container1 Payment_container2 ">
          <div className="product_container2 Payment_container3 shadow p-3 mb-5 bg-body rounded">
            <nav className="Payment Payment_side_bar">
              <ul>
                <li>Minvoice</li>
                <li>Minvoice</li>
                <li>Minvoice</li>
                <li>Minvoice</li>
                <li>Minvoice</li>
                <li>Minvoice</li>
                <li>Minvoice</li>
              </ul>
              <ul>
                <li>Setting System</li>
                <li>Logout account</li>
              </ul>
            </nav>
            <div className="Payment Payment_middel_section">
              <div className="bills">
                <div className="form_header">
                  <h5>All Expenses</h5>
                  <input type="month" />
                </div>
                <div>
                  <h1>card</h1>
                </div>
              </div>

              <div className="form">
                <div className="form_header">
                  <h6>Quick Invoice</h6>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
                <div>
                  <h6>Latest Transaction</h6>
                  <span>img</span>
                  <span>name</span>
                  <span>email id</span>
                </div>
                <div className="form_inputs">
                  <div>
                    <label htmlFor="name"> Customer Name</label>
                    <br />
                    <input type="text" placeholder="Type Customer Name" />
                  </div>

                  <div>
                    {" "}
                    <label htmlFor="eamil">Customer Email</label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Type Customer Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="input">Item name </label>
                    <br />
                    <input type="text" placeholder="Type customer name" />
                  </div>

                  <div>
                    {" "}
                    <label htmlFor="output">Item Mount</label>
                    <br />
                    <select name="" id="">
                      <option value="">USD</option>
                    </select>
                  </div>
                  <div>
                    {" "}
                    <a href="#">Add more Details</a>
                    <button>Send Money</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Payment Payment_footer_section">
              <div className="my_card">
                <img src="addBanner" alt="" />
              </div>
              <div className="details"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
