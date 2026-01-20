import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/ABOUT.JSX";
import Art from "./components/Art";



gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Cocktails/>
     <About/>
     <Art/>
    </>
  )
}

export default App;