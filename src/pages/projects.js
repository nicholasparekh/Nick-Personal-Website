// Step 1: Import React
import { Link } from 'gatsby';
import * as React from 'react'
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import '../components/Global.css'

const Projects = () => {
    return ( 
        <main>
            <Navbar></Navbar>
            <div className='flexThis'>
                <h2>Projects</h2>
                <Link to='/'>Back to the home page</Link>
            </div>
            <Footer></Footer>
        </main>
     );
}

export const Head = () => <title>Projects</title>
 
export default Projects;