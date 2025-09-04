import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Particles background
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js";
    script.async = true;
    script.onload = () => {
      window.tsParticles.load("tsparticles", {
        particles: {
          number: { value: 50 },
          color: { value: "#64ffda" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "repulse" } }
        },
        background: { color: "#0a192f" }
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">RS</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div id="tsparticles"></div>
        <div className="hero-content">
          <h2 className="hero-name">Rishika Sri Gaddam</h2>
          <h3 className="hero-title">
            Software Engineer | MERN Developer | Data Science Enthusiast
          </h3>
          <p>
            Looking for Software Engineering and Data Analyst roles. Skilled in
            MERN stack, Java, Python, ML libraries & Cloud.
            <br/><br/>
            
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Get In Touch</a>
            <a href="#projects" className="btn secondary">View Projects</a>
            <a href="/Rishika_Sri_Gaddam_Resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
            <br/><br/>
          </div>

          <div className="hero-icons">
            
            <a href="https://www.linkedin.com/in/rishika-sri-b4926022a/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            <a href="https://github.com/RishikaSri" target="_blank" rel="noreferrer">💻 GitHub</a>
            <a href="mailto:rishikasrigaddam23@gmail.com">✉️ Email</a>
            <a href="tel:+19804574452">📞 Phone</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am pursuing my MS in Computer Science at UNC Charlotte (graduating May 2026) and hold a Bachelor’s in CS from Osmania University. I’m actively seeking Spring 2026 internships or co-ops and full-time roles starting May 2026 in Software Development, Data Analytics, or Data Engineering.
          <br/><br/>
          My skills include Java, JavaScript, Python, MERN Stack, SQL, MongoDB, and AWS, along with Power BI, Tableau, Git, and TensorFlow. I’ve built projects in full-stack development, ML models, cloud systems, data visualization, predictive modeling, and LLM-based applications.
          <br/><br/>
          Passionate about solving real-world problems and building impactful products, I bring strong coding, analytical, and problem-solving abilities, with a drive to learn, innovate, and contribute to meaningful teams.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section light">
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <img src="/logos/uncc.png" alt="UNCC Logo" className="exp-logo" />
            <h3>University of North Carolina at Charlotte</h3>
            <p className="duration">Jan 2025 – May 2026</p>
            <p><strong className="highlight">M.S. in Computer Science</strong> (CGPA <strong className="highlight">4/4</strong>)</p>
            <p><em>Relevant Courses:</em> Data Structures and Algorithms, Big Data Analytics, Software System Design and Implementation, Principles of Information Security and Privacy, Artificial Intelligence, Applied Artificial Intelligence, Applied Databases, Data Mining</p>
          </div>
          <div className="edu-card">
            <img src="/logos/ou.png" alt="OU Logo" className="exp-logo" />
            <h3>Osmania University</h3>
            <p className="duration">Nov 2020 – Jul 2024</p>
            <p><strong className="highlight">B.E. in CSE</strong> (CGPA <strong className="highlight">8.86/10</strong>)</p>
            <p><em>Relevant Courses:</em> OOP Using JAVA, Software Engineering, Data Science, Artificial Intelligence, Information Security, Operating Systems, Software Testing, Database Management Systems, Design and Analysis of Algorithms, Machine Learning, Digital Electronics, Computer Networks, Compiler Design, Software Reuse Techniques</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (TIMELINE STYLE) */}
      <section id="experience" className="section dark">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">

         <div className="exp-card">
  <img src="/logos/exposys.png" alt="Exposys Logo" className="exp-logo" />
  <h3>Data Science Intern — Exposys Data Labs</h3>
  <p className="duration">Sep 2024 – Oct 2024 · Remote</p>
  <p>I developed a Diabetes Prediction system using Python Flask and Logistic Regression, achieving 97% accuracy. Built a user-friendly interface with HTML/CSS for real-time health predictions, applying Pandas, NumPy, and Scikit-learn for data processing and model evaluation. This strengthened my skills in ML model deployment and web development. In addition, I learned to optimize models for better performance and gained practical exposure to integrating backend ML systems with intuitive front-end applications..</p>
  <div className="tags">
    <span>Python</span><span>Flask</span><span>Scikit-learn</span>
    <span>Pandas</span><span>NumPy</span><span>HTML/CSS</span>
  </div>
</div>

<div className="exp-card">
  <img src="/logos/cyberekta.png" alt="CyberEkta Logo" className="exp-logo" />
  <h3>Intern — CyberEkta</h3>
  <p className="duration">May 2023 – Jun 2023 · Hyderabad</p>
  <p>I designed and developed a MERN-based web application that connected farmers directly to customers for fresh produce sales. Integrated MongoDB for data management, built secure ordering and product listing features, and deployed the app on Azure. This project enhanced my full-stack development skills and cloud integration experience. I also collaborated with a small team, which improved my ability to work in an agile environment, manage feature updates, and ensure a smooth user experience from product listing to checkout.</p>
  <div className="tags">
    <span>React</span><span>Node.js</span><span>MongoDB</span>
    <span>Express.js</span><span>Azure</span>
  </div>
</div>

<div className="exp-card">
  <img src="/logos/phn.png" alt="PHN Tech Logo" className="exp-logo" />
  <h3>ML & Data Science Intern — PHN Technologies</h3>
  <p className="duration">Apr 2023 – Jun 2023 · Remote</p>
  <p>I gained hands-on experience with machine learning, performing data cleaning, preprocessing, and analysis using Pandas and NumPy. Implemented algorithms such as Linear Regression, Decision Trees, and k-NN to solve real-world problems, strengthening my data science foundation and problem-solving skills. Beyond technical learning, I improved my ability to communicate findings effectively and adapt quickly to new ML concepts, which helped me transition from theory to practical application in real-world projects.</p>
  <div className="tags">
    <span>Python</span><span>NumPy</span><span>Pandas</span>
    <span>Scikit-learn</span>
  </div>
</div>



        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section light">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>RAG-Based AI Assistant</h3>
            <p className="duration">Mar 2025 – May 2025</p>
            <p>I built an AI-powered assistant that enhanced GPT-4 responses through Retrieval-Augmented Generation (RAG). The system integrated Pinecone for vector storage, LangChain for retrieval workflows, and a FastAPI backend for seamless communication. This project allowed me to work on optimizing response accuracy, managing embeddings, and deploying scalable AI pipelines, strengthening my skills in advanced NLP and backend integration.
</p>
            <div className="tags">
              <span>Python</span><span>GPT-4</span><span>Pinecone</span>
              <span>LangChain</span><span>FastAPI</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Face Mask Detection & Alert System</h3>
            <p className="duration">Feb 2025 – Apr 2025</p>
            <p>I developed a real-time face mask detection system using CNN architectures such as VGG16 and MobileNetV2 with OpenCV. The solution was integrated with IoT components to send instant email alerts when violations were detected. This project deepened my knowledge of computer vision, model training, and real-world deployment, while demonstrating the ability to combine AI with IoT for safety-focused applications.</p>
            <div className="tags">
              <span>Python</span><span>OpenCV</span><span>CNN</span>
              <span>VGG16</span><span>IoT</span>
            </div>
          </div>

          <div className="project-card">
            <h3>HemoHub</h3>
            <p className="duration">Mar 2024 – Jun 2024</p>
            <p>I created a MERN stack application to streamline blood donation and request management. The platform included JWT-based authentication, donor/recipient dashboards, and integrated Twilio SMS alerts for communication. Deploying this project enhanced my expertise in secure web app development, user management, and real-time notification systems.</p>
            <div className="tags">
              <span>React</span><span>Node.js</span><span>Express.js</span>
              <span>MongoDB</span><span>JWT</span><span>Twilio</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Image Caption Generator</h3>
            <p className="duration">Aug 2022 – Nov 2022</p>
            <p>
I implemented an image captioning model that combined CNN for feature extraction with LSTM for natural language generation. The system was evaluated using BLEU scores and optimized for accuracy and fluency of captions. By integrating OpenCV for image preprocessing and Keras for model training, I gained strong hands-on experience in deep learning and the intersection of computer vision with natural language processing.</p>
            <div className="tags">
              <span>Python</span><span>Keras</span><span>CNN</span>
              <span>LSTM</span><span>NLP</span><span>OpenCV</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-box"><h4>Programming</h4><p>Python, Java, C, R, Git</p></div>
          <div className="skill-box"><h4>Frontend</h4><p><strong>HTML, CSS</strong>, JavaScript, React, Angular, TypeScript</p></div>
          <div className="skill-box"><h4>Backend</h4><p>Node.js, Express.js, MERN, APIs</p></div>
          <div className="skill-box"><h4>Databases</h4><p>MySQL, MongoDB, PostgreSQL</p></div>
          <div className="skill-box"><h4>Big Data</h4><p>Hadoop, Spark, MapReduce, Hive, BigQuery</p></div>
          <div className="skill-box"><h4>AI/ML</h4><p>Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, Pandas</p></div>
          <div className="skill-box"><h4>Cloud</h4><p>AWS, Azure, Snowflake</p></div>
          <div className="skill-box"><h4>Visualization</h4><p>Tableau, Power BI</p></div>
        </div>
      </section>

      {/* CONTACT */}
        <section id="contact" className="section light">
  <h2 className="section-title">Let's Connect & Discuss Opportunities</h2>

  <div className="contact-container">
    {/* Left Side */}
    <div className="contact-details">
      <p>📧 rishikasrigaddam23@gmail.com</p>
      <p>📞 +1 (980) 457-4452</p>
    </div>

    {/* Right Side */}
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea className="message-box" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn primary">Send Message</button>
    </form>
  </div>
</section>





      <footer>© 2025 Rishika Sri Gaddam</footer>
    </div>
  );
}

export default App;
