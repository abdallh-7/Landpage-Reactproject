import { useState } from "react"
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <>
    <div className={darkMode? "dark" :""}>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
    <Hero></Hero>
    <Cards></Cards>
    <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App
