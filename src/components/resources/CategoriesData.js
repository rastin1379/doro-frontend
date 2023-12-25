// BANNERS
import AnxietyBanner from "../../assets/bannerImgs/Anxiety.svg";
import HyperactivityBanner from "../../assets/bannerImgs/Hyperactivity.svg";
import BipolarBanner from "../../assets/bannerImgs/Bipolar.svg"
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


const categories = [
  // Anxiety
  {
    lineDecorImg: line1,
    bannerSrc: AnxietyBanner,
    bannerLabel: "Anxiety",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Attention-Deficit and Hyperactivity
  {
    lineDecorImg: line2,
    bannerSrc: HyperactivityBanner,
    bannerLabel: "Attention-Deficit and Hyperactivity",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Bipolar and Mood
  {
    lineDecorImg: line3,
    bannerSrc: BipolarBanner,
    bannerLabel: "Bipolar and Mood",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Sleeping
  {
    lineDecorImg: line4,
    bannerSrc: SleepingBanner,
    bannerLabel: "Sleeping",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Eating
  {
    lineDecorImg: line5,
    bannerSrc: EatingBanner,
    bannerLabel: "Eating",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Depression
  {
    lineDecorImg: line6,
    bannerSrc: DepressionBanner,
    bannerLabel: "Depression",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Personality
  {
    lineDecorImg: line7,
    bannerSrc: PersonalityBanner,
    bannerLabel: "Personality",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Autism
  {
    lineDecorImg: line8,
    bannerSrc: AutismBanner,
    bannerLabel: "Autism",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Psychotic
  {
    lineDecorImg: line9,
    bannerSrc: PsychoticBanner,
    bannerLabel: "Psychotic",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Trauma and Stress
  {
    lineDecorImg: line10,
    bannerSrc: TraumaBanner,
    bannerLabel: "Trauma and Stress",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Preoccupation and Obsession
  {
    lineDecorImg: line11,
    bannerSrc: ObsessionBanner,
    bannerLabel: "Preoccupation and Obsession",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
  // Substance Abuse and Gambling
  {
    lineDecorImg: line12,
    bannerSrc: GamblingBanner,
    bannerLabel: "Substance Abuse and Gambling",
    assessments: [
      {
        title: "GAD-7",
        description:
          "Measures anxiety severity to help detect generalized anxiety disorder",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "PHQ-9",
        description:
          "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "BDI-II",
        description:
          "Evaluates the severity of depression in individuals, aiding in diagnosis",
        questions: "10 Questions",
        time: "10 min",
      },
      {
        title: "STAI",
        description:
          "Assesses anxiety levels distinguishing between state and trait anxiety",
        questions: "10 Questions",
        time: "10 min",
      },
    ],
  },
];

export default categories;