// src/app/test/page.js
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Directory

export default function Test() {
  const router = useRouter();

  useEffect(() => {
    // Function to run the model
    const runModel = () => {
      // Retrieve uploaded image and survey answers from Local Storage
      const storedImage = localStorage.getItem("uploadedImage");
      const storedSurvey = localStorage.getItem("surveyAnswers");

      if (!storedImage || !storedSurvey) {
        alert("Image or survey data missing. Please complete all steps.");
        router.push("/");
        return;
      }

      const imageData = JSON.parse(storedImage);
      const surveyData = JSON.parse(storedSurvey);

      // Example prediction logic
      let prediction = "Healthy";
      const symptoms = [
        surveyData.fever,
        surveyData.cough,
        surveyData.soreThroat,
        surveyData.smellLoss,
        surveyData.fatigue,
        surveyData.difficultyBreathing,
        surveyData.chestPain,
      ];

      // Simple logic: if any symptom is true, classify as Unhealthy
      if (symptoms.some((symptom) => symptom)) {
        prediction = "Unhealthy";
      }

      // Generate a mock score
      const score = Math.floor(Math.random() * 100) + 1;

      // Generate feedback based on prediction
      const feedback =
        prediction === "Healthy"
          ? "You seem to be healthy!"
          : "Please consult a healthcare provider.";

      // Store the results in Local Storage
      const results = {
        prediction,
        score,
        feedback,
      };

      localStorage.setItem("predictionResults", JSON.stringify(results));

      // Redirect the user back to the main page
      alert("Model has been run successfully. You can view the results now.");
      router.push("/");
    };

    runModel();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Running the model, please wait...</p>
    </div>
  );
}
