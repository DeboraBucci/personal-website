import { useContext, useEffect } from "react";
import Aos from "aos";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sections from "./components/sections/Sections";

import ThemeContext from "./context/theme-context";

import "aos/dist/aos.css";

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    if (!localStorage.getItem("language"))
      localStorage.setItem("language", "english");
  }, []);

  return (
    <div  className={themeCtx.theme}>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
