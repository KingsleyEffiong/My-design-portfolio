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
  const { responsive, section2 } = useProvider();
  return (
    <motion.section ref={section2} className={`w-full h-1/3 ${!responsive ? 'py-44' : 'py-5'}  px-7 border-b border-b-gray-200`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is in view
      variants={containerVariants} // Container animation
    >
      <motion.div className={`flex ${responsive ? 'flex-col' : 'justify-between items-center'} my-5`}
        variants={itemVariants} // Each item has its own animation
      >
        <h1 className="font-bebas text-[4rem] leading-[3.5rem]">{!responsive && 'About Me'}</h1>
        <motion.div className="" variants={itemVariants}>
          <p className="text-[var(--light-gray)]">
            I am an <span className="text-[#D3E97A] font-semibold">Innovative Full-Stack Developer</span>,
            passionate about building seamless web applications with powerful frontend and backend technologies.
            <br />
            <br />
            💻 Frontend Tech Stack:
            <span className="text-[#D3E97A] font-medium">
              JavaScript, React, Next.js, Vite, Tailwind CSS, HTML5.
            </span>
            <br />
            🚀 Backend Tech Stack:
            <span className="text-[#D3E97A] font-medium">
              Node.js, Express.js, MongoDB, Firebase, Google Auth, API Development.
            </span>
            <br />
            🛠 Additional Expertise:
            <span className="text-[#D3E97A] font-medium">
              Web Scraping, Authentication, REST APIs, Firestore, Cloud Functions.
            </span>
          </p>
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