import React from 'react';
import {Navbar,Hero,Service, About, Menu, Footer} from './Components/index'
import { mockData } from './Components/Menu/MockData';
import Cards from './Components/Menu/Cards';

const App = () => {
  return (
    <main className='w-full '>
      {/* Header */}
      <Navbar />
      {/* hero Section */}
      <Hero />
      {/* About us */}
      <About/>
      {/* menu Section */}
      <Menu/>
      {/* Footer */}
      <Footer/>
    </main>
  );
};

export default App;
