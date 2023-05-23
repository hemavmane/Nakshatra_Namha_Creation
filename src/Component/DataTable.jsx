import React, { useState } from "react";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
 
export function DataTable(){
 const [activePage,setActivePage] = useState(15)


 const handlePageChange =(pageNumber)=> {
    // console.log(`active page is ${pageNumber}`);
    setActivePage({activePage: pageNumber});
  }
 

    return (
      <div>
        <Pagination
          activePage={activePage.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    );
  }

