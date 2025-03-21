import Button from "../../UI/Button";
import image2 from "../../assets/images/profiileimae2.jpg"
import image1 from "../../assets/images/IMG_20241207_194233.jpg"
import { useProvider } from "../PostProvider";
import { motion } from "framer-motion";
import image from "../../assets/images/Kingsley-Effiong-FlowCV-Resume-20241219 (10).pdf"
import { Link } from "react-router-dom";

function Hero() {
  const { responsive } = useProvider();
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
    <motion.section id="#section--1" className="px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
      variants={containerVariants}
    >
      <motion.div className={`flex flex-row justify-around py-20 ${responsive === true ? 'flex-col items-start gap-10' : 'flex-row'} `}
        variants={itemVariants}
      >
        <h1 className="font-bebas text-[4rem] leading-[3.5rem]">ABOUT ME</h1>
        <div className="flex flex-col gap-5 w-[350px]">
          <h2>I am a full-stack developer based in Nigeria. </h2>
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
          <div className="flex justify-around items-center w-[350px]">
            <Button
              onClick={() => { }}
            >
              <a href={image} download="Kingsley-Effiong-Resume.pdf">Download Resume</a>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="5" fill="#0A0A0A" />
              </svg>
            </Button>
            <Link to='https://www.linkedin.com/in/kingsley-effiong-a84641253/'>
              <motion.svg width="54" height="54" whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }} viewBox="0 0 54 54" style={{ cursor: 'pointer' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="54" rx="27" fill="#222222" />
                <path d="M19.3983 21.7968C20.7073 21.7968 21.7686 20.7356 21.7686 19.4265C21.7686 18.1174 20.7073 17.0562 19.3983 17.0562C18.0892 17.0562 17.0279 18.1174 17.0279 19.4265C17.0279 20.7356 18.0892 21.7968 19.3983 21.7968Z" fill="#D3E97A" />
                <path d="M24.0068 23.5928V36.7434H28.0898V30.2402C28.0898 28.5242 28.4127 26.8623 30.5403 26.8623C32.6388 26.8623 32.6648 28.8242 32.6648 30.3485V36.7445H36.75V29.5327C36.75 25.9902 35.9873 23.2678 31.8468 23.2678C29.8589 23.2678 28.5264 24.3587 27.9815 25.3912H27.9263V23.5928H24.0068ZM17.3529 23.5928H21.4425V36.7434H17.3529V23.5928Z" fill="#D3E97A" />
              </motion.svg>
            </Link>
            <Link to='https://github.com/KingsleyEffiong'>
              <motion.svg width="54" height="54" whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }} viewBox="0 0 54 54" style={{ cursor: 'pointer' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="54" rx="27" fill="#222222" />
                <path fillRule="evenodd" clipRule="evenodd" d="M27.0282 16.1667C21.0601 16.1667 16.223 21.0038 16.223 26.9719C16.223 31.7451 19.3181 35.7957 23.6124 37.2257C24.153 37.3232 24.348 36.9906 24.348 36.7046C24.348 36.4478 24.3393 35.7675 24.3361 34.8673C21.3298 35.5194 20.695 33.4178 20.695 33.4178C20.2053 32.1698 19.4957 31.8372 19.4957 31.8372C18.5153 31.1666 19.5705 31.1818 19.5705 31.1818C20.656 31.2576 21.2248 32.2954 21.2248 32.2954C22.1889 33.9464 23.7554 33.4698 24.3686 33.1935C24.4672 32.4948 24.7488 32.0181 25.0565 31.7483C22.658 31.4764 20.136 30.5491 20.136 26.4075C20.136 25.2299 20.5574 24.2636 21.2453 23.5096C21.1359 23.2355 20.7622 22.1359 21.3526 20.6496C21.3526 20.6496 22.2593 20.3582 24.3231 21.7557C25.2045 21.5159 26.1137 21.3935 27.0271 21.3917C27.9405 21.3931 28.8498 21.5155 29.7311 21.7557C31.7959 20.3571 32.7016 20.6496 32.7016 20.6496C33.292 22.1359 32.9215 23.2355 32.8088 23.5096C33.5022 24.2636 33.9182 25.2288 33.9182 26.4075C33.9182 30.5599 31.394 31.4721 28.9868 31.7397C29.3714 32.0733 29.7181 32.732 29.7181 33.7395C29.7181 35.1847 29.7051 36.3503 29.7051 36.7046C29.7051 36.9938 29.8979 37.3297 30.4493 37.2235C34.7415 35.7913 37.8333 31.744 37.8333 26.9719C37.8333 21.0038 32.9963 16.1667 27.0282 16.1667Z" fill="#D3E97A" />
              </motion.svg>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="w-full h-[25%] overflow-hidden mx-auto flex justify-around">
        <motion.img src={image2} className="w-[40%] rounded-xl mx-auto cursor-pointer" alt="" whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.6, // Duration of the animation (in seconds)
            ease: "easeOut", // Type of easing for the animation
          },
        }}></motion.img>
        <motion.img src={image1} className="w-[40%] rounded-xl mx-auto cursor-pointer" alt="" whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.6, // Duration of the animation (in seconds)
            ease: "easeOut", // Type of easing for the animation
          },
        }}></motion.img>
      </div>
    </motion.section>
  )
}

export default Hero