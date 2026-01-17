import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
  return (
    <>
     <h1>Hello, Gsap!</h1>
    </>
  )
}

export default App;