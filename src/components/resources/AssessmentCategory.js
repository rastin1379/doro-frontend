import React from "react";
import DoroCard from "../DoroCard";
import "../../styles/AssessmentCategoryStyles.css";
import categories from "./CategoriesData";

const AssessmentCategory = () => {

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-container">
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
  );
};

export default AssessmentCategory;
