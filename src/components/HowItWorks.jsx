import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
    const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "Power2.inOut",
    });
    animateWithGsap('.g_fadeIn',{
        opacity:1,
        y:0,
        duration:1,
        ease:'power2.inOut'
    })
  },[]);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro processeur
            <br />
            Pour des jeux plus fluide
          </h2>
          <p className="hiw-subtitle">
            C'est la première puce mobile gravée en 3 nanomètres, offrant des
            performances nettement améliorées
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef} >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold mt-3 text-center">Honkai: Star Rail</p>
          <div className="hiw-text-container">
                <div className="flex flex-1 flex-justify-center">
                  <p className="hiw-text g_fadeIn  mb-5">
                    Le processeur A17 Pro est une puce 
                    <span className="text-white"> conçue par Apple pour ses derniers téléphones </span> 
                    <br />C'est la toute première puce de smartphone construite en 3 nanomètres {""}
                    <span className="text-white">
                      en 3 nanomètres {""}
                    </span>
                    ce qui permet de loger plus de transistors et d'obtenir de meilleures performances.
                  </p>
                </div>
                
                <div className="flex-1 flex justify-center flex-col g_fadeIn">
                    <p className="hiw-text">Nouveau</p>
                    <p className="hiw-bigtext">Pro-Class GPU</p>
                    <p className="hiw-text">Avec 6 coeurs</p>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
