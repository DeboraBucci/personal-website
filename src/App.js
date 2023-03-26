import { useContext, useEffect } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sections from "./components/sections/Sections";

import ThemeContext from "./context/theme-context";

function App() {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    if (!localStorage.getItem("language"))
      localStorage.setItem("language", "english");
  }, []);

  return (
    <div className={themeCtx.theme}>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
