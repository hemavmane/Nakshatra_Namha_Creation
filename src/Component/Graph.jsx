import { React, useState, useEffect } from "react";
import axios from "axios";
// import "./Countries.css";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,

} from "recharts";

export const GraphComponent = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/countries`).then(response => {
      setCountries([...response.data]);
    });
  }, []);

  return (
    <>
      


<AreaChart 
        width={600}
        height={400}
        data={countries}
        margin={{ top: 10, right: 60, left: 0, bottom: 0 }}
      >
        <XAxis stroke="white" dataKey="country" />
        <YAxis stroke="white" width={90} allowDataOverflow="true" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="active"
          stroke="#8884d8"
          fillOpacity={0.8}
          fill="#e1e5f2"
        />

        <Area
          type="monotone"
          dataKey="recovered"
          stroke="#82ca9d"
          fillOpacity={0.3}
          fill="#bfdbf7"
        />
      </AreaChart>

   
    </>
  );
};
