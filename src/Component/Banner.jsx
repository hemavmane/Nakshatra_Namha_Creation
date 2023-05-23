import { React, useState } from "react";
import "./Banner.css";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Banner() {
  const [banner, setBanner] = useState([
    {
      id: 1,
      "SI.No": 1,
      img:
        "https://media.istockphoto.com/id/1413205702/photo/abstract-blue-neon-stadium-background-illuminated-with-lamps-on-ground-science-product-and.jpg?b=1&s=170667a&w=0&k=20&c=LX1fWdx2ZkX5YMJlfSb3s3x3beT5ZJhC-Ghqxcf_nJ4=",
    },
    {
      id: 2,
      "SI.No": 2,
      img:
        "https://media.istockphoto.com/id/1357767557/photo/search-find-web-online-technology-internet-website-concept.jpg?b=1&s=170667a&w=0&k=20&c=27aNVKvJ--PiaK3upZQKWxhbLzVNWn-hSWKT6lN0iaM=",
    },
    {
      id: 3,
      "SI.No": 3,
      img:
        "https://media.istockphoto.com/id/1365276338/photo/blank-billboard-on-the-railroad-station.jpg?b=1&s=170667a&w=0&k=20&c=_IUtSEdx232KBPcO73o59jSzTsL_OKl5u5Vh1zDCVzE=",
    },
    {
      id: 4,
      "SI.No": 4,
      img:
        "https://media.istockphoto.com/id/1388733854/photo/graphic-design-and-advertising-concept-large-format-plotter-close-up.jpg?b=1&s=170667a&w=0&k=20&c=zi-6ubZbLzxsje9kPp_tx5Gpx67sGu7GjHEAttun3gA=",
    },
    {
      id: 5,
      "SI.No": 5,
      img:
        "https://media.istockphoto.com/id/1371041474/photo/sparkling-new-year-2023-with-fireworks.jpg?b=1&s=170667a&w=0&k=20&c=YUdq8UU9hNeHOqtWMFtZrPdKcb5iOq-HkxladXpEgm4=",
    },
    {
      id: 6,
      "SI.No": 6,
      img:
        "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=170667a&w=0&k=20&c=qHX9JbVQRq0We9xvd5qUN1nW5lMD8nAeT5Ts4gKYBg8=",
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handeleDelete = id => {
    const filteredData = banner.filter(i => {
      return i !== id;
    });
    setBanner(filteredData);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 sidebar_container">
          <SideBar />
        </div>
        <div className="col-md-10 Navabr_container">
          <NavBar />

          <div className="product_container banner_container">
            <Modal
              show={show}
              onHide={handleClose}
              centered
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you are reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
           
            <div className="row justify-content-end">
              <div className="col-md-2">
              <Button
                variant="primary"
                onClick={handleShow}
              >
                Add Banner
              </Button>
              </div>
            
            </div>
         
            <div className="row m-auto justify-content-center ">
         
              <div className="col-md-8">
                <Table
                  className="table_container"
                  bordered
                  size="sm"
                  centered
                  variant
                >
                  <thead>
                    <tr>
                      <th>SI.No</th>
                      <th>Images</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banner.map((element, i) => {
                      return (
                        <tr key={i}>
                          <td>{element["SI.No"]}</td>
                          <td>
                            <img
                              className="banner_img"
                              src={element.img}
                              alt=""
                            />
                          </td>
                          <td>
                            <Button
                              variant="danger"
                              key={i}
                              onClick={() => handeleDelete(i)}
                            >
                              Delete
                            </Button>{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
