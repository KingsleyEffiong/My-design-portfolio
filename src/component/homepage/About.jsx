import { Link } from "react-router-dom"
import AboutMeLink from "../../UI/AboutMeLink"
import { useProvider } from "../PostProvider";
import { motion } from "framer-motion";
import image2 from "../../assets/images/profiileimae2.jpg"

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1, // Animates child items with a delay between each
                duration: 0.6, // Duration of the animation (in seconds)
                ease: "easeOut", // Type of easing for the animation
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, x: 100 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.6, // Duration of the animation (in seconds)
            ease: "easeOut", // Type of easing for the animation
        },
    },
};
  const {responsive, section2} = useProvider();
  return (
    <motion.section ref={section2} className={`w-full h-1/3 ${!responsive ? 'py-44' : 'py-5'}  px-7 border-b border-b-gray-200`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants} // Container animation
    >
        <motion.div className={`flex ${responsive ? 'flex-col' : 'justify-around items-center'} my-5`}
          variants={itemVariants} // Each item has its own animation
        >
            <h1 className="font-bebas text-[4rem] leading-[3.5rem]">{!responsive && 'About Me'}</h1>
            <motion.div className="" variants={itemVariants}>
                <h2 className="text-[var(--light-gray)]">I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h2>
            <span className="text-[var(--light-gray)]">Here are some of the selected projects that showcase my passion for front-end development.</span>
            <Link to="/about-me" className="py-10">
                <AboutMeLink />
            </Link>
            </motion.div>
        </motion.div>
        {responsive && 
        <motion.img
        src={image2}
        alt=""
        className={`${responsive === true ? 'w-full h-[auto]' : ''} rounded-3xl`}
        whileHover={{
          scale: 1.3,
          transition: {
            duration: 0.6, // Duration of the animation (in seconds)
            ease: "easeOut", // Type of easing for the animation
          },
        }}></motion.img>}
    </motion.section>
  )
}

export default About