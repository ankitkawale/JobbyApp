import { Link } from "react-router-dom";
import "./index.css";

const Header =()=>{
    return (
        <div className="header-section">
            <ul className="nav-list">

                <Link to="/" className="my-link-el">
                <li className="nav-element">
                    <img className="header-img-logo" src="https://assets.ccbp.in/frontend/react-js/logo-img.png"/>
                </li>
                </Link>

                <div className="home-jobs-cont">
                <Link to="/" className="my-link-el">
                <li className="nav-element">Home</li>
                </Link>

                <Link to="/jobs" className="my-link-el">
                <li className="nav-element">Jobs</li>
                </Link>
                </div>

                <button className="btn btn-info btn-sm mt-2" type="button">Logout</button>

            </ul>
        </div>
    )
}



export default Header;