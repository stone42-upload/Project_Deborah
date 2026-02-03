import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToBook from "./components/HowToBook";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <HowToBook />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
