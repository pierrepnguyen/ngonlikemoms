import React from 'react';

import { Nav } from "./Nav"
import { HeroSection } from "./Hero";
import { Footer } from "./Footer";


export const Home = ({
  selectedPage,
  setSelectedPage
}) => {
  return(
    <main>
        <div className="container main">
          <HeroSection  
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
          />
        </div>
    </main>
  )
}