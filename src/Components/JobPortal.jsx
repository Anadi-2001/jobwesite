import React, { useState } from "react";
import "./JobPortal.css";

const JobPortal = () => {
  const [searchInput, setSearchInput] = useState(""); // To capture input value
  const [clickedButton, setClickedButton] = useState(""); // To track the last clicked button

  // Handlers
  const handleSearchClick = () => {
    setClickedButton("Search Button");
    console.log("Search clicked with input:", searchInput);
    alert(`Searching for: ${searchInput}`);
  };

  const handleRegisterClick = () => {
    setClickedButton("Register Button");
    console.log("Register button clicked");
    alert("Redirecting to the registration page...");
  };

  return (
    <div className="job-portal">
      {/* Header Section */}
      <div className="header-section">
        <h2>BRINGING YOU THE PERFECT JOB!</h2>
        <p>11,000+ JOBS to Apply</p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Jobs Now"
          className="search-input"
          value={searchInput} // Controlled input
          onChange={(e) => setSearchInput(e.target.value)} // Update input value
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
        <button className="register-button" onClick={handleRegisterClick}>
          Register For FREE
        </button>
      </div>

      {/* Quick Job Search Section */}
      <div className="quick-job-search">
        <h3>Quick Job Search</h3>
        <div className="tags">
          {[
            "Fresher",
            "Work From Home",
            "IT",
            "HR",
            "Back Office",
            "BPO Jobs",
            "ITES",
            "Finance",
            "Developer",
            "Manager",
          ].map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Last Clicked Button Display */}
      <div className="button-status">
        {clickedButton && <p>Last clicked: {clickedButton}</p>}
      </div>
    </div>
  );
};

export default JobPortal;
