import React from "react";
import { NavbarWithMegaMenu } from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Cover from "./components/cover";
import Team from "./components/team";
import Contact from "./components/contact";
import { FooterWithSitemap } from "./components/footer";
import Patners from "./components/patners";
import Testomonial from "./components/testomonial";
import Message from "./components/ceo";

export default function App() {

  Aos.init({ duration: 1000 });

  return (
    <div className="flex flex-col h-screen">
      <NavbarWithMegaMenu />
      <div data-aos="fade-up" data-aos-duration="1000">
        <Cover />
      </div>
      <div data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
        <Team />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Contact />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Patners />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Testomonial />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Message />
      </div>
      <FooterWithSitemap />
    </div>
  );
}