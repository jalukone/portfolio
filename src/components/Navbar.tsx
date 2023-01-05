import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import Burger from "./Burger";
import LinkAnchor from "./LinkAnchor";
import Logo from "../assets/logo.png"

type NavbarProps = {
  isTopOfPage: boolean,
  selectedPage: string,
  setSelectedPage: Function
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: NavbarProps) => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 900px)");
  const navbarBackground = isTopOfPage ? "" : "bg-dark";


  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <a
          href="#inicio"
        >
          <img src={Logo} alt="Logo" className="md:h-[60px] h-[45px]" />
        </a>
        {/* D E S K T O P */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-dmmono text-lg ">
            <LinkAnchor
              page="Inicio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Sobre Mi"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Proyectos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <LinkAnchor */}
            {/*   page="Testimonials" */}
            {/*   selectedPage={selectedPage} */}
            {/*   setSelectedPage={setSelectedPage} */}
            {/* /> */}
            <LinkAnchor
              page="Contactame"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (

          <Burger onClick={() => setIsMenuToggled(!isMenuToggled)} />

        )}

        {/* M O B I L E */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-dark w-[300px]">
            {/* C L O S E */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" stroke="#fff" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* M E N U   I T E M S */}
            <div className="flex flex-col gap-10 ml-[33%] text-xl text-light font-dmmono">
              <LinkAnchor
                page="Inicio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkAnchor
                page="Sobre Mi"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkAnchor
                page="Proyectos"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <LinkAnchor */}
              {/*   page="Testimonials" */}
              {/*   selectedPage={selectedPage} */}
              {/*   setSelectedPage={setSelectedPage} */}
              {/* /> */}
              <LinkAnchor
                page="Contactame"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}


      </div>
    </nav>
  )
}

export default Navbar
