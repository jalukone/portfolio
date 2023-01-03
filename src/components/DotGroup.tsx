
type DotGroupProps = {
  selectedPage: string
  setSelectedPage: Function
}

const DotGroup = ({ selectedPage, setSelectedPage }: DotGroupProps) => {
  const selectedStyles = `relative bg-gold before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <a
        href="#inicio"
        className={`${selectedPage === "inicio" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("inicio")}
      ></a>

      <a
        href="#sobre mi"
        className={`${selectedPage === "sobre mi" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("sobre mi")}
      ></a>

      <a
        href="#proyectos"
        className={`${selectedPage === "proyectos" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("proyectos")}
      ></a>

      {/* <a */}
      {/*   href="#testimonials" */}
      {/*   className={`${selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey" */}
      {/*     } w-3 h-3 rounded-full`} */}
      {/*   onClick={() => setSelectedPage("testimonials")} */}
      {/* ></a> */}

      <a
        href="#contactame"
        className={`${selectedPage === "contactame" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contactame")}
      ></a>
    </div>
  );
};

export default DotGroup;
