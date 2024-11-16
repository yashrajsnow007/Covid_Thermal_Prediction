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
          Image retrieval is important in various applications that allows users
          to search and retrieve relevant images with ease. In our project, we
          focused on image retrieval using traditional machine learning
          techniques on the CIFAR-10 dataset which consist of 60,000 colored
          images from ten classes. We have tried classical ML methods like
          classification and clustering based techniques for effective retrieval
          of the best pictures. At initial stages after data visualization and
          feature extraction we used Single-layer perceptrons, K-nearest
          neighbors, Naive Bayes, Logistic Regression, Random forests which gave
          us a good insights along-with with accuracies ranging between 33% and
          55%. In the later stages of this project we implemented Support vector
          machines and Multi-layer perceptrons(MLP) to improve model
          performance. Although the scratch version of SVM was working good on
          other data sets, it failed badly on CIFAR-10 so we did a failure-case
          analysis for that and went ahead with sklearn SVM. To manage dataset
          complexity issues we used techniques such as PCA and K-Means were but
          finally proceeded with PCA. This project helped us in understanding
          image retrieval techniques and handling complex & large datasets,
          aiming to identify effective strategies for real-world applications in
          a concise yet comprehensive manner.
        </p>
        <p className="py-2">
          <b>Keywords</b>: Image retrieval, CIFAR-10, Clustering,
          Classification, Model Performance
        </p>

        <h2 className="text-2xl font-bold py-2" id="Dataset">
          Dataset
        </h2>
        <p>
          The dataset used in this project is the CIFAR-10 dataset. The CIFAR-10
          dataset consists of 60000 32x32 colour images in 10 classes, with 6000
          images per class. There are 50000 training images and 10000 test
          images. It was created by researchers at the Canadian Institute for
          Advanced Research (CIFAR) as a benchmark for evaluating machine
          learning algorithms and models for image classification tasks. It was
          released in 2009 and has since become one of the most popular datasets
          for image classification research. The following are the classes in
          the CIFAR-10 dataset:
        </p>
        <ul className="py-2 flex flex-wrap gap-4 mx-auto">
          <li>
            <b>Airplane</b>
          </li>
          <li>
            <b>Automobile</b>
          </li>
          <li>
            <b>Bird</b>
          </li>
          <li>
            <b>Cat</b>
          </li>
          <li>
            <b>Deer</b>
          </li>
          <li>
            <b>Dog</b>
          </li>
          <li>
            <b>Frog</b>
          </li>
          <li>
            <b>Horse</b>
          </li>
          <li>
            <b>Ship</b>
          </li>
          <li>
            <b>Truck</b>
          </li>
        </ul>
        <p>
          The images in the CIFAR-10 dataset were collected from a variety of
          sources, including web searches, image repositories, and image-sharing
          platforms. Each image was manually labelled with one of the 10 class
          labels by human annotators.
        </p>
        <figure>
          <img
            src="https://storage.googleapis.com/kaggle-media/competitions/kaggle/3649/media/cifar-10.png"
            alt="CIFAR-10 Images"
            className="h-80 w-80 py-2 mx-auto block"
          ></img>
          <figcaption className="text-center text-gray-700">
            Figure 1: Sample Images from the CIFAR-10 Dataset
          </figcaption>
        </figure>

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
