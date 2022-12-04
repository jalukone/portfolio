
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
        href="#home"
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      ></a>

      <a
        href="#skills"
        className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      ></a>

      <a
        href="#projects"
        className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      ></a>

      {/* <a */}
      {/*   href="#testimonials" */}
      {/*   className={`${selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey" */}
      {/*     } w-3 h-3 rounded-full`} */}
      {/*   onClick={() => setSelectedPage("testimonials")} */}
      {/* ></a> */}

      <a
        href="#contact"
        className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      ></a>
    </div>
  );
};

export default DotGroup;
