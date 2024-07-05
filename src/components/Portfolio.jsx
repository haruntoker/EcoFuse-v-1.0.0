import windTribune from '../assets/wind-farm.jpg'
import hydroImg from '../assets/Hydro-Energy.jpg'
import smartGrid from '../assets/Smart-Grid.jpg'
import solarHouse from '../assets/solar-house.jpg'

export default function Portfolio() {
  return (
    <section className="bg-white dark:bg-gray-900">
         <div className="mt-6 text-center relative ml-5 mr-5 flex justify-between items-center">
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
        Projects
        </span>
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          2024
        </span>
      </div>

      <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="container px-6 py-10 mx-auto max-w-full ">
        {/* header */}
      <div className="flex w-full h-full  items-center justify-center md:justify-end tracking-widest md:tracking-wider leading-loose">
      <div className="text-center md:text-right ">
          <h1 className="text-4xl font-semibold text-slate-800 lg:text-6xl dark:text-slate-300">
          OUR —  PROJECTS
          </h1>
          {/* <h4 className='text-sm font-semibold lg:text-lg  md:mt-6 md:text-slate-800 hidden md:block underline decoration-1 underline-offset-8'>BE PART OF THE GLOBAL SHIFT TOWARDS CLEAN SUSTAINABLE ENERGY SOURCES.</h4> */}
        </div>
      </div>

        <div className="grid grid-cols-1 gap-8 mt-8 mx-auto xl:mt-12 xl:gap-12 md:grid-cols-4 ">

            {/* project 1 */}
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group  dark:hover:shadow-sky-400 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-700"
            style={{
              backgroundImage: `url(${windTribune})`
            }}>
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">Wind Farm Development</h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Netherland</p>
            </div>
          </div>

            {/* project 2 */}
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group  dark:hover:shadow-sky-400 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300"
            style={{
              backgroundImage: `url(${hydroImg})`
            }}>
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">Hydro Energy Projects</h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Italy</p>
            </div>
          </div>

            {/* project 3 */}
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group  dark:hover:shadow-sky-400 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300"
            style={{
              backgroundImage: `url(${smartGrid})`
            }}>
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">Smart House Technology</h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Germany</p>
            </div>
          </div>

             {/* project 3 */}
             <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group  dark:hover:shadow-sky-400 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300"
            style={{
              backgroundImage: `url(${solarHouse})`
            }}>
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">Solar Village Initiativep</h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Spain</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
