import React, { useRef, useState } from "react";
import DoroCard from "../DoroCard";
import "../../styles/AssessmentCategoryStyles.css";
import categories from "./CategoriesData";

const AssessmentCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categoryRefs = useRef([]);

const handleSearchChange = (e) => {
  // Check for Enter key
  if (e.key !== "Enter") return;

  const currentSearchTerm = e.target.value;
  setSearchTerm(currentSearchTerm);

  const targetCategory = categories.findIndex((category) =>
    category.bannerLabel.toLowerCase().includes(currentSearchTerm.toLowerCase())
  );

  if (targetCategory !== -1 && categoryRefs.current[targetCategory]) {
    categoryRefs.current[targetCategory].scrollIntoView({
      behavior: "smooth",
    });
  }
};

  return (
    <div style={{ position: "relative" }}>
      {/* Search Bar */}
      <input
        placeholder="SEARCH"
        className="search-category"
        label="Search for category"
        variant="standard"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm when typing
        onKeyPress={handleSearchChange} // Handle Enter key press
      />
      <div className="categories-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-container"
            ref={(el) => (categoryRefs.current[index] = el)} // Assign ref for each category
          >
            <img
              src={category.lineDecorImg}
              className={
                index % 2 === 0 ? "line-image-right" : "line-image-left"
              }
              alt=""
            />
            {/* SVG Banner */}
            <img
              src={category.bannerSrc}
              alt="Category Banner"
              className="banner"
            />

            {/* Stylized label */}
            <div className="label-container">{category.bannerLabel}</div>

            {/* Cards */}
            <div className="cards-container">
              {category.assessments.map((item, index) => (
                <DoroCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  questions={item.questions}
                  time={item.time}
                />
              ))}
            </div>

            {/* Slider Controls */}
            <div className="slider-controls"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentCategory;
