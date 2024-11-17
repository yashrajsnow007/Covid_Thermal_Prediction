// src/app/survey/page.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Directory

export default function Survey() {
  const router = useRouter();

  // Initialize state for all survey fields
  const [surveyAnswers, setSurveyAnswers] = useState({
    // Subject Information
    fullName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    consent: "",
    date: "",

    // Health and Environmental Factors
    symptoms: {
      fever: false,
      cough: false,
      shortnessOfBreath: false,
      fatigue: false,
      lossOfTasteOrSmell: false,
      noneOfTheAbove: false,
    },
    closeContact: "",
    receivedVaccine: "",
    preExistingConditions: {
      hasConditions: "",
      conditions: "",
    },
    physicalActivity: "",
    consumedBeverages: "",
  });

  // Utility function to set nested state based on dot notation in name
  const setNestedState = (prevState, name, value) => {
    const keys = name.split(".");
    const lastKey = keys.pop();
    const updatedState = { ...prevState };
    let current = updatedState;

    keys.forEach((key) => {
      current[key] = { ...current[key] };
      current = current[key];
    });

    current[lastKey] = value;
    return updatedState;
  };

  // Handle changes for all input fields (including radio buttons)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name.startsWith("symptoms.")) {
      const symptom = name.split(".")[1];
      setSurveyAnswers((prev) => ({
        ...prev,
        symptoms: {
          ...prev.symptoms,
          [symptom]: checked,
          // If 'noneOfTheAbove' is checked, uncheck all other symptoms
          ...(symptom === "noneOfTheAbove" && checked
            ? Object.keys(prev.symptoms).reduce((acc, key) => {
                if (key !== "noneOfTheAbove") acc[key] = false;
                return acc;
              }, {})
            : {}),
        },
      }));
    } else if (type === "radio") {
      if (name.startsWith("preExistingConditions.")) {
        const conditionField = name.split(".")[1];
        setSurveyAnswers((prev) => ({
          ...prev,
          preExistingConditions: {
            ...prev.preExistingConditions,
            [conditionField]: value,
            // If 'hasConditions' is 'No', reset 'conditions' field
            ...(conditionField === "hasConditions" && value === "No"
              ? { conditions: "" }
              : {}),
          },
        }));
      } else if (name === "consent") {
        setSurveyAnswers((prev) => ({
          ...prev,
          consent: value,
        }));
      } else {
        setSurveyAnswers((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      setSurveyAnswers((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Validation functions
  const isValidEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone regex (allows digits, spaces, dashes, parentheses)
    return /^\+?[0-9\s\-()]{7,}$/.test(phone);
  };

  // Submit survey and navigate to Test Page to run the model
  const handleSubmitSurvey = () => {
    // Destructure surveyAnswers for easy access
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
    } = surveyAnswers;

    // Debugging: Log surveyAnswers
    // console.log("Survey Answers:", surveyAnswers);

    // Check Subject Information
    if (
      !fullName.trim() ||
      !age ||
      !gender ||
      !phone.trim() ||
      !email.trim() ||
      !consent ||
      !date
    ) {
      alert("Please fill out all required Subject Information fields.");
      return;
    }

    // Validate email and phone formats
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Check Health and Environmental Factors
    // **UPDATED PART**: Exclude 'noneOfTheAbove' from selectedSymptoms
    const selectedSymptoms = Object.entries(symptoms)
      .filter(([key, val]) => key !== "noneOfTheAbove" && val)
      .map(([key, val]) => key);

    if (
      (selectedSymptoms.length === 0 && !symptoms.noneOfTheAbove) ||
      !closeContact ||
      !receivedVaccine ||
      !preExistingConditions.hasConditions ||
      (preExistingConditions.hasConditions === "Yes" &&
        !preExistingConditions.conditions.trim()) ||
      !physicalActivity ||
      !consumedBeverages
    ) {
      alert("Please fill out all required Health and Environmental Factors fields.");
      return;
    }

    // Additional validation can be added here as needed

    // Store survey answers in Local Storage
    localStorage.setItem("surveyAnswers", JSON.stringify(surveyAnswers));

    // Navigate to Test Page to run the model
    router.push("/test");
  };

  return (
    <div className="font-mono flex flex-col items-center w-4/5 mx-auto mt-12">
      <h1 className="text-4xl text-center font-bold mb-6">Survey Questions</h1>

      {/* Subject Information Section */}
      <section className="w-full md:w-1/2 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subject Information</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1">
            What is your full name? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={surveyAnswers.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">
            What is your age? <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={surveyAnswers.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            min="0"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1">
            What is your gender? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={surveyAnswers.gender === "Male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={surveyAnswers.gender === "Female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                checked={surveyAnswers.gender === "Prefer not to say"}
                onChange={handleChange}
                className="mr-2"
              />
              Prefer not to say
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={surveyAnswers.gender === "Other"}
                onChange={handleChange}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label className="block mb-1">
            Please provide your contact information (phone number and email address).{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={surveyAnswers.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={surveyAnswers.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Consent */}
        <div className="mb-4">
          <label className="block mb-1">
            Do you consent to participate in this study and have your thermal image captured?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="consent"
                value="Yes"
                checked={surveyAnswers.consent === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="consent"
                value="No"
                checked={surveyAnswers.consent === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">
            Please enter today's date (DD/MM/YYYY). <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={surveyAnswers.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      </section>

      {/* Health and Environmental Factors Section */}
      <section className="w-full md:w-1/2 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Health and Environmental Factors</h2>

        {/* Symptoms */}
        <div className="mb-4">
          <label className="block mb-1">
            Have you experienced any of the following symptoms in the past 14 days? (Select all that apply){" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.fever"
                checked={surveyAnswers.symptoms.fever}
                onChange={handleChange}
                className="mr-2"
              />
              Fever
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.cough"
                checked={surveyAnswers.symptoms.cough}
                onChange={handleChange}
                className="mr-2"
              />
              Cough
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.shortnessOfBreath"
                checked={surveyAnswers.symptoms.shortnessOfBreath}
                onChange={handleChange}
                className="mr-2"
              />
              Shortness of breath
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.fatigue"
                checked={surveyAnswers.symptoms.fatigue}
                onChange={handleChange}
                className="mr-2"
              />
              Fatigue
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.lossOfTasteOrSmell"
                checked={surveyAnswers.symptoms.lossOfTasteOrSmell}
                onChange={handleChange}
                className="mr-2"
              />
              Loss of taste or smell
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="symptoms.noneOfTheAbove"
                checked={surveyAnswers.symptoms.noneOfTheAbove}
                onChange={handleChange}
                className="mr-2"
              />
              None of the above
            </label>
          </div>
        </div>

        {/* Close Contact */}
        <div className="mb-4">
          <label className="block mb-1">
            Have you been in close contact with anyone who has tested positive for COVID-19 in the past 14 days?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="closeContact"
                value="Yes"
                checked={surveyAnswers.closeContact === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="closeContact"
                value="No"
                checked={surveyAnswers.closeContact === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Received Vaccine */}
        <div className="mb-4">
          <label className="block mb-1">
            Have you received a COVID-19 vaccine? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="receivedVaccine"
                value="Yes"
                checked={surveyAnswers.receivedVaccine === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="receivedVaccine"
                value="No"
                checked={surveyAnswers.receivedVaccine === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Pre-existing Medical Conditions */}
        <div className="mb-4">
          <label className="block mb-1">
            Do you have any pre-existing medical conditions that might affect your body temperature?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="preExistingConditions.hasConditions"
                value="Yes"
                checked={surveyAnswers.preExistingConditions.hasConditions === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="preExistingConditions.hasConditions"
                value="No"
                checked={surveyAnswers.preExistingConditions.hasConditions === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Specify Pre-existing Medical Conditions */}
        {surveyAnswers.preExistingConditions.hasConditions === "Yes" && (
          <div className="mb-4">
            <label htmlFor="preExistingConditions.conditions" className="block mb-1">
              Please specify your pre-existing medical conditions. (If none, write NA){" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="preExistingConditions.conditions"
              name="preExistingConditions.conditions"
              value={surveyAnswers.preExistingConditions.conditions}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required={surveyAnswers.preExistingConditions.hasConditions === "Yes"}
            />
          </div>
        )}

        {/* Physical Activity */}
        <div className="mb-4">
          <label className="block mb-1">
            Have you engaged in any physical activity in the last 30 minutes?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="physicalActivity"
                value="Yes"
                checked={surveyAnswers.physicalActivity === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="physicalActivity"
                value="No"
                checked={surveyAnswers.physicalActivity === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Consumed Beverages */}
        <div className="mb-4">
          <label className="block mb-1">
            Have you consumed any hot or cold beverages in the last 30 minutes?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="consumedBeverages"
                value="Yes"
                checked={surveyAnswers.consumedBeverages === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="consumedBeverages"
                value="No"
                checked={surveyAnswers.consumedBeverages === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <button
        className="font-bold bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mb-12"
        onClick={handleSubmitSurvey}
      >
        Submit Survey
      </button>
    </div>
  );
}
