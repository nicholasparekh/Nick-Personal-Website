// Import packages/icons
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

// Import styles
import './Footer.css'

const Footer = () => {
    return (  
        <div>
            <footer>
                <div className="row">
                    <a href='https://github.com/nicholasparekh' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={ faGithubSquare } className="icons"></FontAwesomeIcon>
                    </a>
                    <a href='https://twitter.com/NickParekh1' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={ faTwitterSquare } className='icons'/>
                    </a>
                    <a href='https://www.linkedin.com/in/nick-parekh-867a2916a' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={ faLinkedin } className='icons'/>
                    </a>
                </div>
                <p className='copyright'>&copy; {new Date().getUTCFullYear()} Nick Parekh</p>
            </footer>
        </div>
    );
}
 
export default Footer;