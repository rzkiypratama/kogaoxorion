import FullScreenNav from "@/components/ResponsiveNavbar";
import Header from "@/components/Header";
import Hero from "@/components/Banner";
import Media from "@/components/Media";
import Overview from "@/components/Overview";
import Testimonial from "@/components/Testimonial";
import React from "react";
import ClinicInfo from "@/components/ClinicInfo";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <FullScreenNav />

      <Header />

      <Hero />

      <Overview />

      <Testimonial />

      <Media />

      <ClinicInfo/>

      <Blog/>

      <ContactUs/>

      <Footer/>
    </>
  );
}
