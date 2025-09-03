import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
    });

    gsap.to(".link", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
    });
    

    gsap.to(".link", {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <section
      id="highlight"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Highlights Part
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              voir le film complet
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              voir l'evenement
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <div id="carousel">
          <VideoCarousel />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
