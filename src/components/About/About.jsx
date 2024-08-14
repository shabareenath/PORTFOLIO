import { useState } from "react";
import "./About.css";
import { assets } from "../../../assets/assets";
const About = () => {
  const [imgIndex, setImageIndex] = useState(1);

  const handleClick = (direction) => {
    var newImgIndex = imgIndex + direction;
    if (newImgIndex <= 0) {
      newImgIndex = 3;
    } else if (newImgIndex > 3) {
      newImgIndex = 1;
    }
    setImageIndex(newImgIndex);
  };

  const renderSlide = (imgIndex) => {
    switch (imgIndex) {
      case 1:
        return (
          <div className="description">
            {/* repeat this below div */}
            <div className="repeat-items">
              <h1>EDUCATION</h1>
              <p>
                <b></b>
                <span className="title">
                  Higher Secondary Education in Science (Computer/Maths):
                </span>{" "}
                <br />
                Developed a solid base in scientific concepts, with a particular
                emphasis on computer science and mathematics, preparing for
                advanced studies in technology through coursework at Jawahar
                Navodya Vidyalaya, Aleppey.
              </p>
              <br />
              <p>
                <span className="title">
                  Bachelor of Technology in Electronics and Communication:
                </span>
                <br />
                Demonstrated a strong foundation in electronics engineering
                principles, with a focus on communication systems and
                technologies, through a rigorous four-year program at Government
                Engineering College, Thrissur.
              </p>
              <br />
            </div>
            {/* upto this */}
            <div className="arrows">
              <button onClick={() => handleClick(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => handleClick(1)}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <p>
                <em>
                  EDUCATION&nbsp;&nbsp;/&nbsp;EXPERIENCE&nbsp;&nbsp;/ &nbsp;LIFE
                </em>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="description">
            {/* repeat this below div */}
            <div className="repeat-items">
              <h1>EXPERIENCE</h1>
              <p>
                <b></b>
                <span className="title">Angular Development:</span>
                <br />
                Gained practical experience in building dynamic web applications
                using Angular, showcasing proficiency in creating user-friendly
                interfaces and functionalities through projects such as a blog
                site dashboard, a gym data entry system, and a note-taking app.
              </p>
              <br />
              <p>
                <span className="title">React Development:</span>
                <br />
                Demonstrated versatility in front-end development by mastering
                React, creating interactive web experiences through projects
                involving a gemini-clone app, replicating the functionalities of
                ChatGPT and implementing basic animations,.
              </p>
              <br />
            </div>
            {/* upto this */}
            <div className="arrows">
              <button onClick={() => handleClick(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => handleClick(1)}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <p>
                <em>
                  EDUCATION&nbsp;&nbsp;/&nbsp;EXPERIENCE&nbsp;&nbsp;/ &nbsp;LIFE
                </em>
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="description">
            {/* repeat this below div */}
            <div className="repeat-items">
              <h1>LIFE</h1>
              <p>
                <b></b>
                <span className="title">
                Unleashing My Potential...
                </span>{" "}
                <br />
                I am a passionate individual with a zest for life. Hailing from
                the serene backwaters of Alappuzha, Kerala, I've always been
                drawn to adventure and challenges. Fitness, football, and
                swimming are my go-to outlets for staying active. When I'm not
                burning calories, I find solace in the world of series and
                movies. Traveling to new places and experimenting in the kitchen
                are other passions of mine. I thrive on learning new things and
                connecting with people.Winning the GEC 2022 ROADIES was a
                transformative experience that challenged me to grow and evolve.
              </p>
            </div>
            {/* upto this */}
            <div className="arrows">
              <button onClick={() => handleClick(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => handleClick(1)}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <p>
                <em>
                  EDUCATION&nbsp;&nbsp;/&nbsp;EXPERIENCE&nbsp;&nbsp;/ &nbsp;LIFE
                </em>
              </p>
            </div>
          </div>
        );
      default:
        null;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="contents">
          {renderSlide(imgIndex)}
          <div className="image">
            <img src={assets.image_bg_blue} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
