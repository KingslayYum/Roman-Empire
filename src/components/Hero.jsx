import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full md:h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[600px] max-w-[67%] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5e4638]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>ROMAN <span className="text-[#c99475]">EMPIRE</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> A vast and influential civilization that existed from 27 BC to 476 AD in the West, <br className="sm:block hidden"/>and until 1453 AD in the East.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero