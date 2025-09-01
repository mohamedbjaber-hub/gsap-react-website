import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  // Responsive video source
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  // react recommends to clean up side effects
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // GSAP animation
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#videoAction", {
      opacity: 1,
      y: 0,
      delay: 2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className=" h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          IPONE 17
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="videoAction"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlight" target="_blank" rel="noreferrer" className="btn">
          Acheter
        </a>
        <p className="font-normal text-xl">A partir de $200/mois ou $1500 </p>
        <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mb-4 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
