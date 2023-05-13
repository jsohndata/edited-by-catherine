import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
// import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  return (
    <div className="parent-container">
      <Intro />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;
