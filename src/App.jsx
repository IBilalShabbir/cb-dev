import "./App.scss";
import Header from "./components/Header";
import Banner from "./screen/Banner";
import Home from "./screen/Home";

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Home />
    </div>
  );
}

export default App;
