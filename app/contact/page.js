import Image from "next/image";

export default function Contact() {
  return (
    <div className="container px-4 mt-5">
      <h1 className="mt-5 fw-bold d-flex justify-content-center">
        What to know something exciting!!
      </h1>
      <div className="row mt-5">
        <div className="col-md-4 rounded">
          <div style={{ width: "100%", height: "250px", position: "relative" }}>
            <Image
              src="/images/about_1.jpg"
              alt="Computers"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
          <div className="">
            <span style={{ color: "#e47a08" }} className="fs-5 mt-3">
              The Power of Practical Experience
            </span>
            <div className="mt-3">
              <h5 style={{ color: "rgba(5, 5, 4, 0.95)" }} className="fw-bold">
                You can read all the books, take all the courses, and memorize
                all the theory, but nothing beats hands-on experience.
              </h5>
              <p style={{ color: "rgba(94, 92, 87, 0.99)" }} className="">
                Real growth comes from doing. You can study endlessly, but true
                mastery only comes through hands-on experience—making mistakes,
                solving problems, and learning by doing. It’s in the action that
                understanding deepens and skills take root. Practice is where
                the magic happens.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 px-3">
          <div style={{ width: "100%", height: "250px", position: "relative" }}>
            <Image
              src="/images/about_2.jpg"
              alt="Computers"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
          <div className="">
            <span style={{ color: "rgb(228, 122, 8)" }} className="fs-5 mt-3">
              Focus Over Talent
            </span>
            <div className="mt-3">
              <h5 style={{ color: "rgba(5, 5, 4, 0.95)" }} className="fw-bold">
                Most people don't fail because they lack talent. They fail
                because they can't focus.
              </h5>
              <p style={{ color: "rgba(94, 92, 87, 0.99)" }} className="">
                Failure often isn't due to a lack of talent, but a lack of
                focus. Many gifted individuals get distracted, jump between
                goals, or give up too soon. Talent opens the door, but focus is
                what gets you through it. Mastering focus turns potential into
                progress and goals into reality.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div style={{ width: "100%", height: "250px", position: "relative" }}>
            <Image
              src="/images/about_3.jpg"
              alt="Computers"
              fill
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
          <div className="">
            <span style={{ color: "rgb(228, 122, 8)" }} className="fs-5 mt-3">
              Growth Begins Outside the Comfort Zone
            </span>
            <div className="mt-3">
              <h5 style={{ color: "rgba(5, 5, 4, 0.95)" }} className="fw-bold">
                Real breakthroughs come when you say yes to things that make you
                uncomfortable
              </h5>
              <p style={{ color: "rgba(94, 92, 87, 0.99)" }} className="">
                No developer becomes great by staying comfortable. Real progress
                comes when you take risks—tackling hard problems, exploring new
                tools, or saying yes to challenging tasks. Growth demands
                discomfort. Every breakthrough begins where certainty ends. If
                you want to level up, dare to step into the unknown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
