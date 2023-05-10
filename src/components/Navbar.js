import * as React from 'react'
import { Link } from "gatsby";
import { navList } from './Navbar.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">
                <h1>Nick Parekh</h1>
            </Link>
            <ul className={navList}>
                <Link to="/projects">
                    <li>Projects</li>
                </Link>
                <Link to="/writing">
                    <li>Writing</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;