import {Link } from "react-router-dom";
import {Row} from "react-bootstrap"
import "./index.css"
const Footer = () => {
    return (
        <footer>
            <Row>
            <div className = "footerDiv col-6">
                <ul>
                    <li>
                    <Link to = "/">
                        Home
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        myProflie
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        Locations
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        About
                    </Link>
                    </li> 
                </ul>
            </div>
            <div className = "footerDiv col 6">
                <ul>
                    <li>
                    <Link to = "/">
                        Affliates
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        Contact
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        Donations
                    </Link>
                    </li> 
                    <li>
                    <Link to = "/">
                        Events
                    </Link>
                    </li> 
                </ul>
            </div>

            </Row>
            
        </footer>

    )

}

export default Footer