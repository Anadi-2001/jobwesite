import React from "react";
import "./JobsSection.css";

const JobsSection = () => {
  const indiaJobs = [
    "#Mumbai", "#Delhi", "#Ajmer", "#Pune", "#Hyderabad", "#Agra",
    "#Chennai", "#Kolkata", "#Indore", "#Gurugram", "#Jaipur", "#Ahmedabad",
  ];

  const internationalJobs = [
    "#Africa", "#USA", "#UK", "#Australia", "#Canada", "#Singapore",
    "#Dubai", "#Saudi Arabia", "#New Zealand",
  ];

  const statistics = [
    { label: "Jobs Posted", value: "32,523" },
    { label: "Jobs Filled", value: "15,153" },
    { label: "Employers", value: "20,613" },
    { label: "Active Users", value: "1,299,415" },
  ];

  return (
    <div className="jobs-section">
      <div className="jobs-container">
        <div className="jobs-categories">
          <h3>JOBS IN INDIA</h3>
          <div className="jobs-list">
            {indiaJobs.map((job, index) => (
              <span key={index} className="job-hashtag">{job}</span>
            ))}
          </div>
        </div>

        <div className="jobs-categories">
          <h3>INTERNATIONAL JOBS</h3>
          <div className="jobs-list">
            {internationalJobs.map((job, index) => (
              <span key={index} className="job-hashtag">{job}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-container">
        {statistics.map((stat, index) => (
          <div key={index} className="stat">
            <h4>{stat.value}</h4>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
