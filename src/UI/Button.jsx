import PropTypes from "prop-types";
import { motion } from "framer-motion";

Button.propTypes = {
    children: PropTypes.any.isRequired,
    onClick:PropTypes.any.isRequired,
    type:PropTypes.string
  };

function Button({children, onClick, type}) {
  return (
    <motion.button
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.5 },
    }}
    whileTap={{ scale: 0.9 }} onClick={onClick} type={type}   className="bg-[var(--light-green)] rounded-full w-fit py-1 text-black px-4  flex justify-between items-center ">{children}</motion.button>
  )
}

export default Button