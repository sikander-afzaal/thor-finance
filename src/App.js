import "./App.css";
import Header from "./Layout/Header/Header";
import Hero from "./Pages/Home/Hero/Hero";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
