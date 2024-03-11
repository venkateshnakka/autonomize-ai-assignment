import "./index.css"
import { Link } from "react-router-dom"
const Header = () => {
    
    return(
        <div className="header">
           <div>
              <img src="https://res.cloudinary.com/dssfsnedz/image/upload/v1710082119/customer_5891439_c8iq1u.png" alt="shopping-icon" className="header-icon"/>
            </div>
            <div>
                <ul className="nav-items">
                    <Link to="/">
                       <li>Home</li>
                    </Link>
                    <Link to="/about">
                       <li>About</li>
                    </Link>
                    <Link to="/contact">
                       <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Header