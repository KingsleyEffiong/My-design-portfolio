import Button from './Button'
import { motion } from "framer-motion";
import { MdError } from "react-icons/md";
import PropTypes from "prop-types";

SuccessfulModal.propTypes = {
    setComplete: PropTypes.bool,
  };
function SuccessfulModal({setComplete}) {

  return (
<motion.div className='fixed top-0 left-0 inset-0 flex  z-10 items-center m-auto justify-center flex-col translate-x-40 bg-white w-[150px] md:w-[250px] h-[160px] text-black px-3  rounded-xl text-center' animate={{
    scale:1.4,
    transition:{
        // duration: 0.4, // Duration of the animation (in seconds)
        ease: "easeOut", // Type of easing for the animation
    }
}}>
<MdError className='bg-[var(--light-green)] rounded-full text-3xl'/>
  <div className='flex flex-col items-center justify-center'>
    <h1>Error!!!!</h1>
    <h2 className='my-4'>Please fill all the input field</h2>
    <Button onClick={() => setComplete(null)}>Ok</Button>
  </div>
</motion.div>

  
  )
}

export default SuccessfulModal