import "./App.css";
import Header from "./Layout/Header/Header";
import About from "./Pages/Home/About/About";
import Hero from "./Pages/Home/Hero/Hero";
import Price from "./Pages/Home/Price/Price";
import Roadmap from "./Pages/Home/Roadmap/Roadmap";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Price />
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
