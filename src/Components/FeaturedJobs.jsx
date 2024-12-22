

// export default FeaturedJobs;
import React, { useState } from "react";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  // State to track job application status
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Function to handle button click
  const handleApplyClick = (jobTitle) => {
    // Check if the job is already applied
    if (appliedJobs.includes(jobTitle)) {
      alert(`You already applied for: ${jobTitle}`);
    } else {
      // Add job to applied jobs list
      setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, jobTitle]);
      alert(`You clicked on Apply for: ${jobTitle}`);
    }
  };

  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="jobs-container">
        {[
          { title: "GM Planning - New Delhi", company: "Le Human Resources Solutions Pvt. Ltd.", experience: "16-18 years" },
          { title: "Staff Optics Validation Engineer", company: "Marvell Technology", experience: "1-3 years" },
          { title: "Software Engineer - Remote", company: "Tech Innovations Inc.", experience: "3-5 years" },
          { title: "Product Manager", company: "XYZ Technologies", experience: "5-7 years" },
          { title: "Senior Data Scientist", company: "ABC Analytics", experience: "4-6 years" },
          { title: "Marketing Specialist", company: "Digital Future Co.", experience: "2-4 years" },
          { title: "Cloud Architect", company: "Cloud Solutions Inc.", experience: "5-8 years" },
          { title: "QA Engineer", company: "Quality Systems Ltd.", experience: "2-4 years" },
          { title: "Data Analyst", company: "Data Insights Corp.", experience: "1-3 years" },
          { title: "UI/UX Designer", company: "Creative Solutions Studio", experience: "3-5 years" }
        ].map((job, index) => (
          <div className="job-card" key={index}>
            <h3>
              {job.title} <span className="icon">➡️</span>
            </h3>
            <p>{job.company}</p>
            <p>Experience: {job.experience}</p>
            <button
              className="btn primary"
              onClick={() => handleApplyClick(job.title)}
              disabled={appliedJobs.includes(job.title)}
            >
              {appliedJobs.includes(job.title) ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
