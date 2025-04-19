import {
  DiBootstrap,
  DiJavascript1,
  DiLaravel,
  DiNodejsSmall,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { AiOutlineHtml5, AiOutlineDocker } from "react-icons/ai";
import styles from "@/app/style.module.css";

export default function Profile() {
  return (
    <div className="container bg-light pt-3">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-12 text-center">
          <span
            className="fw-bold"
            style={{ color: "#e47a08" }}
          >
            I AM GREAT AT THESE!!
          </span>
          <h2 className="mt-3 display-6 fw-bold" style={{ color: "rgba(5, 5, 4, 0.95)" }}>
            You are rest assured of a perfect websit with these technologies
          </h2>
          <p className="mt-3">
            Highly efficient, delivering high-quality work on time, optimizing
            processes, and consistently meeting project deadlines with
            precision.
          </p>
        </div>
      </div>

      <div className="row mt-5 gap-3 d-flex justify-content-center">
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <AiOutlineHtml5 size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">HTML</h4>
            <p className="card-text">
              Skilled in writing clean, semantic HTML for responsive, accessible
              web interfaces with a focus on structure, performance, and user
              experience.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiBootstrap size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">Bootstrap</h4>
            <p className="card-text">
              Proficient in Bootstrap, building responsive, mobile-first web
              interfaces with custom components, grid systems, and utility
              classes for fast UI development.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiJavascript1 size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">Javascript</h4>
            <p className="card-text">
              Experienced in JavaScript, developing interactive web applications
              with dynamic DOM manipulation, event handling, and seamless
              integration with APIs and frameworks.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiPhp size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">PHP</h4>
            <p className="card-text">
              Experienced in PHP and Laravel, building dynamic web applications,
              APIs, and backend systems with clean, efficient, and scalable
              code.
            </p>
          </div>
        </div>
      </div>

      <div className="row pb-5 justify-content-center gap-3 mt-5">
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiLaravel size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">Laravel</h4>
            <p className="card-text">
              Proficient in Laravel, building scalable web applications with
              clean architecture, RESTful APIs, database management,
              authentication, and modular code structure.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiReact size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">React</h4>
            <p className="card-text">
              Skilled in React, building dynamic, component-based user
              interfaces with state management, hooks, routing, and seamless
              integration with RESTful APIs.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <DiNodejsSmall size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">Node.js</h4>
            <p className="card-text">
              Experienced in Node.js, developing efficient backend services,
              RESTful APIs, real-time applications, and handling server-side
              logic with Express and MongoDB.
            </p>
          </div>
        </div>
        <div
          className={`col-md-6 shadow border-light card mt-2 p-3 ${styles.profile}`}
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle">
            <AiOutlineDocker size={60} className={`${styles.icon}`} />
            <span className=""></span>
          </div>
          <div className="class-body">
            <h4 className="card-title">Docker</h4>
            <p className="card-text">
              Proficient in Docker, creating containerized applications,
              managing development environments, ensuring consistency,
              scalability, and seamless deployment across various platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
