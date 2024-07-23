import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "../src/styles/global.scss";
import Banner from "./components/Banner/Banner";
import feedback from "./components/feedback/feedback";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        {" "}
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <feedback />
      <Gallery/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
