import Info from "./components/Info"
import Layout from "./components/Layout"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Social from "./components/Social"

export default function Home() {
  return (
    <main className="">
      <Layout>
       <Info/>
       <Projects/>
       <Contact/>
       <Social/>
      </Layout>
    </main>
  );
}
