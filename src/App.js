import { Routes, Route } from "react-router-dom";
// import "./App.css";

import Home from './Component/Home'
import Banner from "./Component/Banner";
import Payment from "./Component/Payment";
import Services from "./Component/Services";
import Vendores from "./Component/Vendors";
import Categorey from "./Component/Categorey";
import Voucher from "./Component/Voucher";
import Review from "./Component/Review";
import Exclusive from "./Component/Exclusive";
import Setting from "./Component/Setting";
import Logout from "./Component/Logout";
import DashboardComponent from "./Component/Dashboard";
import Products from "./Component/Products";
import Admin from './Component/Admin'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/DashboardComponent' element={<DashboardComponent/>} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path='/Products' element={<Products/>}/>
        <Route path="/Vendores" element={<Vendores />} />
        <Route path="/Category" element={<Categorey />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Voucher" element={<Voucher />} />
        <Route path="/Reviews" element={<Review />} />
        <Route path="/Exclusive" element={<Exclusive />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
