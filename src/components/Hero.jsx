import bgImg from '../assets/hero.jpg'
import Navbar from './Navbar'


export default function Hero() {

  return (
    <section>
<Navbar />
      <div      
        className="w-full bg-center bg-cover h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-white lg:text-9xl dark:text-slate-300">
            FUTURE — SOLUTION
            </h1>
           
          </div>
        </div>
      </div>
    </section>
  )
}
