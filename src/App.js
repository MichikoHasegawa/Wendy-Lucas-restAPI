import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import WoodsCategory from "./components/WoodsCategory";
import BeachCategory from "./components/BeachCategory";
import BirdsCategory from "./components/BirdsCategory";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename="/wendy+lucasphotography">
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <p className="site-title">Wendy+Lucas Photography</p>
        </div>
        <nav className="site-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/woodscategory" element={<WoodsCategory />}></Route>
          <Route path="/beachcategory" element={<BeachCategory />}></Route>
          <Route path="/birdscategory" element={<BirdsCategory />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">
          Created by <a href="https://michikohasegawa.com/">Michiko Hasegawa</a>
          .
        </p>
      </footer>
    </Router>
  );
}

export default App;
