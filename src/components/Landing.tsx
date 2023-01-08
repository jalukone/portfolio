import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Jaluk from "../assets/profile.png"
import SocialMediaIcons from "./SocialMediaIcons";

type LandingProps = {
  setSelectedPage: Function
}

const Landing = ({ setSelectedPage }: LandingProps) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1099px)");

  return (
    <section id="inicio" className="font-dmmono flex md:flex-row flex-col justify-center md:justify-between md:items-center h-auto md:h-screen gap-16 py-10 xl:mx-0 md:mx-[10%] ">

      {/* I M A G E */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-12 before:-left-12
            before:rounded-full before:w-full before:h-full before:border-2 before:border-gold before:z-[-1]"
          >
            <img
              className="rounded-full w-[400px] md:max-w-[600px] z-10 "
              alt="profile"
              src={Jaluk}
            />
          </div>
        ) : (
          <img
            className="rounded-full w-[360px] xs:w-[450px] z-10 "
            alt="profile"
            src={Jaluk}
          />
        )}
      </div>
      {/* M A I N */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <h1 className="text-6xl bg-gradient-greenblue bg-clip-text text-transparent 
            z-10 text-center md:text-start"
          >
            JalukOne
          </h1>
          <p className="mt-10 mb-7 text-lg text-center md:text-start text-light 
            px-[5%] ss:px-[10%] sm:px-[15%] md:px-0"
          >
            Hola 👋, me llamo Gerson Jean Pierre. Me encanta la programación y aprender
            constantemente.👨‍💻🚀
          </p>
        </motion.div>

        {/* B U T T O N S  C O N T A C T */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <a
            className="bg-gradient-one text-dark rounded-tl-xl rounded-bl-xl py-3 px-7 font-semibold z-10 cursor-pointer"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contactame
          </a>
          <a
            className="rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none bg-gradient-one py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <span
              className="bg-dark text-light w-full h-full rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none flex items-center justify-center px-8"
            >Empecemos</span>
          </a>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>

      </div>
    </section>
  )
}

export default Landing
