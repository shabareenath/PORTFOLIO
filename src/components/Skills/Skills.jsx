import "./Skills.css";
// import {assets} from '../../../assets/assets'
function Skills() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="column languages">
            <h1>LANGUAGES</h1>
            <div className="icons">
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                  alt="Skill 1"
                />
                <p>HTML</p>
              </div>
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                  alt="Skill 2"
                />
                <p>CSS</p>
              </div>
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                  alt="Skill 3"
                />
                <p>JAVASCRIPT</p>
              </div>
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                  alt="Skill 4"
                />
                <p>C++</p>
              </div>
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                  alt="Skill 5"
                />
                <p>PYTHON</p>
              </div>
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>SQL</p>
              </div>
            </div>
          </div>
          <div className="column skills">
            <h1>SKILLS</h1>
            <div className="icons">
              {/* Add tool icons */}

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>NODE JS</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=zh7me4lnKerp&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>JQUERY </p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>JIRA</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>GIT</p>
              </div>

              {/* Repeat as necessary */}
            </div>
          </div>
          <div className="column tools">
            <h1>TOOLS</h1>
            <div className="icons">
              {/* Add language icons */}
              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>REACT JS</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>ANGULAR</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>MYSQL</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>POWER BI</p>
              </div>

              <div className="icon">
                <img
                  src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000"
                  alt="Skill 6"
                />
                <p>EXCEL</p>
              </div>

              {/* Repeat as necessary */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
