import { React, useEffect, useState } from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";
import Card from "react-bootstrap/Card";
import { GraphComponent } from "./Graph";

export default function DashboardComponent() {
  return (
    <>
      <div className="row Header_container">
        <div className="col-md-2 sidebar_container">
          <SideBar />
        </div>
        <div className="col-md-10 Navabr_container">
          <NavBar />

          <div className="product_container product_container1">
            {" "}
            <div>
              <div className="dashboard_body">
                <div className="card_container">
                  {" "}
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Buyers</Card.Title>

                      <Card.Text>₹2000</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Buyers</Card.Title>

                      <Card.Text>₹2000</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Buyers</Card.Title>

                      <Card.Text>₹2000</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Products</Card.Title>

                      <Card.Text>₹3000</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Services</Card.Title>

                      <Card.Text>₹12000</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                   className="cards shadow p-3 mb-5 bg-body rounded"
                  >
                    <Card.Body>
                      <Card.Title>Vendores</Card.Title>

                      <Card.Text>₹4000</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="graph">
                 <div> 
                  <h5 className="g_heading">COUNTRY WISE COVID DATA</h5>
                  <GraphComponent /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
