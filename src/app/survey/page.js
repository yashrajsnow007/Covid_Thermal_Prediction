// src/app/survey/page.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Directory

export default function Survey() {
  const router = useRouter();
  const [surveyAnswers, setSurveyAnswers] = useState({
    fever: false,
    cough: false,
    soreThroat: false,
    smellLoss: false,
    fatigue: false,
    difficultyBreathing: false,
    chestPain: false,
  });

  // Handle survey question changes
  const handleSurveyChange = (event) => {
    const { name, checked } = event.target;
    setSurveyAnswers((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Submit survey and navigate to Test Page to run the model
  const handleSubmitSurvey = () => {
    // Optional: Validate at least one checkbox is selected
    const isAnyChecked = Object.values(surveyAnswers).some((value) => value);
    if (!isAnyChecked) {
      alert("Please select at least one symptom.");
      return;
    }

    // Store survey answers in Local Storage
    localStorage.setItem("surveyAnswers", JSON.stringify(surveyAnswers));

    // Navigate to Test Page to run the model
    router.push("/test");
  };

  return (
    <div className="font-mono flex flex-col items-center w-4/5 mx-auto mt-12">
      <h1 className="text-4xl text-center font-bold mb-6">Survey Questions</h1>
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="fever"
            checked={surveyAnswers.fever}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Fever
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="cough"
            checked={surveyAnswers.cough}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Cough
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="soreThroat"
            checked={surveyAnswers.soreThroat}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Sore Throat
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="smellLoss"
            checked={surveyAnswers.smellLoss}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Loss of Smell or Taste
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="fatigue"
            checked={surveyAnswers.fatigue}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Fatigue
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="difficultyBreathing"
            checked={surveyAnswers.difficultyBreathing}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Difficulty Breathing
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="chestPain"
            checked={surveyAnswers.chestPain}
            onChange={handleSurveyChange}
            className="mr-2"
          />
          Chest Pain
        </label>
      </div>
      <button
        className="font-bold bg-blue-400 p-3 rounded-lg m-2 hover:bg-blue-600"
        onClick={handleSubmitSurvey}
      >
        Submit Survey
      </button>
    </div>
  );
}
