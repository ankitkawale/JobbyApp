import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = ()=>{ 
    
    return(
    <>
        <Header/>
        <div className="home-cont">
            <div className="home-content-cont">
                <h1>Find The Job That Fit Your Life</h1>
                <p>
                    Milions of peoples searching for jobs,sallry information,
                    Company reviews.Find the job that fits your abilities and potential.
                </p>
                <Link to="/jobs">
                <button className="btn btn-info">Find Jobs</button>
                </Link>
            </div>
        </div>
    </>
)

    }


export default Home;