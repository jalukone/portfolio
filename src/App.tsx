import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* N A V B A R */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* L A N D I N G */}
      <div className="md:grid place-items-center w-full h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      {/* M Y  S K I L L S */}
      {/* <div className={`h-0.5 w-full bg-gradient-one`} /> */}
      <motion.div
        onViewportEnter={() => setSelectedPage("about me")}
      >
        <AboutMe />
      </motion.div>

    </div>
  )
}


export default App
