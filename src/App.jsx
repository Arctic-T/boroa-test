import Navbar from "./components/Navbar";
import TextFullWidth from "./components/TextFullWidth";
import Slider from "./components/Slider";
import Repository from "./components/Repository";
import News from "./components/News";
import Footer from "./components/Footer";

import "./styles/styles.scss";

function App() {
  return (
    <div className="root">
      <Navbar />
      <TextFullWidth />
      <Slider />
      <Repository />
      <News />
      <Footer />
    </div>
  );
}

export default App;
