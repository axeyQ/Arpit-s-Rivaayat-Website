import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "../assets/logo.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".navbar-div", {
      marginTop: 0,
      background: "black",
      borderWidth: 0,
      scrollTrigger: {
        trigger: ".hero-3-img",
        start: "top center",
        bottom: "-10% center",
        scrub: true,
      },
    });
  });
  return (
    <div className='navbar-div'>
      <img src={Logo} alt='logo' className='navbar-logo' />
      <div className='navbar-links'>
        <NavLink to='/' className={"nav-link"}>
          Home
        </NavLink>
        <NavLink to='/about' className={"nav-link"}>
          About
        </NavLink>
        <NavLink to='/contact' className={"nav-link"}>
          Contact
        </NavLink>
        <NavLink to='/blog' className={"nav-link"}>
          Blog
        </NavLink>
        <NavLink to='/' className={"nav-link"}>
          Careers
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
