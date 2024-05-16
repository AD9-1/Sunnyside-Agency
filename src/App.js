import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "../src/styles/global.scss";
import Banner from "./components/Banner/Banner";
import Feedback from "./components/Feedback/Feedback";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        {" "}
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <Feedback />
      <Gallery/>
    </BrowserRouter>
  );
}
export default App;
