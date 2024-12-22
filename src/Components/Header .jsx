// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">jobringer</div>
//       <nav>
//         <ul className="nav-links">
//           <li>Jobs</li>
//           <li>Active Employers</li>
//           <li>Job Blogs</li>
//           <li>Pricing</li>
//         </ul>
//       </nav>
//       <div className="login-buttons">
//         <button className="btn">Jobseeker Login</button>
//         <button className="btn primary">Employer Login</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">jobringer</div>
      <button className="menu-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav>
        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <li>Jobs</li>
          <li>Active Employers</li>
          <li>Job Blogs</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="login-buttons">
        <button className="btn">Jobseeker Login</button>
        <button className="btn primary">Employer Login</button>
      </div>
    </header>
  );
};

export default Header;
