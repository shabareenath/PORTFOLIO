import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello, I&apos;m a</h2>
        <h1>Web Developer</h1>
        <p>
        I&apos;m a React Developer creating sleek, responsive web applications. Let&apos;s turn your ideas into reality
        </p>
        {/* Social Media Icons (Uncomment if needed) */}
        {/* <div className="icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-instagram"></i>
        </div> */}

        <div>
          <button className="button-33" role="button">
            RESUME
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
