import { useState } from "react";
import { useProvider } from "../component/PostProvider";
import Button from "./Button"
import { motion } from "framer-motion";
import SuccessfulModal from "./SuccessfulModal";
import Overlay from "./Overlay";

function Form() {
  const {responsive} = useProvider();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [complete, setComplete] = useState(null);

  function handleForm(){
    if(!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setComplete('Not successful');
      return
    }
  }
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
    <motion.form action="https://formspree.io/f/meoqwblr"
    method="POST" className={`${responsive ? 'w-full py-9' : 'w-[500px]'}  h-[611px] flex flex-col gap-8`}
    variants={itemVariants} // Each item has its own animation
    >
        <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" placeholder="Joe smith" className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=""  className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id=""  className="h-[51px] w-full bg-[var(--brown)] rounded-full px-5 outline-none" value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </div>
               <div className="w-full h-auto flex flex-col gap-2">
            <label htmlFor="name">Message</label>
            <textarea type="text" name="message" id="" className="h-[156px] w-full bg-[var(--brown)] rounded-md px-5 py-2 outline-none" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <Button
  type={complete === null ? "submit" : "button"} // Conditional type attribute
  onClick={handleForm}
  className="your-button-styles"
>
  Submit
</Button>
{complete !== null  && 
<div className="">
<SuccessfulModal setComplete={setComplete} />  
<Overlay />
</div>
}
    </motion.form>
  )
}

export default Form