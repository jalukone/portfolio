import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";


type LinkProps = {
  page: string,
  selectedPage: string,
  setSelectedPage: Function
}

type NavbarProp = {
  selectedPage: string,
  setSelectedPage: Function
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {

  const lowerCasePage = page.toLowerCase();
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-pink-dark" : ""}
          hover:text-pink-dark transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  )

};

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProp) => {

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");


  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h1 className="font-dmmono text-5xl">JalukOne</h1>

        {/* Desktop */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-dmmono text-lg font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
