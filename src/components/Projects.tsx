import { motion } from "framer-motion"
import Project1 from "../assets/project-1.png"

type ProjectProps = {
  title: string,
  description: string,
  image: string
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, description }: ProjectProps) => {

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className="absolute h-full w-full opacity-0 hover:opacity-80 transition duration-500
    bg-light z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue">
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="font-dmmono pt-32 pb-20">
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        <motion.div
          className="col-start-2 col-end-12 row-start-1 row-end-2 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-5xl bg-gradient-greenblue bg-clip-text font-bold text-transparent">
            <span className="bg-gradient-greenblue bg-[length:100%_2px] bg-no-repeat bg-bottom">
              Mis Proyectos
            </span>
          </h2>
          <p className="text-light md:text-xl text-lg mt-8 px-[5%] lg:px-[12%]">
            A continuación, presento algunos de mis proyectos recientes que muestran mis habilidades en el desarrollo Front-End y mi dedicación a seguir aprendiendo y desarrollándome en esta industria.
          </p>
        </motion.div>

        {/* L I S T  O F  P R O J E C T S */}
        <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 row-start-2 row-end-3 flex justify-center mt-12">
          <motion.div
            className="mm:grid mm:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ROW 1 */}
            <div
              className="flex justify-center text-center items-center p-10 bg-gradient-one text-2xl font-playfair font-semibold"
            >
              Mejorando UI
            </div>
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            {/* <div className="bg-gradient-greenblue"></div> */}
            {/* <div className="bg-gradient-one"></div> */}


            {/* ROW 2 */}
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />

            {/* <div className="bg-gradient-greenblue max-w-[400px] h-[400px]"></div>
            <div className="bg-gradient-one max-w-[400px] h-[400px]"></div>
            <div className="bg-gradient-greenblue max-w-[400px] h-[400px]"></div> */}

            {/* ROW 3 */}
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            <Project title="Proyecto 1" image={Project1} description="hola este es mi proyecto de portafolio" />
            {/* <div className="bg-gradient-one"></div>
            <div className="bg-gradient-greenblue"></div> */}
            <div className="flex justify-center text-center items-center p-10 bg-gradient-greenblue text-2xl font-playfair font-semibold"
            >
              Usando las mejores tecnologias
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Projects

