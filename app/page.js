import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/style.module.css";
import Quotes from "./quotes/page.js";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className={styles.backgroundimg}>
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="fw-bold py-5 px-5 text-white d-flex justify-content-center display-6 align-items-center">
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
        <div
          className="w-50 h-30"
          style={{
            position: "absolute",
            marginTop: "40px",
            marginLeft: "600px",
            backgroundColor: "#0F52BA",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <p className="px-3 text-white display-6 text-wrap">
                Right knowledge births right expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
