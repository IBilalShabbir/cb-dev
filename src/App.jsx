import "./App.scss";
import Header from "./components/Header";
import Home from "./screen/Home";
import "custom-cursor-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
