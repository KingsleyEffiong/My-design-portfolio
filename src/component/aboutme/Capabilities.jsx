import { useProvider } from "../PostProvider";
import { motion } from "framer-motion";


const SKILLACQUIRED = [
  {
    id:1,
    skill:"HTML"
  },
  {
    id:2,
    skill:"CSS"
  },
  {
    id:3,
    skill:"JAVASCRIPT"
  },
  {
    id:4,
    skill:"TYPESCRIPT"
  },
  {
    id:5,
    skill:"REACT"
  },
  {
    id:6,
    skill:"REACT NATIVE"
  },
  {
    id:7,
    skill:"TAILWIND CSS"
  },
  {
    id:8,
    skill:"SOLIDITY"
  },
  {
    id:9,
    skill:"RESTFUL API"
  },
  {
    id:9,
    skill:"ASSESSBILITY & DEBUGGING"
  },
  {
    id:9,
    skill:"CODE MAINTAINANCE"
  },
  {
    id:9,
    skill:"FIGMA"
  },
]
function Capabilities() {
  const {responsive} = useProvider();
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
  return (
    <motion.section id="#section--2" className={`flex ${responsive ? 'flex-col' : 'flex-row'} justify-around py-24  border-b border-b-gray-200 px-2`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants}
    >
        <motion.h1 className="font-bebas text-[4rem] leading-[3.5rem]" variants={itemVariants}>My Capabilities</motion.h1>
        <motion.div className="flex flex-col gap-5 w-[350px] "  
        initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants}>
            <motion.p className="text-xs text-[var(--light-gray)]" variants={itemVariants}>I am always looking to add more skills as I advance in the tech industry. Here is my stack</motion.p>
            <motion.ul className="flex flex-row w-full gap-3 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
              variants={containerVariants}
            >
              {SKILLACQUIRED.map((skill) => (
                <motion.li className="bg-transparent border rounded-full w-fit px-5 py-1 text-center" key={skill.id} variants={itemVariants}>{skill.skill}</motion.li>
              ))}
            </motion.ul>
        </motion.div>
    </motion.section>
  )
}

export default Capabilities