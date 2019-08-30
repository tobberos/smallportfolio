import React from "react"
import { Bar } from 'react-chartjs-2'

const data ={
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Coffee(each workday)",
        backgroundColor:"#3e95cd",
        data: [2,3,2,1,4]
      }
    ]
};

export default () =>(
<div style={{display:"inline-block",margin:"0 auto"}}>
 <Bar
 data={data}
 width={500}
 height={500}
 options={{ 
     maintainAspectRatio: false,
    responsive:false,
    title: {
        display: true,
        text: 'Amount of coffee (Monday - Friday)'
      },
      legend:{display:false}
    }}  />
</div>
)