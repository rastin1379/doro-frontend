import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import DoroCard from "../DoroCard";
import "../../styles/AssessmentCategoryStyles.css";
import { Button, CircularProgress } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

// BANNERS
import AnxietyBanner from "../../assets/bannerImgs/Anxiety.svg";
import HyperactivityBanner from "../../assets/bannerImgs/Hyperactivity.svg";
import BipolarBanner from "../../assets/bannerImgs/Bipolar.svg";
import SleepingBanner from "../../assets/bannerImgs/Sleeping.svg";
import EatingBanner from "../../assets/bannerImgs/Eating.svg";
import GamblingBanner from "../../assets/bannerImgs/Gambling.svg";
import DepressionBanner from "../../assets/bannerImgs/Depression.svg";
import ObsessionBanner from "../../assets/bannerImgs/Obsession.svg";
import TraumaBanner from "../../assets/bannerImgs/Trauma.svg";
import PsychoticBanner from "../../assets/bannerImgs/psychotic.svg";
import AutismBanner from "../../assets/bannerImgs/Autism.svg";
import PersonalityBanner from "../../assets/bannerImgs/Personality.svg";

// LINE DECOR
import line1 from "../../assets/linesResources/line1.svg";
import line2 from "../../assets/linesResources/line2.svg";
import line3 from "../../assets/linesResources/line3.svg";
import line4 from "../../assets/linesResources/line4.svg";
import line5 from "../../assets/linesResources/line5.svg";
import line6 from "../../assets/linesResources/line6.svg";
import line7 from "../../assets/linesResources/line7.svg";
import line8 from "../../assets/linesResources/line8.svg";
import line9 from "../../assets/linesResources/line9.svg";
import line10 from "../../assets/linesResources/line10.svg";
import line11 from "../../assets/linesResources/line11.svg";
import line12 from "../../assets/linesResources/line12.svg";

const AssessmentCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentSetIndices, setCurrentSetIndices] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const categoryRefs = useRef([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await axios.get("/ptests/");
        const data = response.data;
        const formattedCategories = formatCategories(data);
        setCategories(formattedCategories);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const formatCategories = (data) => {
    const categoryMap = {
      Anxiety: {
        tag: "Anxiety",
        bannerSrc: AnxietyBanner,
        lineDecorImg: line1,
      },
      "Attention-Deficit and Hyperactivity": {
        tag: "Attention-Deficit and Hyperactivity",
        bannerSrc: HyperactivityBanner,
        lineDecorImg: line2,
      },
      "Bipolar and Mood": {
        tag: "Bipolar and Mood",
        bannerSrc: BipolarBanner,
        lineDecorImg: line3,
      },
      Sleeping: {
        tag: "Sleeping",
        bannerSrc: SleepingBanner,
        lineDecorImg: line4,
      },
      Eating: {
        tag: "Eating",
        bannerSrc: EatingBanner,
        lineDecorImg: line5,
      },
      Depression: {
        tag: "Depression",
        bannerSrc: DepressionBanner,
        lineDecorImg: line6,
      },
      Personality: {
        tag: "Personality",
        bannerSrc: PersonalityBanner,
        lineDecorImg: line7,
      },
      Autism: {
        tag: "Autism",
        bannerSrc: AutismBanner,
        lineDecorImg: line8,
      },
      Psychotic: {
        tag: "Psychosis and Dissociation",
        bannerSrc: PsychoticBanner,
        lineDecorImg: line9,
      },
      "Trauma and Stress": {
        tag: "Trauma and Stress",
        bannerSrc: TraumaBanner,
        lineDecorImg: line10,
      },
      "Preoccupation and Obsession": {
        tag: "Preoccupation and Obsession",
        bannerSrc: ObsessionBanner,
        lineDecorImg: line11,
      },
      "Substance Abuse and Gambling": {
        tag: "Substance Abuse and Gambling",
        bannerSrc: GamblingBanner,
        lineDecorImg: line12,
      },
    };

    return Object.entries(categoryMap).map(([label, props]) => ({
      bannerLabel: label,
      bannerSrc: props.bannerSrc,
      lineDecorImg: props.lineDecorImg,
      assessments: data.filter((assessment) =>
        assessment.tags.includes(props.tag)
      ),
    }));
  };

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

  const handleNextSet = (categoryIndex) => {
    setCurrentSetIndices((prevIndices) => ({
      ...prevIndices,
      [categoryIndex]: (prevIndices[categoryIndex] || 0) + 4,
    }));
  };

  const handlePrevSet = (categoryIndex) => {
    setCurrentSetIndices((prevIndices) => ({
      ...prevIndices,
      [categoryIndex]: Math.max(0, (prevIndices[categoryIndex] || 0) - 4),
    }));
  };
return (
  <>
  {
    loading ? 
    <div style={{ display: "flex", justifyContent: "center",marginBottom:"340px"}}>
      <CircularProgress sx={{color:"#768094"}} />
    </div>
     : (
      <div style={{ position: "relative" }}>
    {/* Search Bar */}
    <input
      placeholder="SEARCH"
      className="search-category"
      label="Search for category"
      variant="standard"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleSearchChange}
    />
    <div className="categories-container">
      {categories.map((category, categoryIndex) => {
        const numSlides = Math.ceil(category.assessments.length / 4);
        const currentSlide = Math.floor(
          (currentSetIndices[categoryIndex] || 0) / 4
        );

        return (
          <div
            key={categoryIndex}
            className={`category-container ${
              categoryIndex === activeCategory ? "active" : ""
            }`}
            ref={(el) => (categoryRefs.current[categoryIndex] = el)}
          >
            <img
              src={category.bannerSrc}
              alt="Category Banner"
              className="banner"
            />
            <img
              src={category.lineDecorImg}
              className={
                categoryIndex % 2 === 0 ? "line-image-right" : "line-image-left"
              }
              alt=""
            />
            <div className="label-container">{category.bannerLabel}</div>

            <div className="cards-container">
              {category.assessments
                .slice(
                  currentSetIndices[categoryIndex] || 0,
                  (currentSetIndices[categoryIndex] || 0) + 4
                )
                .map((item, index) => (
                  <DoroCard
                    key={index}
                    title={item.abbreviation}
                    description={item.summary}
                    questions={item.statements}
                    time={item.duration}
                    id={item.id}
                  />
                ))}
            </div>

            {/* Individual Category Slider Controls and Navigation Bubbles */}
            <div className="slider-controls">
              <Button
                className="slider-button prev"
                onClick={() => handlePrevSet(categoryIndex)}
                disabled={(currentSetIndices[categoryIndex] || 0) <= 0}
              >
                <span className="control-text">Last</span> <ArrowBack />
              </Button>

              {/* Navigation Bubbles */}
              <div className="slider-dots">
                {Array.from({ length: numSlides }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`slider-dot ${
                      dotIndex === currentSlide ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>

              <Button
                className="slider-button next"
                onClick={() => handleNextSet(categoryIndex)}
                disabled={
                  (currentSetIndices[categoryIndex] || 0) >=
                  category.assessments.length - 4
                }
              >
                <span className="control-text">Next</span> <ArrowForward />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
    )
  }
  </>
  
);

};

export default AssessmentCategory;
