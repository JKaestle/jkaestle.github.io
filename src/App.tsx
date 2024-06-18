import Footer from "./components/footer";
import HeaderNew from "./components/header_new";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";

export default function App() {
  return (
      <div className={"dark:bg-black dark:text-white"}>
          <HeaderNew/>
          <Hero/>
          <About/>
          <Services/>
          <Contact/>
          <Footer/>
      </div>
  )
}
