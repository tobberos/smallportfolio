import React from "react"
import { Radar } from 'react-chartjs-2'

const data ={
    labels: ["Strength", "Intelligence", "Dexterity", "Vitality", "Luck"],
    datasets: [
      {
        label: "Tobias Stats",
        fill:true,
        backgroundColor: "rgba(130,255,166,0.2)",
        borderColor: "rgba(11,154,33,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [10,10,4,7,1]
      }
    ]
};

export default () =>(
<div style={{display:"inline-block",margin:"0 auto"}}>
 <Radar
 data={data}
 width={500}
 height={500}
 options={{ 
     maintainAspectRatio: false,
    responsive:false,
    title: {
        display: true,
        text: 'My stats'
      }
    }}  />
</div>
)