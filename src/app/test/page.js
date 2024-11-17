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

      // Extract relevant data
      const {
        fullName,
        age,
        gender,
        phone,
        email,
        consent,
        date,
        symptoms,
        closeContact,
        receivedVaccine,
        preExistingConditions,
        physicalActivity,
        consumedBeverages,
      } = surveyData;

      // Basic Validation (Already handled in survey/page.js, but double-checking)
      if (
        !fullName.trim() ||
        !age.trim() ||
        !gender ||
        !phone.trim() ||
        !email.trim() ||
        !consent || // Updated condition
        !date ||
        !closeContact ||
        !receivedVaccine ||
        !preExistingConditions.hasConditions ||
        (preExistingConditions.hasConditions === "Yes" && !preExistingConditions.conditions.trim()) ||
        !physicalActivity ||
        !consumedBeverages
      ) {
        alert("Incomplete survey data. Please ensure all required fields are filled.");
        router.push("/");
        return;
      }

      // Example prediction logic
      let prediction = "Healthy";
      let riskFactors = 0;

      // Analyze Symptoms
      if (symptoms.noneOfTheAbove) {
        prediction = "Healthy";
      } else {
        const activeSymptoms = [
          symptoms.fever,
          symptoms.cough,
          symptoms.shortnessOfBreath,
          symptoms.fatigue,
          symptoms.lossOfTasteOrSmell,
        ];
        if (activeSymptoms.some((symptom) => symptom)) {
          prediction = "Unhealthy";
          riskFactors += activeSymptoms.filter((symptom) => symptom).length;
        }
      }

      // Analyze Other Factors
      if (closeContact === "Yes") riskFactors += 2;
      if (receivedVaccine === "No") riskFactors += 1;
      if (preExistingConditions.hasConditions === "Yes") riskFactors += 2;
      if (physicalActivity === "Yes") riskFactors += 0; // Physical activity might reduce risk
      if (consumedBeverages === "Yes") riskFactors += 0; // Assuming neutral

      // Adjust prediction based on risk factors
      if (riskFactors >= 3) {
        prediction = "Unhealthy";
      }

      // Generate a mock score based on risk factors
      const score = Math.min(riskFactors * 15, 100); // Max score capped at 100

      // Generate feedback based on prediction and score
      let feedback = "";
      if (prediction === "Healthy") {
        feedback = "You seem to be healthy! Continue maintaining your health practices.";
      } else {
        feedback = "Based on your responses, you may be at risk. Please consult a healthcare provider for further evaluation.";
      }

      // Store the results in Local Storage
      const results = {
        prediction,
        score,
        feedback,
        date, // Optionally store the date of the prediction
        name: fullName,
        age,
        gender,
      };

      localStorage.setItem("predictionResults", JSON.stringify(results));

      // Optionally, clear survey and image data to prevent re-use
      // localStorage.removeItem("uploadedImage");
      // localStorage.removeItem("surveyAnswers");

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
