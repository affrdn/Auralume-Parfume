import { useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    const offset = 80; // tinggi navbar
    const top =
      ref.current.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <Header
        onHomeClick={() => scrollTo(homeRef)}
        onProductsClick={() => scrollTo(productsRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      <main className="flex-grow space-y-1.5">
        <section ref={homeRef}>
          <Hero />
        </section>

        <section ref={productsRef}>
          <Products />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={contactRef}>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
