import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  console.log("hello");
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
