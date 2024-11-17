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
            src="https://www.youtube.com/embed/T_H_3v0PhAY?si=nbjKjILUW_YTA3S7&amp;start=2"
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
  The dataset used in this project is the Covid-19 thermal image dataset sourced from  
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
          Despite its popularity, the CIFAR-10 dataset presents several
          challenges for machine learning algorithms, including:
        </p>
        <ul className="py-2">
          <li>
            <b>Low-Resolution Images</b>: The small size (32x32 pixels) of the
            images makes it more challenging to extract meaningful features.
          </li>
          <li>
            <b>Noisy Images</b>: The images in the CIFAR-10 dataset are often
            noisy, which can make it difficult for models to learn the
            underlying patterns.
          </li>
          <li>
            <b>Similar Classes</b>: Some classes in CIFAR-10 (e.g., cat and dog)
            share similar visual features, leading to higher classification
            difficulty.
          </li>
          <li>
            <b>Limited Diversity</b>: The dataset contains a limited variety of
            objects compared to real-world scenarios, which may limit the
            generalization ability of models trained on CIFAR-10.
          </li>
        </ul>
        <h2 className="text-2xl font-bold py-2" id="Models">
          Models Implemented
        </h2>
        <p>
          We implemented almost all the machine learning models encompassing all
          the topics taught during the course. This covers techniques involving
          both supervised and unsupervised learning. For dimensionality
          reduction, we implemented PCA. We also implemented K-means clustering
          for unsupervised learning. For supervised learning, we implemented
          Decision Trees, Random Forest, SVM, Naive Bayes, KNN, ANN, and
          Perceptron. Logistic Regression was also implemented. Emphasis was
          laid on implementing the models from scratch to get a better
          understanding of the mathematics involved.
        </p>
        <h2 className="text-2xl font-bold py-2" id="Results">
          Results
        </h2>
        <p>
          The majority of models produced accuracy scores in the range of 48-60
          %. SVM with 'RBF' kernel produced an accuracy score of 61.04 %. The
          results showed that deep learning models would definitely outperform
          traditional machine learning models on the CIFAR-10 dataset, achieving
          higher accuracy and better generalization. There were some models like
          Naive Bayes which performed poorly on the dataset due to its inherent
          assumptions about the data distribution given that the images have a
          property of having pixels not entirely independent.
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
