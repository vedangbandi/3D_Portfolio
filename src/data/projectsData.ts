export interface Project {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Optimum Finance",
    category: "AI-Powered Personal Finance Manager",
    description:
      "A full-stack personal finance web app that tracks income, expenses, and savings. Integrated the Gemini API to build an LLM chatbot that gives personalized budgeting and investment advice. Published as a research paper in IJEAST.",
    tools: "Python · HTML · Django · Gemini API · SQL",
    image: "/images/optimum-finance.png",
    link: "https://github.com/vedangbandi/optimum-finance",
  },
  {
    title: "Sign Language Recognition",
    category: "Real-Time Computer Vision System",
    description:
      "A deep learning system that converts sign language gestures to text in real-time using a live webcam feed. Uses MediaPipe for hand tracking, TensorFlow for gesture classification, and OpenCV for video capture — achieving 90%+ accuracy in testing.",
    tools: "Python · MediaPipe · TensorFlow · OpenCV",
    image: "/images/sign-language.png",
    link: "https://github.com/vedangbandi/sign-language-recognition",
  },
  {
    title: "News Article Summarizer",
    category: "NLP-Based Web Scraping Tool",
    description:
      "A Streamlit app that scrapes and summarizes online news articles using natural language processing. Cuts content by 70%+ while preserving key information. Built with BeautifulSoup for scraping and NLTK for extractive summarization.",
    tools: "Python · NLTK · BeautifulSoup · Streamlit",
    image: "/images/news-summarizer.png",
    link: "https://github.com/vedangbandi/news-summarizer",
  },
  {
    title: "Online Exam Suite",
    category: "Role-Based Exam Management Platform",
    description:
      "A full-featured online exam platform that simulates real-world test environments with different roles for students and admins. Automated exam scoring with Python (60% less manual processing) and structured data storage in SQL.",
    tools: "Django · Python · HTML · SQL",
    image: "/images/exam-suite.png",
    link: "https://github.com/vedangbandi/online-exam-suite",
  },
];
