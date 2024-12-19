import Form from "../UI/Form"
import { useProvider } from "./PostProvider";
import { motion } from "framer-motion";
import image from "../assets/images/Kingsley-Effiong-FlowCV-Resume-20241219 (10).pdf"

function Contact() {
  const {responsive, section3} = useProvider();
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

console.log(image)
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
    <motion.section ref={section3} className={`w-full h-1/3 flex ${responsive ? 'flex-col' : 'flex-row justify-around items-center'}  py-6 px-2 overflow-y-hidden overflow-x-hidden`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is in view
    variants={containerVariants} // Container animation
    >
           <motion.div className={`${responsive ? 'h-auto w-full' : 'h-[611px] w-[600px]'} `}
           variants={itemVariants} // Each item has its own animation
           >
           <h1 className="font-bebas text-[4rem] leading-[3.5rem] my-9">Lets connect</h1>
           <div className="my-3">
            <p>Say hello at @kingsleyeffiong642@gmail.com</p>
            <p>For more information, here is my <a href={image} download="Kingsley-Effiong-Resume.pdf" className="underline">Resume</a>.</p>
           </div>
            <div className="w-[200px] justify-around items-center flex mt-9">
              <a href="https://www.linkedin.com/in/kingsley-effiong-a84641253/" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z" fill="#D3E97A"/>
            <path d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z" fill="#D3E97A"/>
            </svg>
              </a>
              <a href="https://github.com/KingsleyEffiong" target="_blank">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.0347 2.66669C8.68933 2.66669 2.73599 8.62002 2.73599 15.9654C2.73599 21.84 6.54533 26.8254 11.8307 28.5854C12.496 28.7054 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4854 8.23999 23.8987 8.23999 23.8987C7.63733 22.3627 6.76399 21.9534 6.76399 21.9534C5.55733 21.128 6.85599 21.1467 6.85599 21.1467C8.19199 21.24 8.89199 22.5174 8.89199 22.5174C10.0787 24.5494 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5094 7.55199 20.368 7.55199 15.2707C7.55199 13.8214 8.07066 12.632 8.91733 11.704C8.78266 11.3667 8.32266 10.0134 9.04933 8.18402C9.04933 8.18402 10.1653 7.82535 12.7053 9.54535C13.7901 9.25025 14.9091 9.09961 16.0333 9.09735C17.1576 9.09918 18.2766 9.24982 19.3613 9.54535C21.9027 7.82402 23.0173 8.18402 23.0173 8.18402C23.744 10.0134 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3814 21.408 21.504 18.4453 21.8334C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0734 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7134 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9654C29.3333 8.62002 23.38 2.66669 16.0347 2.66669Z" fill="#D3E97A"/>
        </svg>
              </a>
            <a href="https://x.com/js___king" target="_blank">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.0402 4.66669H28.3133L18.9799 14.2874L30 27.3334H21.3414L14.5944 19.4252L6.83534 27.3334H2.56225L12.5703 17.0578L2 4.66669H10.8835L17.012 11.92L24.0402 4.66669ZM22.5221 25.0163H24.8835L9.59036 6.83261H7.00402L22.5221 25.0163Z" fill="#D3E97A"/>
        </svg>
            </a>
            </div>
           </motion.div>
           <Form />
        </motion.section>
  )
}

export default Contact