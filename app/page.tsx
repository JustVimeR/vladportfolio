import Navigation from "./components/Navigation"
import Info from "./components/Info"
import Layout from "./components/Layout"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="">
      <Layout>
       <Info></Info>
       <Projects/>
      </Layout>
    </main>
  );
}
