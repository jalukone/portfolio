import { motion } from "framer-motion";
import { useState } from "react"
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar"
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {

  const [selectedPage, setSelectedPage] = useState("home")

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-dark">
      {/* N A V B A R */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto mm:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing />
        </motion.div>
      </div>

    </div>
  )
}


export default App
