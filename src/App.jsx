import "./App.css";
import profilePic from "./assets/me.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={profilePic} alt="Ahmed" className="nav-img" />
        <h2>Ahmed Yasser</h2>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h1>Ahmed Yasser</h1>
          <h3>Full Stack Web Developer | Graphic Designer | Interior Designer</h3>
          <p>
            Creative and results-driven professional with a Computer Science background
            and experience in web development, branding, and interior design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="profile-card">
          <h2>AY</h2>
          <p>Creative Developer</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I am a results-driven professional with experience in full-stack web
        development, graphic design, and interior design. I enjoy creating clean,
        creative, and useful solutions for clients and teams.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="card">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>CHI for Engineering and Computer Science, Cairo, Egypt</p>
        <p>Graduation: 2026</p>
        <p>School: Rajac Language Schools</p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Full Stack Web Development",
    "Graphic Design",
    "Interior Design",
    "SEO Optimization",
    "Branding",
    "Client Relations",
    "Marketing",
    "Adobe InDesign",
    "Microsoft Office",
    "Problem-Solving",
    "Team Collaboration",
    "Creativity"
  ];

  return (
    <section id="skills" className="section">
      <h2>Core Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Elite Meat Farms Website</h3>
          <p>
            Designed and developed the official website elitemeatfarms.com with
            full-stack functionality, responsive design, and SEO optimization.
          </p>
        </div>

        <div className="card">
          <h3>Educational Chatbot</h3>
          <p>
            Developed an AI-powered chatbot to help students with course inquiries,
            schedules, deadlines, and academic information.
          </p>
        </div>

        <div className="card">
          <h3>Graphic Design Work</h3>
          <p>
            Created logos, branding materials, brochures, flyers, posters, and
            website graphics for clients.
          </p>
        </div>

        <div className="card">
          <h3>Interior Design Projects</h3>
          <p>
            Created mood boards, selected furniture and materials, and supported
            residential and commercial design projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Professional Experience</h2>

      <div className="card">
        <h3>Graphic Designer – Freelancer</h3>
        <p>Jan 2023 – Present</p>
      </div>

      <div className="card">
        <h3>Full Stack Web Developer – Freelance / Elite Meat Farms</h3>
        <p>2024 - 2026</p>
      </div>

      <div className="card">
        <h3>Interior Designer – Media Hub</h3>
        <p>Oct 2024</p>
      </div>

      <div className="card">
        <h3>Restaurant Management – Family Restaurant</h3>
        <p>Aug 2021 – Feb 2022</p>
      </div>

      <div className="card">
        <h3>Laboratory Technician – Schools</h3>
        <p>Nov 2022 – Dec 2023</p>
      </div>

      <div className="card">
        <h3>Interior Designer – I.D. Company</h3>
        <p>Jul 2019 – Jul 2021</p>
      </div>
    </section>
  );
}

function Languages() {
  return (
    <section className="section">
      <h2>Languages</h2>
      <div className="card">
        <p>Arabic: Native</p>
        <p>English: Fluent</p>
        <p>German: Basic</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <p>Phone: +201024072888</p>
      <p>Email: Ahmedyredaa7@gmail.com</p>
      <p>Location: Nasr City, Cairo, Egypt</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Ahmed Yasser. All Rights Reserved.</p>
    </footer>
  );
}

export default App;
