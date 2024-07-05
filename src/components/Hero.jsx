import bgImg from '../assets/hero.jpg'
import Navbar from './Navbar'


export default function Hero() {

  return (
    <section className='overflow-hidden'> 
      <Navbar />
      <div      
        className="relative w-full bg-center bg-cover bg-fixed h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="md:absolute  md:bottom-28 left-24 w-full h-full flex items-center justify-center md:justify-start tracking-tight md:tracking-wider leading-loose ">
        <div className="text-center md:text-left ">
          <h1 className="text-6xl font-semibold text-white lg:text-9xl dark:text-slate-300">
            FUTURE — SOLUTION
          </h1>
          <h4 className='text-sm font-semibold lg:text-lg  md:mt-6 md:text-slate-800 hidden md:block underline decoration-1 underline-offset-8'>BE PART OF THE GLOBAL SHIFT TOWARDS CLEAN SUSTAINABLE ENERGY SOURCES.</h4>
        </div>
      </div>
      </div>
    </section>
  )
}
