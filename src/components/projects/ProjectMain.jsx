import React from "react";
import ProjectCards from "./ProjectCards";
import ShoutOut from "../../assets/shout-out.png";
import QuizApp from "../../assets/quiz-app.png";
import BookFinder from "../../assets/book-finder.png";
import Heading from "../commonComponents/Heading";

const projects = [
  {
    projectName: "ShoutOut",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Sequelize",
      "Redux Toolkit",
      "JWT Authentication",
    ],
    projectDescription:
      "Shout-Out Post is a social media-style platform where users can create, share, and interact with short posts (shout-outs). The platform allows users to express their thoughts, celebrate achievements, or send shout-outs to others.",
    projectImg: ShoutOut,
    projectImgAlt: "ShoutOut Image",
    projectLink: "https://shoutoutpost.netlify.app/",
    reverseLayout: false
  },
  {
    projectName: "Interactive Quiz App",
    techStack: [
      "React.js",
      "useReducer",
      "Styled Components",
      "localStorage"
    ],
    projectDescription:
      "The Interactive Quiz App is a dynamic and engaging web application where users can test their knowledge on various topics. The app ensures an interactive experience with timed questions, randomized quizzes, and progress tracking.",
    projectImg: QuizApp,
    projectImgAlt: "Quiz App Image",
    projectLink: "https://jsquizappmilaap.netlify.app/",
    reverseLayout: true
  },
  {
    projectName: "Book Finder App",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "TailwindCss",
      "API Integration"
    ],
    projectDescription:
      "The Book Finder App is a web application that allows users to search for books by title, author, or keyword. It fetches real-time book data from an external API and provides details such as the book’s title, author, description, and cover image.",
    projectImg: BookFinder,
    projectImgAlt: "Book Finder App Image",
    projectLink: "https://bookfinderrr.netlify.app/",
    reverseLayout: false
  }
];

const ProjectMain = () => {
  return (
    <div className="max-w-[1200px] mx-5 mt-10 lg:mx-auto">
      <Heading text={"Projects"}/>
      {
        projects.map(each => {
            return <ProjectCards project={each} key={each.projectName}/>
        })
      }
      
    </div>
  );
};

export default ProjectMain;
