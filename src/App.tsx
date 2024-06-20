import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Meetings from "./components/Meetings";
import Layout from "./components/Layout";

export default function App() {
  return (
      <div className={"dark:bg-slate-700 dark:text-white"}>
            <Layout>
                <Hero/>
                <About/>
                <Services/>
                <Meetings/>
                <Contact/>
                <Footer/>
            </Layout>
      </div>
  )
}
