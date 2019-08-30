import React from "react"
import { Pie } from 'react-chartjs-2'

const data ={
    labels: ["Horror", "Sci-fi", "Comedy", "Drama", "Thriller"],
    datasets: [
      {
        label: "Types of movies watched this month",
        backgroundColor: ["#141112", "#1F18AB","#3cba9f","#e8c3b9","#A12731"],
        data: [3,1,0,1,4]
      }
    ]
};

export default () =>(
    <div style={{display:"inline-block",margin:"20px auto"}}>
     <Pie
     data={data}
     width={500}
     height={500}
     options={{ 
         maintainAspectRatio: false,
        responsive:false,
        title: {
            display: true,
            text: "Types of movies watched this month",
          },
        }}  />
    </div>
    )