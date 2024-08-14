import "./Projects.css";
import { assets } from "../../../assets/assets";
const project = [
  {
    title: "Gemini Clone Using Gemini API",
    description:
      "A clone of the Gemini application using the Gemini API, showcasing advanced AI integration.",
    image: assets.img4, // Replace with your image path
    link: "#",
  },
  {
    title: " Gym Data Entry System",
    description:
      "Angular-based gym management system for efficient member and attendance tracking.",
    image: assets.img2, // Replace with your image path
    link: "#",
  },
  {
    title: "Online Shopping App",
    description:
      "This platform enables users to browse, select, and purchase products or services from various merchants through a mobile or web application.",
    image: assets.img1, // Replace with your image path
    link: "#",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="container-pro">
        <div className="heading">
          <h1>PROJECTS</h1>
        </div>
        <div className="project-cards-container">
          {project.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
