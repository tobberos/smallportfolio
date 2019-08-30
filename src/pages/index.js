import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import profile from "../../public/images/profilbild.jpg"
import Bar from "../components/bargraphj"
import Pie from "../components/piechart"
import Radar from "../components/radargraph"

export default () => 
<React.Fragment>
<Header></Header>
<Container>
     <img src={profile} width="200px" alt="Profilbild" /> 
     
     <h2>Front End Developer</h2>
     <p>Hello my name is Tobias Rosenlind and I am a Front End Developer.</p>
     <p>In the navigation menu you can see my projects and my contact info.</p>
     <h2>Useless Graphs About Me</h2> 
     <Bar/> 
     <Pie/>
     <Radar/>
     </Container>
</React.Fragment>
