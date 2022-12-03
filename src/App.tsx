import { useState } from "react"
import Navbar from "./components/Navbar"
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {

  const [selectedPage, setSelectedPage] = useState("home")

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="bg-dark">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}


export default App
