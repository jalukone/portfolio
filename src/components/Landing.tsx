import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Jaluk from "../assets/profile.png"

const Landing = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

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
            className="rounded-full w-full max-w-[400px]  mm:max-w-[600px] z-10 "
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
          <h1 className="text-6xl font-dmmono z-10 text-center md:text-start">
            JalukOne
          </h1>
          <p className="mt-10 mb-7 text-sm text-center md:text-start text-light">
            Hello, I'm Gerson Jean Pierre and love Lorem ipsum dolor sit amet,
            officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
