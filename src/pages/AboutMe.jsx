import Capabilities from "../component/aboutme/Capabilities"
import Experiences from "../component/aboutme/Experiences"
import Hero from "../component/aboutme/Hero"

function AboutMe() {
  return (
    <div className="bg-black w-full h-full text-white">
        <Hero />
        <Capabilities />
        <Experiences />
    </div>
  )
}

export default AboutMe