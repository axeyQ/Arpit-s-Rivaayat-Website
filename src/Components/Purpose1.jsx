import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card1 from "./Card1";
const Purpose1 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".purpose1-div",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".purpose1-div",
          start: "-20% center",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      ".purpose1-div h1",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".purpose1-div",
          start: "top center",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      ".purpose1-div .card1-div",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".purpose1-div",
          start: "10% center",
          end: "center center",
          stagger: 0.5,
        },
      }
    );
  });
  return (
    <section className='purpose1-div'>
      <h1>Amenities that we want to provide our customers with</h1>
      <Card1 title='lorem ipsum' />
      <Card1 title='lorem ipsum' />
      <Card1 title='lorem ipsum' />
      <Card1 title='lorem ipsum' />
      <Card1 title='lorem ipsum' />
    </section>
  );
};

export default Purpose1;
