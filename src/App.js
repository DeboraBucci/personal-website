import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
