import React from 'react'; 
import '../style/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faInstagramSquare , faGoogle} from "@fortawesome/free-brands-svg-icons";

function Footer()
        {
        return <div className='icons-list'>
            <a
            className="faLinkedin app-link social-media-list"
            href="https://www.linkedin.com/in/aishwarya-patil2792"
            target="_blank"
            rel="noopener noreferrer"
            >

            <FontAwesomeIcon icon={faLinkedin} size="2x" className='iconStyle'/>
            </a>

            <a
            className="faGithub app-link social-media-list"
            href="https://github.com/aish2792/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faGithub} size="2x" className='iconStyle'/>
            </a>

            <a
            className="fatwitter app-link social-media-list"
            // href="https://twitter.com/raghavi_adoni"
            href = "mailto:aishp2792@gmail.com?subject = Feedback&body = Message"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faGoogle} size="2x" className='iconStyle'/>
            </a>
            <p className="footerNote">© 2020-present designed by Aishwarya Patil</p>
        </div>  
        }
export default Footer;