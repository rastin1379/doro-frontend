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


const categories = [
  // Anxiety
  {
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
  // Personality - NEED BANNER
  {
    bannerSrc: PsychoticBanner,
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
  // Autism - NEED BANNER
  {
    bannerSrc: PsychoticBanner,
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