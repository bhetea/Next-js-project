import Image from "next/image";
import { lusitana, poetsenOne } from "@/app/ui/fonts";

export default function About() {
  return (
    <div className="container-fluid pb-5">
      <h1 className={`d-flex justify-content-center mt-5 ${poetsenOne.className} `}>About Me</h1>
      <div className="row gy-1 justify-content-between mt-5 px-3 py-3">
        <div
          className="col-md-4 align-self-start img-fluid"
          style={{ width: "500px", height: "450px", position: "relative" }}
        >
          <Image
            src="/images/bee.jpeg"
            alt="Fine wine"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <p className={`fs-3 fw-normal ${lusitana.className}`}>
            Hi, I’m Betty—a passionate web developer based in Makurdi,
            Benue State. I specialize in building dynamic, user-friendly web
            applications using Laravel, Livewire, JavaScript, and React. I
            absolutely love writing code, solving problems, and bringing ideas
            to life through clean and functional design. Outside of coding, I
            enjoy writing, doing research, exploring good food, and having deep
            conversations about tech, fashion, and the gospel. My goal is to
            keep growing in my craft and become one of the best in the field.
            For me, excellence, creativity, and purpose go hand in hand in
            everything I do.
          </p>
        </div>
      </div>
    </div>
  );
}
