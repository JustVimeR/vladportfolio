import Navigation from "./components/Navigation"
import Info from "./components/Info"
import Layout from "./components/Layout"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="">
      <Layout>
       <Info/>
       <Projects/>
       <Contact/>
      </Layout>
    </main>
  );
}
