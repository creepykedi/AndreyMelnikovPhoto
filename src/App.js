import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, HashRouter, BrowserRouter, Route } from 'react-router-dom'
import gsap, {Power1} from 'gsap'
import About from './components/About'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import Architecture from './components/Architecture'
import Contact from './components/Contact'
import Rep from './components/Rep'
import Nature from './components/Nature'
import Portraits from './components/Portraits'


import ArchitectureData from './components/Data/ArchitectureData'
import AllData from './components/Data/Alldata'
import NatData from './components/Data/NatureData'
import RepData from './components/Data/RepData'
import PortraitsData from './components/Data/PortraitsData'

import RepDataSrl from './components/Data/RepDataSRl'
function App() {

  const [sidebar, setSidebar] = useState(false)
  const [animationPlayed, setAnimationPlayed] = useState(false)
  const [nameShown, setNameshown] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const toggleAnimation  = () => setAnimationPlayed(!animationPlayed)
  const showName = () => setNameshown(!nameShown)
  const options = {
    buttons: {
      showDownloadButton: false,
      size: '60px'
    }}

  let name = useRef(null)

  const archPhotos = ArchitectureData.map(pic => <Rep
    w600={pic.small}
    w900={pic.mid}
    w1200={pic.full}
    fallback={pic.fallback}
    wide={pic.wide} />)

  const allPhotos = AllData.map(pic => <Nature
    w600={pic.mid}
    w1200={pic.full}
    fallback={pic.throwback}
    wide={pic.wide} />)

  const repPhotos = RepData.map(pic => <Rep
      w600={pic.small}
      w900={pic.mid}
      w1200={pic.full}
      fallback={pic.fallback}
      wide={pic.wide} />)

  const naturePhotos = NatData.map(pic => <Nature
    w600={pic.mid}
    w900={pic.mid}
    w1200={pic.full}
    fallback={pic.fallback}
    wide={pic.wide} />)

  const portraitsPhotos = PortraitsData.map(pic => <Portraits
    w600={pic.mid}
    w900={pic.mid}
    w1200={pic.full}
    fallback={pic.fallback}
    wide={pic.wide} />)
      

  useEffect(() =>  {

    if (!nameShown) {
      gsap.from(name, 2.5, {opacity:0, ease: Power1.easeIn}).delay(1.8)
      showName()
    }
  }, [nameShown])



  return (
    <SimpleReactLightbox> 
    <HashRouter> 
    <div className="App">
      <top>
          <div className="top-icons"> 
              <a href="https://www.instagram.com/exotycs/">
                <svg className="mobile-inst" height="511pt" viewBox="0 0 511 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/>  </svg>
              </a>
              <div className="mobname">
                <h3>Андрей Мельников</h3>
              </div>
            <svg className="menu-sandwich" onClick={showSidebar}
            height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
            
            </svg>
          </div>
      </top>

      <div className="wholerow">
        <h3 ref={el => name = el}>Андрей Мельников</h3>
      </div>

      <main> 
        <Navigation sidebar={sidebar}
        showSidebar={showSidebar}/>
      
        <Route path="/" exact>
            <Gallery 
            animationPlayed={animationPlayed}
            toggleAnimation={toggleAnimation}
            options={options}/>
          </Route>
        <Route path="/nature" exact component={Nature}>
          <SRLWrapper options={options}>
          <div className="gallery">
            {naturePhotos}
          </div>
          </SRLWrapper>
        </Route>

        
        <Route path="/architecture" exact component={Architecture}>
          <SRLWrapper options={options}>
          <div className="gallery">
            {archPhotos}
          </div>
          </SRLWrapper> 
        </Route>

        <Route path="/reportage" exact component={Rep}>
        <SRLWrapper options={options}>
          <div className="gallery">
            {repPhotos}
          </div>
          </SRLWrapper>
        </Route>

        <Route path="/portraits" component={Portraits}>
        <SRLWrapper options={options}>
          <div className="gallery portraits">
            {portraitsPhotos}
          </div>
          </SRLWrapper>
        </Route>
        
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
    
        <footer>
          <p className="copyright"> All Images © Andrey Melnikov 2020</p>
        </footer>
      </main>
    </div>
    
      </HashRouter>
    </SimpleReactLightbox> 
  );
}




export default App;
