import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import WoodsCategory from "./components/WoodsCategory";
import BeachCategory from "./components/BeachCategory";
import BirdsCategory from "./components/BirdsCategory";
import ProductsCatagory from "./components/ProductsCatagory";
import About from "./components/About";
import News from "./components/News";
import SingleNews from "./components/SingleNews";
import Contact from "./components/Contact";

function App() {
  const featuredImage = (featuredImageObject) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
        ${featuredImageObject.media_details.sizes.large.source_url} 1024w,
        ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
        ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return { __html: img };
  };

  return (
    <Router basename="/wendy+lucasphotography">
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <p className="site-title">Wendy+Lucas Photography</p>
        </div>
        <nav className="site-navigation">
          {/* <ul>
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
          </ul> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/woodscategory" element={<WoodsCategory />}></Route>
          <Route path="/beachcategory" element={<BeachCategory />}></Route>
          <Route path="/birdscategory" element={<BirdsCategory />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/woodscategory" element={<WoodsCategory />}></Route>
          <Route path="/beachcategory" element={<BeachCategory />}></Route>
          <Route path="/birdscategory" element={<BirdsCategory />}></Route>
          <Route
            path="/productscategory"
            element={<ProductsCatagory />}
          ></Route>
          <Route path="/about" element={<About />} />
          <Route
            path="/news"
            element={<News featuredImage={featuredImage} />}
          />
          <Route
            path="/news/:id"
            element={<SingleNews featuredImage={featuredImage} />}
          ></Route>
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
