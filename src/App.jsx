import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import { PostProvider } from "./component/PostProvider";


function App() {
  return (
    <div className="bg-black w-full h-full text-white">
      <PostProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      </BrowserRouter>
      <Contact />
      </PostProvider>
    </div>
  )
}

export default App
