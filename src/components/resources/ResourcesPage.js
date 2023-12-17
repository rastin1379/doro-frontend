import React, { useEffect } from "react";
import TopSection from "./TopSection";
import AssessmentCategory from "./AssessmentCategory";
import Footer from "../Footer";

function ResourcesPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="mainpage">
      <TopSection />
      <AssessmentCategory />
      <Footer />
    </div>
  );
}

export default ResourcesPage;
