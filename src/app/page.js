import Test from "./test";
import Team from "./team";

export default function Home() {
  return (
    <div className="font-mono">
      <div className="flex flex-col items-center w-4/5 mx-auto mt-12">
        <h1 className="text-4xl text-center font-bold">
          Covid Classification using Multimodal Data
        </h1>
        <div className="mt-6 mb-4">
          <h2 className="text-center text-2xl">Data Engineering</h2>
          <h2 className="text-center text-1xl">Autumn 2024 IIT Jodhpur</h2>
        </div>
        <ul className="lg:flex lg:flex-wrap w-1/2 lg:gap-x-12 lg:p-2 lg:gap-y-6 lg:m-2">
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/introspective321"
              target="_blank"
              className="underline hover:text-gray-500"
            >
              Anushk Gupta
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/yashrajsnow007"
              target="_blank"
              className="underline hover:text-gray-500"
            >
              Yashraj Chaturvedi
            </a>
          </li>
          <li className="py-2 lg:py-0">
            <a
              href="https://github.com/om-nain"
              target="_blank"
              className="underline hover:text-gray-500"
            >
              Omprakash Nain
            </a>
          </li>
        </ul>
        <ul className="flex mt-3 mb-6 font-bold flex-wrap">
          <li className="hover:text-gray-500">
            <a href="https://github.com/introspective321/DE_COVID_Classification">Github |</a>
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
            <a href="#Models">&nbsp;Models | </a>
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
        <div className="py-2 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/laYD201rK3k?si=mm2KmtQ3m1ooD2g2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          ></iframe>
        </div>
        <h2 className="text-2xl font-bold py-2" id="Abstract">
          Abstract
        </h2>
        <p>
        The Covid-19 pandemic has emphasized the importance of rapid and reliable health
        assessments. In our project, we developed a system for classifying individuals as
        healthy or unhealthy using thermal image data combined with clinical information. 
        The dataset, sourced from PhysioNet, includes thermal videos captured from four 
        positions (front, back, left, and right), along with associated clinical and demographic 
        data such as vital signs, symptoms, and previous exposure details.
        </p>
        <p>
          We employed an ETL pipeline to preprocess the raw data, ensuring reliability through 
          cleaning, normalization, and validation checks. For classification, we utilized a 
          multi-modal approach integrating tabular and image data. Machine learning models 
          like Random Forests, XGBoost, Multilayer Perceptrons (MLPs), and Convolutional Neural 
          Networks (CNNs) were tested. Experimental results demonstrated the superior performance 
          of multi-modal models over single modalities, with Random Forests and XGBoost achieving 
          the best results in Covid-19 detection.
        </p>
          <p>
            The system architecture was designed for scalability, employing Docker for containerized 
            execution and Elasticsearch for efficient indexing and querying. This project not only 
            addresses the challenge of reliable data processing but also provides an extensible 
            framework for real-world healthcare applications.
          </p>
          <p className="py-2">
            <b>Keywords</b>: Covid-19 Classification, Thermal Images, ETL Pipeline, Multi-Modal Approach, Machine Learning
          </p>






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
    src="path-to-your-thermal-image-representation.png"
    alt="Thermal Images of Participants"
    className="h-80 w-80 py-2 mx-auto block"
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






<h2 className="text-2xl font-bold py-2" id="Results">
  Results
</h2>
<p>
  The implementation of the ETL pipeline and associated technologies yielded a robust and scalable data processing framework. The pipeline successfully transformed raw thermal image data and clinical records into structured formats, ensuring high reliability and usability. The integration of Dockerized MySQL for tabular data storage and Elasticsearch for advanced indexing enabled seamless data retrieval and querying capabilities.
</p>
<p>
  The ETL pipeline achieved the following milestones:
</p>
<ul className="py-2">
  <li><b>Data Processing:</b> Processed raw data from thermal image videos and clinical CSV files into a structured, normalized format suitable for storage and analysis.</li>
  <li><b>Automation:</b> Automated the data ingestion, cleaning, and loading process, significantly reducing manual intervention.</li>
  <li><b>Storage Efficiency:</b> Successfully stored and managed large datasets in a relational database with optimized queries for retrieval.</li>
  <li><b>Query Performance:</b> Elasticsearch integration enabled advanced, real-time querying, including full-text searches and filtering by clinical parameters.</li>
</ul>
<p>
  The project demonstrated the effectiveness of combining a relational database with a search engine for handling multi-modal datasets. The user-facing interface enabled smooth data upload and processing workflows. This framework serves as a scalable solution for future data engineering projects, particularly in the healthcare domain.
</p>




        <Test />





        <h2 className="text-2xl font-bold py-2" id="Contribution">
          Contribution of Members
        </h2>
        <div className="flex justify-center p-4">
          <Team />
        </div>

        <h2 className="text-2xl font-bold py-2" id="Takeaways">
          Key Takeaways
        </h2>
        <p>
          The project provided valuable insights into the practical aspects of
          machine learning, including data preprocessing, model selection,
          training, evaluation, and hyperparameter tuning. It also helped us
          understand the challenges involved in working with real-world datasets
          and the importance of feature engineering and model interpretation.
          Overall, the project enhanced our understanding of machine learning
          concepts and techniques and provided us with hands-on experience in
          implementing and evaluating machine learning models for image
          classification tasks.
        </p>
        <h2 className="text-2xl font-bold py-2" id="References">
          References
        </h2>
        <ul className="py-2">
          <li>
            <a
              href="https://www.cs.toronto.edu/~kriz/cifar.html"
              className="hover:text-gray-500"
            >
              CIFAR-10 Dataset
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/c/cifar-10"
              className="hover:text-gray-500"
            >
              Kaggle CIFAR-10 Competition
            </a>
          </li>
          <li>
            <a
              href="https://www.tensorflow.org/datasets/catalog/cifar10"
              className="hover:text-gray-500"
            >
              TensorFlow CIFAR-10 Dataset
            </a>
          </li>
          <li>
            <a
              href="https://www.wiley.com/en-us/Pattern+Classification%2C+2nd+Edition-p-9780471056690"
              className="hover:text-gray-500"
            >
              Pattern Classification by Duda, Hart, and Stork
            </a>
          </li>
          <li>
            <a
              href="https://www.coursera.org/learn/machine-learning"
              className="hover:text-gray-500"
            >
              Coursera Machine Learning Course by Andrew Ng
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
            <a href="https://keras.io/" className="hover:text-gray-500">
              Keras Official Website
            </a>
          </li>
          <li>
            <a
              href="https://paperswithcode.com/sota/image-classification-on-cifar-10"
              className="hover:text-gray-500"
            >
              Papers with Code - CIFAR-10 Image Classification
            </a>
          </li>
        </ul>
        <p className="pt-3 text-center">
          <a
            href="https://github.com/anandmishra22/PRML-Spring-2023"
            target="_blank"
            className="hover:text-gray-500"
          >
            © CSL4030 DE Autumn 2024
          </a>
          &nbsp;•&nbsp;
          <a
            href="https://www.iitj.ac.in/"
            target="_blank"
            className="hover:text-gray-500"
          >
            IIT Jodhpur
          </a>
          &nbsp;•&nbsp;
          <a
            href="https://new.reddit.com/user/Fuzzy_Weather1503"
            target="_blank"
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
