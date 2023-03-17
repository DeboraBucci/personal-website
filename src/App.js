import { useContext, useEffect } from "react";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sections from "./components/sections/Sections";

import ThemeContext from "./context/theme-context";

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className={themeCtx.theme}>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
