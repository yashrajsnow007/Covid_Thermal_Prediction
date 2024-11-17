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
        (preExistingConditions.hasConditions === "Yes" &&
          !preExistingConditions.conditions.trim()) ||
        !physicalActivity ||
        !consumedBeverages
      ) {
        alert("Incomplete survey data. Please ensure all required fields are filled.");
        router.push("/");
        return;
      }

      // Prediction logic with weighted scoring
      let cumulativeRiskScore = 0;
      let maxRiskScore = 0; // For calculating confidence score
      let prediction = "Healthy";

      // Define weights for symptoms
      const symptomWeights = {
        fever: 2,
        cough: 1.5,
        shortnessOfBreath: 2.5,
        fatigue: 1,
        lossOfTasteOrSmell: 2,
      };

      // Calculate maximum possible risk score from symptoms
      for (const weight of Object.values(symptomWeights)) {
        maxRiskScore += weight;
      }

      // Calculate risk score from symptoms
      for (const symptom in symptomWeights) {
        if (symptoms[symptom]) {
          cumulativeRiskScore += symptomWeights[symptom];
        }
      }

      // Other factors and their weights
      const factorWeights = {
        closeContact: 3,
        receivedVaccine: { Yes: -1, No: 1 },
        preExistingConditions: 2,
        physicalActivity: { Yes: -0.5, No: 0.5 },
        consumedBeverages: 0.5,
      };

      // Close Contact
      maxRiskScore += factorWeights.closeContact;
      if (closeContact === "Yes") {
        cumulativeRiskScore += factorWeights.closeContact;
      }

      // Received Vaccine
      maxRiskScore += Math.abs(factorWeights.receivedVaccine.No);
      if (receivedVaccine === "Yes") {
        cumulativeRiskScore += factorWeights.receivedVaccine.Yes;
      } else if (receivedVaccine === "No") {
        cumulativeRiskScore += factorWeights.receivedVaccine.No;
      }

      // Pre-existing Conditions
      maxRiskScore += factorWeights.preExistingConditions;
      if (preExistingConditions.hasConditions === "Yes") {
        cumulativeRiskScore += factorWeights.preExistingConditions;
      }

      // Physical Activity
      maxRiskScore += Math.abs(factorWeights.physicalActivity.No);
      if (physicalActivity === "Yes") {
        cumulativeRiskScore += factorWeights.physicalActivity.Yes;
      } else if (physicalActivity === "No") {
        cumulativeRiskScore += factorWeights.physicalActivity.No;
      }

      // Consumed Beverages
      maxRiskScore += factorWeights.consumedBeverages;
      if (consumedBeverages === "Yes") {
        cumulativeRiskScore += factorWeights.consumedBeverages;
      }

      // Ensure cumulativeRiskScore is not negative
      cumulativeRiskScore = Math.max(0, cumulativeRiskScore);

      // Determine threshold (e.g., 50% of maxRiskScore)
      const threshold = maxRiskScore * 0.5;

      // Determine prediction
      if (cumulativeRiskScore >= threshold) {
        prediction = "Unhealthy";
      } else {
        prediction = "Healthy";
      }

      // Calculate confidence score
      const confidenceScore = ((cumulativeRiskScore / maxRiskScore) * 100).toFixed(2);

      // Generate feedback based on prediction and score
      let feedback = "";
      if (prediction === "Healthy") {
        feedback =
          "You seem to be healthy! Continue maintaining your health practices.";
      } else {
        feedback =
          "Based on your responses, you may be at risk. Please consult a healthcare provider for further evaluation.";
      }

      // Store the results in Local Storage
      const results = {
        prediction,
        confidenceScore,
        feedback,
        date, // Optionally store the date of the prediction
        name: fullName,
        age,
        gender,
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
