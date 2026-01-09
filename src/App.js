import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow space-y-2 ">
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
