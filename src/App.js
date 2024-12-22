import React from "react";
import "./App.css";
import Header from "./Components/Header ";
// import Header from "./components/Header";
//import SearchSection from "./components/SearchSection";
//import SearchSection from "./Components/SearchSection";
//import FeaturedJobs from "./components/FeaturedJobs";
import FeaturedJobs from "./Components/FeaturedJobs";
//import Footer from "./components/Footer";
import Footer from "./Components/Footer";
import FeaturedEmployers from "./Components/FeaturedEmployers";
import JobsSection from "./Components/JobsSection";
import JobPortal from "./Components/JobPortal";

function App() {
  return (
    <div className="App">
      <Header />
      <JobPortal/>
      <FeaturedJobs />
      <FeaturedEmployers/>
      <JobsSection/>
      <Footer />
    </div>
  );
}

export default App;

