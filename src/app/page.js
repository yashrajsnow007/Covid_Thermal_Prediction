// src/app/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Directory
import Team from "./team"; // Ensure you have a Team component at src/app/team.js

export default function Home() {
  const router = useRouter();
  const [image, setImage] = useState(null); // Stores the uploaded image file
  const [imagePreview, setImagePreview] = useState(null); // Stores the image preview URL
  const [results, setResults] = useState(null); // Stores prediction results

  useEffect(() => {
    // On component mount, check if there's an image and results in Local Storage
    const storedImage = localStorage.getItem("uploadedImage");
    const storedResults = localStorage.getItem("predictionResults");

    if (storedImage) {
      const parsedImage = JSON.parse(storedImage);
      setImage(parsedImage);
      setImagePreview(parsedImage.dataUrl);
    }

    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Optional: Validate image size (e.g., max 2MB)
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSizeInBytes) {
        alert("Image size should be less than 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = {
          name: file.name,
          dataUrl: reader.result,
        };
        setImage(imageData);
        setImagePreview(reader.result);
        localStorage.setItem("uploadedImage", JSON.stringify(imageData));
      };
      reader.readAsDataURL(file);
    }
  };

  // Navigate to Survey Page
  const navigateToSurvey = () => {
    if (!image) {
      alert("Please upload an image before proceeding to the survey.");
      return;
    }
    router.push("/survey");
  };

  // Show Results by retrieving from Local Storage
  const showResults = () => {
    const storedResults = localStorage.getItem("predictionResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      // If results are not available, navigate to Test Page to run the model
      alert("No results available. Running the model now.");
      router.push("/test");
    }
  };

  return (
    <div className="font-mono">
      <div className="flex flex-col items-center w-4/5 mx-auto mt-12">
        <h1 className="text-4xl text-center font-bold">
          Covid Classification using Multimodal Data
        </h1>
        <div className="mt-6 mb-4">
          <h2 className="text-center text-2xl">Data Engineering</h2>
          <h2 className="text-center text-lg">Autumn 2024 IIT Jodhpur</h2>
        </div>
        <ul className="lg:flex lg:flex-wrap w-1/2 lg:gap-x-12 lg:p-2 lg:gap-y-6 lg:m-2">
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/introspective321"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500"
            >
              Anushk Gupta
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/yashrajsnow007"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500"
            >
              Yashraj Chaturvedi
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/om-nain"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500"
            >
              Omprakash Nain
            </a>
          </li>
        </ul>
        <ul className="flex mt-3 mb-6 font-bold flex-wrap">
          <li className="hover:text-gray-500">
            <a
              href="https://github.com/introspective321/DE_COVID_Classification"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github |
            </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Abstract">&nbsp;Abstract | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Dataset">&nbsp;Dataset | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Challenges">&nbsp;Challenges | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Technologies">&nbsp;Technologies | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Results">&nbsp;Results | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Contribution">&nbsp;Contribution | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#Takeaways">&nbsp;Takeaways | </a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#References">&nbsp;References</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-4/5 mx-auto mt-4">
        {/* Video Embed */}
        <div className="py-2 flex justify-center">
          <iframe
            width="914"
            height="514"
            src="https://www.youtube.com/embed/laYD201rK3k"
            title="E Jibon Madhu | Asha O Bhalobasha | Bengali Movie Song | Sharon Prabhakar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Abstract Section */}
        <h2 className="text-2xl font-bold py-2" id="Abstract">
          Abstract
        </h2>
        <p>
          The Covid-19 pandemic has underscored the necessity for rapid and reliable health assessments. We developed a system that classifies individuals as healthy or unhealthy by combining thermal image data with clinical information. Utilizing a dataset from PhysioNet, which includes thermal videos from four positions (front, back, left, right) and clinical data like vital signs, symptoms, and exposure history, we ensured data reliability through an ETL pipeline involving cleaning, normalization, and validation.
        </p>
        <p>
          For classification, we adopted a multi-modal approach integrating tabular and image data. We tested machine learning models including Random Forests, XGBoost, Multilayer Perceptrons (MLPs), and Convolutional Neural Networks (CNNs). Experimental results demonstrated that multi-modal models outperform single-modality models, with Random Forests and XGBoost achieving the highest accuracy in Covid-19 detection.
        </p>
        <p>
          The system architecture is designed for scalability, employing Docker for containerization and Elasticsearch for efficient indexing and querying. This project addresses the challenges of reliable data processing and provides an extensible framework applicable to real-world healthcare scenarios.
        </p>
        <p className="py-2">
          <b>Keywords</b>: Covid-19 Classification, Thermal Images, ETL Pipeline, Multi-Modal Approach, Machine Learning, MySQL, Docker, Elasticsearch, Pipelining, Databases
        </p>

        {/* Dataset Section */}
        <h2 className="text-2xl font-bold py-2" id="Dataset">
          Dataset
        </h2>
        <p>
          The dataset used in this project is the Covid-19 thermal image dataset sourced from:-
          <a href="https://physionet.org/content/covid-19-thermal/1.0/" className="text-blue-500 underline">
            PhysioNet
          </a>. This dataset contains upper body thermal images along with clinical and demographic data for 
          251 subjects. Out of these, 192 subjects tested Covid-19 negative, and 59 tested Covid-19 positive. 
          Thermal videos were recorded in four positions: front, back, left, and right, capturing comprehensive 
          imaging data for each participant.
        </p>
        <p>
          The dataset includes the following key components:
        </p>
        <ul className="py-2 flex flex-wrap gap-4 mx-auto">
          <li><b>Participant Information:</b> ID, age, gender, weight, height, and last menstruation (if applicable).</li>
          <li><b>Vital Signs:</b> Temperature, blood pressure, cardiac rate, O<sub>2</sub> saturation, and respiratory rate.</li>
          <li><b>Symptoms:</b> Fever, cough, throat pain, smell/taste loss, and other common Covid-19 symptoms.</li>
          <li><b>Exposure History:</b> Contacts at home, work, or hospital environments.</li>
          <li><b>Thermal Imaging:</b> Videos and extracted features (signal moments, textures) for each position (front, back, left, right).</li>
          <li><b>Covid-19 Diagnosis:</b> PCR test results, including estimated viral load.</li>
        </ul>
        <p>
          The thermal imaging data was preprocessed using MATLAB scripts to convert videos into image frames 
          suitable for analysis. Each frame was standardized to ensure consistency in resolution and quality. 
          Clinical data, such as symptoms and vitals, was stored in tabular format for integration with imaging features.
        </p>
        <figure>
          <img
            src="public/images/data.jpg"
            alt="Thermal Images of Participants"
            className="h-80 w-160 py-2 mx-auto block"
          ></img>
          <figcaption className="text-center text-gray-700">
            Figure 1: Thermal Images Captured from Four Positions (Front, Back, Left, and Right)
          </figcaption>
        </figure>
        <p>
          This dataset is a valuable resource for developing machine learning models to classify Covid-19 health status 
          by integrating thermal imaging and clinical data. It provides a comprehensive representation of diverse 
          medical, environmental, and imaging factors.
        </p>

        {/* Challenges Section */}
        <h2 className="text-2xl font-bold py-2" id="Challenges">
          Challenges
        </h2>
        <p>
          While implementing the ETL pipeline and managing multi-modal healthcare data, several challenges were encountered:
        </p>
        <ul className="py-2">
          <li>
            <b>Data Quality Issues:</b> The raw dataset contained missing values, inconsistent formats, and outliers in both thermal image metadata and clinical records, necessitating extensive cleaning and validation steps.
          </li>
          <li>
            <b>Integration of Multi-Modal Data:</b> Combining structured tabular data with unstructured thermal image data required careful normalization and feature extraction to maintain compatibility across the pipeline.
          </li>
          <li>
            <b>Handling Large Volumes of Data:</b> Thermal videos and metadata generated a substantial amount of data, which demanded optimized storage solutions and efficient query mechanisms.
          </li>
          <li>
            <b>Elasticsearch Configuration:</b> Setting up Elasticsearch for real-time querying and advanced indexing posed challenges in ensuring schema compatibility and query performance.
          </li>
          <li>
            <b>Docker Deployment:</b> Containerizing the entire pipeline and ensuring seamless operation across environments required overcoming dependency conflicts and deployment errors.
          </li>
        </ul>
        <p>
          These challenges were addressed through iterative development, extensive testing, and leveraging modern data engineering tools and practices. The experience highlighted the importance of robust validation mechanisms, efficient data storage, and modular pipeline design.
        </p>

        {/* Technologies Used Section */}
        <h2 className="text-2xl font-bold py-2" id="Technologies">
          Technologies Used
        </h2>
        <p>
          Our project focused heavily on data engineering principles to preprocess, store, and retrieve multi-modal datasets efficiently. The entire pipeline was designed for scalability, portability, and robust data handling, leveraging a modern tech stack.
        </p>
        <p>
          For data preprocessing, we implemented a comprehensive ETL (Extract, Transform, Load) pipeline:
        </p>
        <ul className="py-2">
          <li><b>Data Ingestion:</b> Raw thermal image videos and clinical data were collected from public datasets and converted into structured formats.</li>
          <li><b>Data Cleaning:</b> Addressed missing values, ensured consistency in clinical records, and standardized data formats.</li>
          <li><b>Data Normalization:</b> Tabular data was organized into normalized tables for efficient storage in a relational database.</li>
          <li><b>Data Validation:</b> Ensured data quality and integrity through outlier detection and reliability checks.</li>
        </ul>
        <p>
          For data storage, we used:
        </p>
        <ul className="py-2">
          <li><b>Dockerized MySQL:</b> A relational database was used to store structured tabular data, ensuring data consistency and easy integration.</li>
          <li><b>Elasticsearch:</b> Configured for advanced indexing and full-text search to facilitate quick retrieval of thermal image metadata and clinical information.</li>
        </ul>
        <p>
          Docker was a critical component, enabling containerization of the ETL pipeline, MySQL database, and Elasticsearch setup. This ensured portability across environments, streamlined deployment, and scalability for future expansions.
        </p>
        <p>
          The ETL pipeline was automated to process raw data into structured formats, ensuring high efficiency and reliability. It included features like automated data ingestion, error logging, and modular execution for each processing step.
        </p>
        <p>
          The frontend of the application provides a simple interface for users to upload thermal images and input survey responses. This data is processed by the backend, which integrates the database and search systems seamlessly.
        </p>

        {/* Image Upload Section */}
        <section className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-4">Let's Try This Model</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2"
          />
          {image && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-60 h-60 object-cover py-2"
              />
              <p className="mt-2">Selected Image: {image.name}</p>
            </div>
          )}
        </section>

        {/* Navigation Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={navigateToSurvey}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Survey Questions
          </button>
          <button
            onClick={showResults}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Show Results
          </button>
        </div>

        {/* Results Display */}
        {results && (
          <div className="mt-6 p-4 border rounded bg-gray-100 w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Results:</h3>
            <p>Prediction: {results.prediction}</p>
            <p>Score: {results.score}</p>
            <p>Feedback: {results.feedback}</p>
          </div>
        )}

        {/* Contribution Section */}
        <h2 className="text-2xl font-bold py-2" id="Contribution">
          Contribution of Members
        </h2>
        <div className="flex justify-center p-4">
          <Team />
        </div>

        {/* Key Takeaways Section */}
        <h2 className="text-2xl font-bold py-2" id="Takeaways">
          Key Takeaways
        </h2>
        <p>
          The project provided valuable insights into the practical aspects of
          Data Engineering, including Data Visualization, Pipelining, Multi-modal Approach, Dockers, model selection,
          training, evaluation, and hyperparameter tuning. It also helped us
          understand the challenges involved in working with Thermal datasets
          and the importance of feature engineering and Elasticsearch.
          Overall, the project enhanced our understanding of Data Engineering
          concepts and techniques and provided us with hands-on experience in
          implementing and evaluating machine learning models for Healthy/Unhealthy classification task.
        </p>

        {/* References Section */}
        <h2 className="text-2xl font-bold py-2" id="References">
          References
        </h2>
        <ul className="py-2">
          <li>
            <a
              href="https://github.com/introspective321/DE_COVID_Classification/tree/main/data"
              className="hover:text-gray-500"
            >
              Thermal images Dataset
            </a>
          </li>
          <li>
            <a
              href="https://dev.mysql.com/doc/"
              className="hover:text-gray-500"
            >
              MySQL Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.elastic.co/elasticsearch"
              className="hover:text-gray-500"
            >
              Elasticsearch
            </a>
          </li>
          <li>
            <a
              href="https://docs.docker.com/guides/"
              className="hover:text-gray-500"
            >
              Docker
            </a>
          </li>
          <li>
            <a
              href="https://dataengineering.wiki/Concepts/Data+Pipeline#:~:text=A%20Data%20Pipeline%20is%20a,learning%2C%20or%20other%20business%20functions."
              className="hover:text-gray-500"
            >
              Data Pipeline
            </a>
          </li>
          <li>
            <a
              href="https://scikit-learn.org/stable/"
              className="hover:text-gray-500"
            >
              Scikit-Learn Documentation
            </a>
          </li>
          <li>
            <a href="https://data101.org/fa24/" className="hover:text-gray-500">
              Data Engineering course - UC Berkeley
            </a>
          </li>
          <li>
            <a
              href="https://physionet.org/content/covid-19-thermal/1.0/"
              className="hover:text-gray-500"
            >
              Reference Research Paper
            </a>
          </li>
        </ul>
        <p className="pt-3 text-center">
          <a
            href="https://classroom.google.com/u/0/c/NjkxNjUwNjE2MDUz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            ©️ CSL4030 DE Autumn 2024
          </a>
          &nbsp;•&nbsp;
          <a
            href="https://www.iitj.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            IIT Jodhpur
          </a>
          &nbsp;•&nbsp;
          <a
            href="https://x.com/YashrajChaturv6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            Yashraj Chaturvedi
          </a>
          &nbsp;•&nbsp;
          <a href="#" className="hover:text-gray-500">
            Go to Top
          </a>
        </p>
      </div>
    </div>
  );
}
