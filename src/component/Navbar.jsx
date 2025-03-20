import { useEffect } from "react";
import ToggleIcon from "../UI/ToggleIcon";
import { useProvider } from "./PostProvider";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";
import { motion } from "motion/react"
import ReactTypingEffect from 'react-typing-effect';




function Navbar() {
  const { responsive, dispatch, section1, section2, section3, toggle } = useProvider();
  const location = useLocation();
  const listItem = [
    {
      id: 1,
      name: "Work",
      section: section1
    },
    {
      id: 2,
      name: "About",
      section: section2
    },
    {
      id: 3,
      name: "Contact",
      section: section3
    },
  ]

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
    dispatch({ type: "toggle", payload: false })
  };

  useEffect(() => {
    const updateResponsiveState = () => {
      dispatch({ type: "responsive", payload: window.innerWidth < 1141 });
    };

    updateResponsiveState();
    window.addEventListener("resize", updateResponsiveState);
    return () => window.removeEventListener("resize", updateResponsiveState);
  }, [dispatch]);

  const renderMobileMenu = () => (
    toggle ? (
      location.pathname === "/about-me" ? (
        <ul className="flex flex-col text-center gap-10 py-3 px-2 text-sm text-[var(--light-gray)] cursor-pointer bg-black h-auto w-full fixed top-0 left-0 underline">
          <Button onClick={() => dispatch({ type: "toggle", payload: false })}>Close</Button>
          <Link to="/" className="text-sm text-[var(--light-gray)]" onClick={() => dispatch({ type: "toggle", payload: false })}>Back Home</Link>
        </ul>
      ) : (
        <ul className="flex flex-col text-center gap-10 py-3 px-2 text-sm text-[var(--light-gray)] cursor-pointer bg-black h-auto w-full fixed top-0 left-0 underline">
          <Button onClick={() => dispatch({ type: "toggle", payload: false })}>Close</Button>
          {listItem.map((item) =>
            <li key={item.id} onClick={() => scrollToSection(item.section)}>{item.name}</li>
          )}
        </ul>
      )
    ) : (
      <ToggleIcon onClick={() => dispatch({ type: "toggle", payload: true })} />
    )
  );

  const renderDesktopMenu = () => (
    location.pathname === "/about-me" ? (
      <Link to="/" className="text-sm text-[var(--light-gray)]">Back Home</Link>
    ) : (
      <ul className="flex gap-4 text-sm text-white cursor-pointer">
        {listItem.map((item) =>
          <motion.li key={item.id} onClick={() => scrollToSection(item.section)}
            animate={{
              x: 20,
              opacity: 1,
              transition: {
                default: { type: "spring" },
                opacity: { ease: "linear" }
              },
              color: 'var(--light-gray)'
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >{item.name}</motion.li>
        )}
      </ul>
    )
  );

  return (
    <nav className="flex flex-row justify-between items-center px-20 h-14 w-full fixed bg-black top-0">
      <ReactTypingEffect
        text={["Dev. kingsley Effiong 🌈", "FullStack developer 💼"]}
        className={`font-bebas ${responsive ? 'text-[1.4rem]' : 'text-[2rem]'} leading-[3.5rem]`}
        speed={100} // Typing speed
        eraseSpeed={50} // Erase speed
        typingDelay={500} // Delay before typing starts
        eraseDelay={1000} // Delay before erasing
      />
      {responsive ? renderMobileMenu() : renderDesktopMenu()}
    </nav>
  );
}

export default Navbar;