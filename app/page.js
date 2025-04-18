import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/style.module.css";
import Quotes from "./quotes/page.js";
import About from "./about/page.js";
import Blog from "./blog/page.js";
import Contact from "./contact/page.js";
import Profile from "./profile/page.js";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.backgroundimg}>
        <div className="row mb-5">
          <div className="col-md-6 text-center mt-5">
            <div className="fw-bold py-5 px-5 text-white d-flex justify-content-center display-4 align-items-center">
              <Quotes />
            </div>
            <div className="d-flex gap-4 justify-content-center">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="fw-bold py-5 px-5 text-white d-flex justify-content-center display-5 align-items-center"></div>
          </div>
        </div>
      </div>

      <div className="mb-5 container-fluid">
        <About />
      </div>

      <div className="mt-5">
        <Profile />
      </div>

      <div className="mt-5">
        <Contact />
      </div>

      <div className="bgcolors">
        <Blog />
      </div>
    </div>
  );
}
