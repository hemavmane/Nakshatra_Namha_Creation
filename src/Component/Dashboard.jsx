import { React, useEffect, useState } from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";
import Card from "react-bootstrap/Card";
import { GraphComponent } from "./Graph";

export default function DashboardComponent() {
  return (
    <>
      <div className="row ">
        <div className="col-md-2 ">
          <SideBar />
        </div>
        <div className="col-md-10 ">
          <NavBar />

          <div className="row m-auto justify-content-center">
            <div className="row row-md-2 ">
              <div className="row set_margin">
                <Card className="col-md-2 set_margin shadow p-4 mb-6 rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Buyers</Card.Title>

                    <Card.Text>₹2000</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-md-2 set_margin shadow p-4 mb-6  rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Buyers</Card.Title>

                    <Card.Text>₹2000</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-md-2 set_margin shadow p-4 mb-6  rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Buyers</Card.Title>

                    <Card.Text>₹2000</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-md-2 set_margin shadow p-4 mb-6  rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Products</Card.Title>

                    <Card.Text>₹3000</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-md-2 set_margin shadow p-4 mb-6  rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Services</Card.Title>

                    <Card.Text>₹12000</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-md-2 set_margin shadow p-4 mb-6  rounded border-bottom text-align-center">
                  <Card.Body>
                    <Card.Title>Vendores</Card.Title>

                    <Card.Text>₹4000</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div className="row" style={{ margin: "100px auto auto auto" }}>
              <div>
                <GraphComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
