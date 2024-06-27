import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

const DisplayJobs = (props) => {
  const { jobsData } = props;

  return (
    <Link to={`/jobs/${jobsData.id}`}>
      <li className="jobs-card-cont">
        <div className="icon-title-cont">
          <img className="jobs-logo" src={jobsData.company_logo_url} />
          <div className="title-rating-cont">
            <h4>{jobsData.title}</h4>
            <FaStar id="rating-icon" />
            <span>{jobsData.rating}</span>
          </div>
        </div>
        <div className="location-lpa-cont">
          <div>
            <FaLocationDot className="icons" />
            <span className="location">{jobsData.location}</span>
            <BsSuitcaseLgFill className="icons" />
            <span className="location">{jobsData.employment_type}</span>
          </div>
          <h4>{jobsData.package_per_annum}</h4>
        </div>
        <hr />
        <div>
          <h4>Discription</h4>
          <p>{jobsData.job_description}</p>
        </div>
      </li>
    </Link>
  );
};

export default DisplayJobs;
