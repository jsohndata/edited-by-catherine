import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import About from "../components/About";
// import Footer from './components/Footer';

export default function Home() {

  return (
  <div className="parent-container">
        <Intro />
        <Hero 
          textTitle={false}
          textLeft={<p><strong>Catherine Frank Editorial Services, LLC</strong>, can offer guidance, editorial feedback, and serve as a general liaison between you and the sometimes confusing world of children's publishing. I can help you turn the dream of <q>just wanting to be published</q> into a reality.</p>}
          textRight={<p>With twenty years of experience in children's publishing—more than a decade in the trenches at a Big Five trade imprint and almost as long as a freelance editor—I know the ins and outs of how to craft a query letter, how to find the right agent, and, most importantly, how to develop a manuscript and help a writer create the best possible version of a story.</p>} 
        />
        <Gallery />

        <Hero 
          textTitle={'Get In Contact'}
          textLeft={<p><strong>Catherine Frank Editorial Services, LLC</strong>, can offer guidance, editorial feedback, and serve as a general liaison between you and the sometimes confusing world of children's publishing. I can help you turn the dream of <q>just wanting to be published</q> into a reality.</p>}
          textRight={<p>With twenty years of experience in children's publishing—more than a decade in the trenches at a Big Five trade imprint and almost as long as a freelance editor—I know the ins and outs of how to craft a query letter, how to find the right agent, and, most importantly, how to develop a manuscript and help a writer create the best possible version of a story.</p>} 
        />

        <About />
  </div>
  );
}