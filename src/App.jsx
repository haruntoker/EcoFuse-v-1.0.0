import React from 'react';
import { Flowbite} from 'flowbite-react';
import Hero from './components/Hero';
import Intro from './components/Introduction'


function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
       
        <Hero />
        <Intro />
        
      </div>
    </Flowbite>
  );
}

export default App;
