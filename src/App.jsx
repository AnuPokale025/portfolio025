import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ResumePreviewButton from "./components/ResumePreviewButton";
import SkillsExperience from "./components/SkillsExperience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsExperience />
      <Project />
      <Contact />
      <ResumePreviewButton />
    </>
  );
}

export default App;