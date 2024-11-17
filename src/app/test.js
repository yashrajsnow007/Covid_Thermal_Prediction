"use client";

import { useState } from "react";

export default function Test() {
  const [actual_label, setactual_label] = useState("Deer");
  const [img_url, setimg_url] = useState(null);
  const [pred_label, setpred_label] = useState("");
  const [surveyAnswers, setSurveyAnswers] = useState({
    fever: false,
    cough: false,
    soreThroat: false,
    smellLoss: false,
  });

  // Handle image upload
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setimg_url(URL.createObjectURL(file));
    }
  }

  // Handle survey question changes
  function handleSurveyChange(event) {
    const { name, checked } = event.target;
    setSurveyAnswers((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  // Run the model logic
  function handlerun() {
    if (!img_url) {
      alert("Please upload an image first!");
      return;
    }

    // Example prediction logic
    let output = "Healthy"; // Default prediction
    if (surveyAnswers.fever || surveyAnswers.cough || surveyAnswers.smellLoss) {
      output = "Unhealthy";
    }

    setpred_label(output);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold py-2">Let's Try Out the Model</h1>
      <div className="items-center flex flex-col">
        {/* Image Upload */}
        <div className="py-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="py-2"
          />
        </div>
        {img_url && (
          <div>
            <img src={img_url} alt="Uploaded" className="w-60 h-60 object-cover py-2" />
            <h2 className="text-center py-1">Predicted Label: {pred_label}</h2>
          </div>
        )}

        {/* Survey Questions */}
        <div className="py-4">
          <h2 className="text-lg font-bold py-2">Survey Questions</h2>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                name="fever"
                checked={surveyAnswers.fever}
                onChange={handleSurveyChange}
              />{" "}
              Fever
            </label>
            <label>
              <input
                type="checkbox"
                name="cough"
                checked={surveyAnswers.cough}
                onChange={handleSurveyChange}
              />{" "}
              Cough
            </label>
            <label>
              <input
                type="checkbox"
                name="soreThroat"
                checked={surveyAnswers.soreThroat}
                onChange={handleSurveyChange}
              />{" "}
              Sore Throat
            </label>
            <label>
              <input
                type="checkbox"
                name="smellLoss"
                checked={surveyAnswers.smellLoss}
                onChange={handleSurveyChange}
              />{" "}
              Loss of Smell or Taste
            </label>
          </div>
        </div>

        {/* Run Model Button */}
        <div>
          <button
            className="font-bold bg-blue-400 p-3 rounded-lg m-2 hover:bg-blue-600"
            onClick={handlerun}
          >
            Run the Model
          </button>
        </div>

        {/* Prediction Result */}
        {pred_label && (
          <div
            className={`font-bold ${
              pred_label === "Healthy" ? "bg-green-400" : "bg-red-400"
            } p-3 rounded-lg m-2`}
          >
            <p>{pred_label === "Healthy" ? "Healthy" : "Unhealthy"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
