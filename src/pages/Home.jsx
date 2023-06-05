import NavMenu from "../components/NavMenu";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Services from "../components/Services";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import BannerMedia from "../components/BannerMedia";
// import Footer from './components/Footer';

export default function Home() {

  return (
  <div className="parent-container">
        <NavMenu />
        <Intro />
        <Banner 
          textTitle={false}        
          textLeft={<p><strong>Catherine Frank Editorial Services, LLC</strong>, can offer guidance, editorial feedback, and serve as a general liaison between you and the sometimes confusing world of children's publishing. I can help you turn the dream of <q>just wanting to be published</q> into a reality.</p>}

  
        />
        <Gallery />

        <Banner               
          textLeft={<p>With more than twenty years of experience in children's publishing—including over a decade in the trenches at a Big Five trade imprint—I know the ins and outs of how to craft a query letter, how to find the right agent, and, most importantly, how to develop a manuscript and help a writer create the best possible version of a story.</p>}                    
        />
        
        <About />        

        <BannerMedia bgClassName={"pug"} />

        <Services />

        <Banner
          textTitle={false}
          textLeft={<p><em>My favorite part of the editorial process is diving into a manuscript, seeing where it takes me, and envisioning how that journey could be strengthened. I can help deepen characters, focus plots, and improve a story's pacing, whether it's a 100-word picture book text or a YA narrative nonfiction manuscript.</em></p>}
          textRight={false}
        />        

        <div className="bg-extender">
        <Faq />

        <Footer />
        </div>
  </div>
  );
}