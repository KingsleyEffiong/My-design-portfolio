import { EXPERIENCE } from "../../EXPERIENCES"
import { useProvider } from "../PostProvider";
import { motion } from "framer-motion";

function Experiences() {
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
    <motion.section id="#section--3" className={`flex ${responsive ? 'flex-col' : 'flex-row'} justify-around py-24 px-3 border-b border-b-gray-200`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants}
    >
    <motion.h1 className="font-bebas text-[4rem] leading-[3.5rem]" variants={itemVariants}>My Experience</motion.h1>
    <motion.div className="flex flex-col" initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants}>
{   EXPERIENCE.map((exp) => (
    <motion.div className={`flex flex-col gap-5 ${responsive ? 'w-[350px]' : 'w-[450px]'} my-5 `} key={exp.id} variants={itemVariants}>
       <div className="flex justify-between items-center">
        <h2>{exp.type}</h2>
        <p className="text-sm text-[var(--light-gray)]">{exp.date}</p>
       </div>
       <p className="-mt-5 text-[#D3E97A]">{exp.company}</p>
       <h2 className="text-[var(--light-gray)]">{exp.about}</h2>
    </motion.div>
))}
    </motion.div>
</motion.section>
  )
}

export default Experiences