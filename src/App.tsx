import Footer from "./components/grid/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Meetings from "./components/Meetings";
import Layout from "./components/grid/Layout";
import History from "./components/history";

export default function App() {
  return (
      <div className={"dark:bg-slate-700 dark:text-white"}>
            <Layout>
                <Hero/>
                <About/>
                <History/>
                <Services/>
                <Meetings/>
                <Footer/>
            </Layout>
      </div>
  )
}
