import React from "react"
import {Link} from "gatsby"
import headerStyles from './header.module.css'

const MenuLink = props =>(
<li style={{display:'inline',margin:'2em',float:"right"}}>
 <Link to={props.to}>{props.children}</Link>
</li>

)

export default ({children}) =>(

<div className={headerStyles.header}>
<ul style={{listStyle:'none',width:'100%', margin:'0',padding:'0'}}>
<MenuLink to="/contact/">CONTACT</MenuLink>
<MenuLink to="/projects/">PROJECT</MenuLink>
<MenuLink to="/">HOME</MenuLink>
</ul>
{children}
</div>
)