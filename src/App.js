import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import About from "./Pages/Home/About/About";
import Community from "./Pages/Home/Community/Community";
import Hero from "./Pages/Home/Hero/Hero";
import Nft from "./Pages/Home/Nft/Nft";
import Price from "./Pages/Home/Price/Price";
import Roadmap from "./Pages/Home/Roadmap/Roadmap";
import Slider from "./Pages/Home/Slider/Slider";
import Team from "./Pages/Home/Team/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Price />
      <Slider />
      <Roadmap />
      <Nft />
      <Team />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
