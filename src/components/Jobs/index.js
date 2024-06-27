import { useEffect, useState } from "react";
import {BsSearch} from 'react-icons/bs'
import Header from "../Header";
import DisplayJobs from "../DisplayJobs";
import FiltersGroup from "../FilterSection";
import "./index.css";

const Jobs = () => {
  const [allValues, setvalue] = useState({
    jobsList: [],
    searchinput:"",
    employType:[],
    minPakage:""
  });

  useEffect(() => {

    const displayAllJobs = async () => {
      const url = `https://apis.ccbp.in/jobs?employment_type=${allValues.employType}&minimum_package=${allValues.minPakage}&search=${allValues.searchinput}`;
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok === true) {
        setvalue({ ...allValues, jobsList: data.jobs });
      }
      console.log(data.jobs);
    }

    displayAllJobs();

  }, [allValues.searchinput,allValues.employType]);

  const onChangeSearchInput = (event)=>{

    if(event.key==="Enter"){
      setvalue({...allValues,searchinput:event.target.value});
    }

  }

  const onChangeEmployType =(value,isChecked)=>{

    if(isChecked===true){
        setvalue({...allValues,employType:[...allValues.employType,value]});
    }
    else{
      setvalue({...allValues,employType:allValues.employType.filter(each=>each!==value)});
    }

      

  }

  return (
    <>
      <Header />
      <div className="all-jobs-sec pt-5">
        <div className="filter-sec">
          <FiltersGroup onChangeEmploymentType={onChangeEmployType}/>
        </div>
        <div className="jobs-list-cont d-flex flex-column align-items-center">
        <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          onKeyDown={onChangeSearchInput}
        />
        <button
          className="search-button"
          type="submit"
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
          <ul>
            {allValues.jobsList.map((each) => (
              <DisplayJobs jobsData={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
