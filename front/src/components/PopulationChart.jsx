import React from "react";

import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from "recharts";

export default function PopulationChart({data}) {
    
    const tooltipStyle = {
        backgroundColor: "#333",
        color: "#fff",
        border: "1px solid #444" , 
      };

    return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip contentStyle={tooltipStyle}/>
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d"  name={"Population"}/>
          </LineChart>
        </ResponsiveContainer>
      );
}