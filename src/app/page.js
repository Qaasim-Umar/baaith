import Hero from "@/sections/Home/Hero";
import Facilities from "@/sections/Home/Facilities";
import Image from "next/image";
import Navbar from "@/sections/Global/Navbar";
import ChooseUs from "@/sections/Home/ChooseUs";
import Featured from "@/sections/Home/Featured";
import Testimonial from "@/sections/Home/Testimonial";
import Faq from "@/sections/Home/Faq";
import Footer from "@/sections/Global/Footer";
import Started from "@/sections/Home/Started";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Facilities />
      <ChooseUs />
      <Featured />
      <Testimonial />
      <Faq/>
      <Started/>
      <Footer/>
    </main>
  );
}
