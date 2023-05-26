import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Media from "@/components/Media";
import Overview from "@/components/Overview";
import Testimonial from "@/components/Testimonial";
import React from "react";
import ClinicInfo from "@/components/ClinicInfo";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FooterResponsive from "@/components/FooterResponsive";

export default function page() {
  return (
    <div>
      <Navbar />

      <Banner />

      <Overview />

      <Testimonial />

      <Media />

      <ClinicInfo />

      <Blog />

      <Footer />

      <ContactUs />

      <FooterResponsive />
    </div>
  );
}
