import { React, useState } from "react";
import { SideBar } from "./Sidebar";
import { NavBar } from "./Navbar";
import data from "./DummyData";
import Payment from "./Payment";

export default function Admin() {
  const [credential, setCredentail] = useState();
  // let data = [
  //   { email: "hemamane46544@gmail.com", password: "pass@123" },
  //   { email: "hemamane46547@gmail.com", password: "pass@123" },
  //   { email: "hemamane46548@gmail.com", password: "pass@123" },
  //   { email: "hemamane46549@gmail.com", password: "pass@123" },
  //   { email: "hemamane46541@gmail.com", password: "pass@123" },
  // ];
  return (
    <div className="row">
      <div className="col-md-2">
        <SideBar />
      </div>
      <div className="col-md-10">
        <NavBar />
        {/* {data.map((ele) => {
          console.log(ele)
        })} */}

        <div className="row justify-content-center ">
          <form className="col-md-4 form-control-sm shadow-lg p-3 mb-5 bg-white rounded set_margin">
            <div className="form-group ">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) =>
                  setCredentail({ ...credential, email: e.target.value })
                }
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={(e) =>
                  setCredentail({ ...credential, pass: e.target.value })
                }
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
