import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { languages, frameworks, design, tools } from "../utils/icons-tech"
import ImgAbout from "../assets/img-about.jpg"

const AboutMe = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1099px)")
  return (
    <section id="sobre mi" className="pt-32 pb-20">
      <div className="grid grid-cols-12 auto-rows-auto gap-4 ">
        <motion.div
          className="col-start-2 col-end-12 lg:col-start-2 lg:col-end-7 row-start-1 row-end-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-dmmono text-5xl bg-gradient-greenblue bg-clip-text font-bold text-transparent">
            Sobre Mi
          </h2>
        </motion.div>

        <motion.div
          className="col-start-2 col-end-12 lg:col-start-2 lg:col-end-7 row-start-2 row-end-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-light font-dmmono md:text-xl text-lg">
            Desde que comencé a programar, supe que era una pasión que quería seguir cultivando.
            La resolución de problemas, la capacidad de aprendizaje rápido y la constante atención a las últimas tecnologías son algunas de las habilidades que he desarrollado gracias a mi pasión por la programación.
          </p>
          <br></br>
          <p className="text-light font-dmmono md:text-xl text-lg">
            Actualmente busco una oportunidad para desempeñarme profesionalmente y poner en práctica mis habilidades.
          </p>
          <br></br>
          <p className="text-light font-dmmono md:text-xl text-lg">Estas son algunas tecnologías con las que he estado trabajando últimamente:</p>
        </motion.div>
        <div className="col-start-2 col-end-12 lg:col-start-8 lg:col-end-12 row-start-3 row-end-4 lg:row-start-1 lg:row-end-3 flex justify-center ">
          <img className="rounded-lg object-cover lg:h-full mt-4 lg:mt-0" src={ImgAbout} alt="Image about" />
        </div>




        {/* S K I L L S */}
        <div className="mt-16 col-start-2 col-end-12 row-start-4 row-end-5 md:flex flex-wrap md:justify-between gap-16 xl:gap-32">
          <motion.div
            className="basis-1/4 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-dmmono text-light font-semibold text-5xl">01</p>
                <p className="font-dmmono text-light font-semibold text-3xl mt-3">
                  Lenguajes
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 rounded-md bg-gradient-one absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5 font-dmmono text-light">
              Lenguajes de programacion, de marcado, de diseño y de dominio específico.
            </p>
            <div className="flex justify-between mt-5">
              {languages.map(({ id, path }) =>
                <img
                  className="h-[40px]"
                  key={id}
                  src={path}
                />
              )}
            </div>
          </motion.div>

          <motion.div
            className="basis-1/4 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-dmmono text-light font-semibold text-5xl">02</p>
                <p className="font-dmmono text-light font-semibold text-3xl mt-3">
                  Frameworks
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 rounded-md bg-gradient-greenblue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5 font-dmmono text-light">
              Librerías y Frameworks.
            </p>
            <div className="flex justify-between mt-5">
              {frameworks.map(({ id, path }) =>
                <img
                  className="h-[40px]"
                  key={id}
                  src={path}
                />
              )}
            </div>
          </motion.div>

          <motion.div
            className="basis-1/4 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-dmmono text-light font-semibold text-5xl">03</p>
                <p className="font-dmmono text-light font-semibold text-3xl mt-3">
                  Herramientas
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 rounded-md bg-gradient-one absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5 font-dmmono text-light">
              Herramientas y Plataformas.
            </p>
            <div className="flex gap-5 justify-between mt-5">
              {tools.map(({ id, path }) =>
                <img
                  className="h-[40px]"
                  key={id}
                  src={path}
                />
              )}
            </div>
          </motion.div>

          <motion.div
            className="basis-1/4 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-dmmono text-light font-semibold text-5xl">04</p>
                <p className="font-dmmono text-light font-semibold text-3xl mt-3">
                  Design
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 rounded-md bg-gradient-one absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5 font-dmmono text-light">
              Manejo de apps de diseño para desarrolladores.
            </p>
            <div className="flex justify-between mt-5">
              {design.map(({ id, path }) =>
                <img
                  className="h-[40px]"
                  key={id}
                  src={path}
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>

    </section >
  )
}

export default AboutMe
