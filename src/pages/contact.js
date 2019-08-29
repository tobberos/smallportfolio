import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import twitterlogo from "../../public/images/twitterlogo.png"
import linkedinlogo from "../../public/images/linkedin.png"

export default () => 
<React.Fragment>
<Header></Header>
<Container>
    
     <h2>Contact information:</h2>
     <p>Email: tobias.rosenlind1988@hotmail.com</p>
     <p>Phone: 070 729 82 32</p>
     <a href="https://www.twitter.com/" target="_blank"><img src={twitterlogo} width="50px" margin="20px" alt="Twitter logo" /></a>
     <a href="https://www.linkedin.com/in/tobias-rosenlind-0559a716b/" target="_blank"><img src={linkedinlogo} width="53px" alt="Twitter logo" /></a>
     </Container>
</React.Fragment>