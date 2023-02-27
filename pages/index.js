import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedServices from "@/components/home/FeaturedServices";
import Testimonials from "@/components/home/Testimonials";
import Motivation from "@/components/home/Motivation";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Triple E Solutions</title>
        <meta name="description" content="Triple E Solutions Contractors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="relative overflow-hidden">
          <Hero />
          <Services />
          {/* <FeaturedServices /> */}
          {/* <Testimonials /> */}
          <Motivation />
        </div>
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
