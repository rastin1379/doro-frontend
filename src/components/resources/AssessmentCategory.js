import React, { useRef, useState } from "react";
import DoroCard from "../DoroCard";
import "../../styles/AssessmentCategoryStyles.css";
import categories from "./CategoriesData";
import { Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const AssessmentCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categoryRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const numDotsToShow = 4;

  const handleSearchChange = (e) => {
    // Check for Enter key
    if (e.key !== "Enter") return;

    const currentSearchTerm = e.target.value;
    setSearchTerm(currentSearchTerm);

    const targetCategory = categories.findIndex((category) =>
      category.bannerLabel
        .toLowerCase()
        .includes(currentSearchTerm.toLowerCase())
    );

    if (targetCategory !== -1 && categoryRefs.current[targetCategory]) {
      categoryRefs.current[targetCategory].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleNextCategory = () => {
    setActiveCategory(
      (prevCategory) => (prevCategory + 1) % numDotsToShow // Use modulo to wrap around
    );
  };

  const handlePreviousCategory = () => {
    setActiveCategory(
      (prevCategory) => (prevCategory - 1 + numDotsToShow) % numDotsToShow // Use modulo to wrap around
    );
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
            className={`category-container ${
              index === activeCategory ? "active" : ""
            }`}
            ref={(el) => (categoryRefs.current[index] = el)} // Assign ref for each category
          >
            {/* SVG Banner */}
            <img
              src={category.bannerSrc}
              alt="Category Banner"
              className="banner"
            />

            {/* lineDecorImg below the banner */}
            <img
              src={category.lineDecorImg}
              className={
                index % 2 === 0 ? "line-image-right" : "line-image-left"
              }
              alt=""
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
            <div className="slider-controls">
              <Button
                className="slider-button prev"
                onClick={handlePreviousCategory}
                disabled={activeCategory === 0}
              >
                <span className="control-text">Last</span> <ArrowBack />
              </Button>
              <div className="slider-dots">
                {Array.from({ length: numDotsToShow }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`slider-dot ${
                      dotIndex === activeCategory ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
              <Button
                className="slider-button next"
                onClick={handleNextCategory}
                disabled={categories.length <= numDotsToShow}
              >
                <span className="control-text">Next</span> <ArrowForward />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentCategory;
