import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HobbyStack from "./components/HobbyStack";
import Projects from "./components/Projects";
import ScrollDownIndicator from "./components/ScrollDownIndicator";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="text-gray-300">
      <Header />
      <ScrollDownIndicator/>
      <AboutMe/>
      <TechStack/>
      <Experience/>
      <Education/>
      <HobbyStack/>
      <Projects/>
    </div>
  );
}
