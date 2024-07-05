import React from 'react';
import { Flowbite} from 'flowbite-react';
import Hero from './components/Hero';
import Intro from './components/Introduction'
import Benefits from './components/Benefits'


function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
       
        <Hero />
        <Intro />
        <Benefits />
        
      </div>
    </Flowbite>
  );
}

export default App;
