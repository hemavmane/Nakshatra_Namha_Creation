import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="row bg-header">
        <div className="col-md-11">
          <img
            className="header_logo"
            src="https://img.freepik.com/free-vector/logo-with-abstract-infinity_1017-7162.jpg?size=626&ext=jpg&uid=R95516796&ga=GA1.1.607965735.1683481704&semt=ais"
            alt=""
          />
        </div>
        <div className="col-md-1">
          <i class="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </>
  );
}
