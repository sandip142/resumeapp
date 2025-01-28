import React from "react"
import "./Resume.css"

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Profile Photo */}
            <div className="profile-photo"></div>

            {/* Name */}
            <h1 className="name">Sandip Kankhare</h1>

            {/* Contact */}
            <section className="contact-section">
              <h2>CONTACT</h2>
              <div className="contact-info">
                <div>
                  <i className="icon-phone"></i>+91 8080970288
                </div>
                <div>
                  <i className="icon-mail"></i>
                  <a href="mailto:kankharesandip78@gmail.com">kankharesandip78@gmail.com</a>
                </div>
                <div>
                  <i className="icon-github"></i>
                  <a href="#">GitHub</a>
                </div>
                <div>
                  <i className="icon-linkedin"></i>
                  <a href="#">LeetCode</a>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="skills-section">
              <h2>SKILLS</h2>
              <div className="skills-info">
                <p>
                  <strong>Languages:</strong> Javascript, Java,Python
                </p>
                <p>
                  <strong>Development:</strong> HTML, CSS, MySQL,Android Git & GitHub
                </p>
                <p>
                  <strong>Core Skills:</strong> Mobile-App Development UI Design, Backend Development, Real-time
                  Database Management, Secure Authentication
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="education-section">
              <h2>EDUCATION</h2>
              <div className="education-info">
                <div className="education-item">
                  <h3>B. Tech in Computer Engineering</h3>
                  <p>R.C Patel Institute of Technology</p>
                  <p>Shirpur, Maharashtra</p>
                  <p>CGPA: 8.10 | 2024</p>
                </div>
                <div className="education-item">
                  <h3>Higher Education (HSC)</h3>
                  <p>Jawahar Navodaya vidyalaya</p>
                  <p>Akkalkuwa, Maharashtra</p>
                  <p>Percentage: 88.60% | 2021</p>
                </div>
                <div className="education-item">
                  <h3>Secondary Education (SSC)</h3>
                  <p>Jawahar Navodaya vidyalaya</p>
                  <p>Akkalkuwa, Maharashtra</p>
                  <p>Percentage: 81.33% | 2019</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Personal Projects */}
            <section className="projects-section">
              <h2>PERSONAL PROJECTS</h2>
              <div className="project-item">
                <h3>
                  Connect Meet - <a href="#">View Project</a>
                </h3>
                <ul>
                  <li>
                    Developed a comprehensive online meeting platform using Flutter and Firebase, featuring secure
                    Firebase Authentication and Google Sign-In.
                  </li>
                  <li>
                    Implemented real-time data management with Firestore, support for large-scale meetings, and history
                    tracking of all attended meetings.
                  </li>
                  <li>
                    Ensured a user-friendly interface with real-time synchronization for a seamless user experience.
                  </li>
                </ul>
              </div>
              <div className="project-item">
                <h3>
                  Vehicle Parking Mobile Application - <a href="#">View Project</a>
                </h3>
                <ul>
                  <li>
                    Developed a Flutter-based Vehicle Parking App for large malls, using Firebase for Google
                    Authentication and Node.js with MongoDB for backend.
                  </li>
                  <li>Included modules for managers to manage parking and for drivers to find and reserve spots.</li>
                  <li>Integrated Razorpay for virtual payments.</li>
                </ul>
              </div>
            </section>

            {/* Certifications */}
            <section className="certifications-section">
              <h2>CERTIFICATIONS</h2>
              <ul>
                <li>
                 <strong>C Programming</strong> - Completed an intensive course on C programming fundamentals and advanced concepts.
                </li>
                <li>
                 <strong>Full Stack with Java Training</strong> - Comprehensive training covering Java backend development, Spring
                  framework, and frontend technologies.
                </li>
                <li>
                 <strong> Python Programming</strong> - Mastered Python programming language, including object-oriented programming and
                  popular libraries.
                </li>
              </ul>
            </section>

            {/* Training and Internship Experience */}
            <section className="experience-section">
              <h2>TRAINING AND INTERNSHIP EXPERIENCE</h2>
              <div className="experience-item">
                <h3>Freelance Developer</h3>
                <p className="date">July 2022 - Present</p>
                <ul>
                  <li>
                    Created full-stack applications using MERN and MEAN stacks, ensuring robust and scalable solutions.
                  </li>
                  <li>
                    Developed cross-platform mobile applications with Flutter, integrating Firebase for backend services
                    and Hive for local storage.
                  </li>
                  <li>
                    Delivered user-facing applications with end-to-end development, including design, implementation,
                    and deployment.
                  </li>
                </ul>
              </div>
            </section>

            {/* Achievements */}
            <section className="achievements-section">
              <h2>ACHIEVEMENTS</h2>
              <ul>
                <li>Solved 100+ Data Structures and Algorithms problems on various coding platforms.</li>
                <li>Won the Internal Hackathon for Smart India Hackathon out of 80 college teams, and led the team.</li>
                <li>Winner of National Level Converges 2k23</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

