import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef, useEffect, useState } from "react";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
  gsap.to('#exploreVideo', {
    scrollTrigger: {
      trigger: '#exploreVideo',
      toggleActions: 'play pause reverse restart',
      start: '-10% bottom',
    },
    onComplete: () =>{
      videoRef.current.play();
    }
  })


    // animateWithGsap : refactoriser la fonction de annimation dans animation.js
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", { y: 0, opacity: 1, ease: "power2.inOut" });
  }, []);
  return (
    <section className="h-full common-padding bf-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            {" "}
            Voir Notre histoire
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden ">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold"> Iphone </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Coque en Titanium
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 has-[50vh]:">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 has-[50vh]:">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text  mb-5">
                    Iphone 17 pro avec {""}
                    <span className="text-white"> une puce A19 Pro </span> pour
                    des performances exceptionnelles ,
                    <span className="text-white">
                      un écran OLED ProMotion de 6,3 pouces
                    </span>
                    et un système de caméra amélioré, avec un zoom optique 5x.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Iphone 17 pro avec {""}
                    <span className="text-white">
                      une barre de caméra en aluminium {""}
                    </span>
                     et de nouvelles options de couleurs. <br />
                    Enfin, les fonctionnalités de connectivité, telles que le
                    <span className="text-white">
                      {""} Wi-Fi 7, et une batterie de plus grande capacité
                    </span>
                    sont aussi attendues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
