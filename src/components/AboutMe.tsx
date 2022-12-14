import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const AboutMe = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1099px)")
  return (
    <section id="about me" className="pt-10 pb-20 mt-16 h-full md:h-[800px]">
      <div className="grid grid-cols-12 grid-row-4 gap-4 ">
        <div className="col-start-2 col-end-6 row-start-1 row-end-2">
          <h2 className="font-dmmono text-5xl bg-gradient-greenblue bg-clip-text font-bold text-transparent">
            About Me
          </h2>
        </div>
        <div className="col-start-2 col-end-6 row-start-2 row-end-3">
          <p className="text-light font-dmmono">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
            st culpa et culpa duis.
          </p>
        </div>
        <div className="mt-20 col-start-2 col-end-12 row-start-3 row-end-5 flex justify-between items-center">
          <motion.div
            className="md:w-1/3 mt-10"
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
                  Experience
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 rounded-md bg-gradient-greenblue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5 font-dmmono text-light">
              A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
              morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
              odio sit sagittis,
            </p>
          </motion.div>

          <div className="bg-gradient-one w-[400px] h-[200px]">

          </div>
          <div className="bg-gradient-one w-[400px] h-[200px]">

          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutMe
