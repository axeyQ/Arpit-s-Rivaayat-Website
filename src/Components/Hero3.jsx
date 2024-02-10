import gsap from "gsap";
import IMG from "../assets/logo.webp";
import Button from "./Shared/Button";
import { useGSAP } from "@gsap/react";
const Hero3 = () => {
  useGSAP(() => {
    var heroTl = gsap.timeline();
    heroTl
      .from(".hero-3-img", {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
      })
      .fromTo(
        ".hero-btn",
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, duration: 1, ease: "easeIn" }
      );
  });
  return (
    <>
      <div className='hero-3-div'>
        <img src={IMG} alt='companyLogo' className='hero-3-img' />
        <Button />
      </div>
    </>
  );
};

export default Hero3;
