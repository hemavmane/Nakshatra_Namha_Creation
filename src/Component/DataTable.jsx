import React from "react";
// import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "id",
    text: "Category",
    
  },
  {
    dataField: "name",
    text: "Subcategory",
    
  },
  {
    dataField: "price",
    text: "Product Name"
  } ,,{
    dataField: "id",
    text: "MRP	",
    
  },
  {
    dataField: "name",
    text: "Product GST(%)",
    
  },
  {
    dataField: "price",
    text: "HSN Code"
  },
   {
    dataField: "id",
    text: "Product Volume",
    
  },
  {
    dataField: "name",
    text: "Product Volume Type",
    
  },
  {
    dataField: "price",
    text: "Product Warranty"
  } ,,{
    dataField: "id",
    text: "Product Warranty Type",
    
  },
  {
    dataField: "name",
    text: "Product Size",
    
  },
  {
    dataField: "price",
    text: "Product Modelno"
  }
  ,
   {
    dataField: "id",
    text: "Customer Offer Price",
    
  },
  {
    dataField: "name",
    text: "Customer Discount Percentage(%)",
    
  },
  {
    dataField: "price",
    text: "Retailer Offer Price"
  } ,,{
    dataField: "id",
    text: "Retailer Discount Percentage(%)",
    
  },
  {
    dataField: "name",
    text: "Distributor Offer Price",
    
  },
  {
    dataField: "price",
    text: "Distributor Discount Percentage(%)"
  }
  ,
  {
   dataField: "id",
   text: "Product Description",
   
 },
 {
   dataField: "name",
   text: "Product Features",
   
 },
 {
   dataField: "price",
   text: "Product Brand"
 } ,{
   dataField: "id",
   text: "Quantity Case",
   
 },
 {
   dataField: "name",
   text: "Free",
   
 },
 {
   dataField: "price",
   text: "Stock	"
 }
 ,
 {
   dataField: "name",
   text: "	Edit",
   
 },
 {
   dataField: "price",
   text: "Action	"
 }
];

export default function MyComponent() {
  return (
    <div className="row">
      <BootstrapTable col-md-8
      
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
