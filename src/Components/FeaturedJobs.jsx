// import React from "react";
// import "./FeaturedJobs.css";

// const FeaturedJobs = () => {
//   // Function to handle button click
//   const handleApplyClick = (jobTitle) => {
//     alert(`You clicked on Apply for: ${jobTitle}`);
//     // You can add additional logic here, such as navigating to another page
//     // or calling an API to process the application.
//   };

//   return (
//     <section className="featured-jobs">
//       <h2>Featured Jobs</h2>
//       <div className="jobs-container">
//         <div className="job-card">
//           <h3>GM Planning - New Delhi</h3>
//           <p>Le Human Resources Solutions Pvt. Ltd.</p>
//           <p>Experience: 16-18 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("GM Planning - New Delhi")}
//           >
//             Apply
//           </button>
//         </div>
//         <div className="job-card">
//           <h3>Staff Optics Validation Engineer</h3>
//           <p>Marvell Technology</p>
//           <p>Experience: 1-3 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("Staff Optics Validation Engineer")}
//           >
//             Apply
//           </button>
//         </div>
//         <div className="job-card">
//           <h3>Software Engineer - Remote</h3>
//           <p>Tech Innovations Inc.</p>
//           <p>Experience: 3-5 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("Software Engineer - Remote")}
//           >
//             Apply
//           </button>
//         </div>
//         <div className="job-card">
//           <h3>Product Manager</h3>
//           <p>XYZ Technologies</p>
//           <p>Experience: 5-7 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("Product Manager")}
//           >
//             Apply
//           </button>
//         </div>
//         <div className="job-card">
//           <h3>Senior Data Scientist</h3>
//           <p>ABC Analytics</p>
//           <p>Experience: 4-6 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("Senior Data Scientist")}
//           >
//             Apply
//           </button>
//         </div>
//         <div className="job-card">
//           <h3>Marketing Specialist</h3>
//           <p>Digital Future Co.</p>
//           <p>Experience: 2-4 years</p>
//           <button
//             className="btn primary"
//             onClick={() => handleApplyClick("Marketing Specialist")}
//           >
//             Apply
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

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
