import React from 'react'

export default function Benefits() {
  return (
    <section className="bg-white dark:bg-gray-900">
        {/* top title */}
          <div className="mt-6 text-center relative ml-5 mr-5 flex justify-between items-center">
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          Benefits
        </span>
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          2024
        </span>
      </div>

      <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
      
      <div className="flex justify-around  px-4">
{/* header 1 */}
      <div className="max-w-4xl  items-start  md:mr-14 px-4 justify-center top-40 hidden md:block ">
        <h1 className="md:text-2xl font-bold tracking-widest dark:text-slate-200 text-slate-600 ">
        Advancements in Sustainable Energy: Innovations and Impacts
        </h1>
        <p className='tracking-widest dark:text-slate-200 text-slate-600 mt-16'> Advancing sustainable energy through innovation, minimizing environmental impact for a greener future.</p>
      </div>
{/* header 2 */}
      <div className="max-w-4xl  items-end  md:ml-14 px-4">
        <h1 className="md:text-6xl font-bold tracking-wide dark:text-slate-200 text-slate-900 text-4xl">
        Sustainable and thriving future for our planet.
        </h1>
      </div>
    </div>

    <div className="py-8 px-4 mx-auto max-w-screen md:m-8 lg:py-16 lg:px-6">
      
        <div className="grid gap-8 lg:grid-cols-2">
            {/* box 1 */}
            <article className="p-6 bg-white  border border-gray-200 shadow-md dark:bg-gray-800  rounded-lg  dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" ><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Documentary
                    </span>
                    <span className="text-sm">4 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Unveiling the Future: A Documentary on Sustainable Energy Solutions</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Discover how cutting-edge sustainable energy technologies are revolutionizing the way we power our world, influencing industries, and shaping the future of our planet for generations to come.</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src="https://img.freepik.com/free-photo/confident-sad-mature-man-with-gray-hair-beard-generated-by-artificial-intelligence_25030-64885.jpg?t=st=1720165456~exp=1720169056~hmac=76f4b779db6e2746176ee37affa1e563b7fb11ad1c70d402bfbe1d9702148274&w=2000" alt="Jese Leos avatar" />
                        <span className="font-medium dark:text-white">
                        Benjamin Mitchell
                        </span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article> 
            {/* box 2 */}
            <article className="p-6 bg-white  border border-gray-200 shadow-md dark:bg-gray-800  rounded-lg  dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                        Article
                    </span>
                    <span className="text-sm">9 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Innovations Driving Sustainable Solutions</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400"> Sustainable energy innovations are rapidly transforming global infrastructure, influencing both policy makers and industries alike, as we strive towards a greener future.</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=1800&t=st=1720163637~exp=1720164237~hmac=265e640195fad4ba5cf77dbf7dd096b1ebf60e7d5b92e054e4fe21d5916f72f5" alt="Bonnie Green avatar" />
                        <span className="font-medium dark:text-white">
                        Sophia Williams
                        </span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article>     

              {/* box 3 */}
            <article className="p-6 bg-white  border border-gray-200 shadow-md dark:bg-gray-800  rounded-lg  dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                        Article
                    </span>
                    <span className="text-sm">5 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Harnessing the Power of Hydro Energy</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400"> Hydro energy generates clean electricity by harnessing flowing water, crucial for sustainable energy solutions due to its renewable nature and minimal environmental impact.</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-139590.jpg?w=2000&t=st=1720165148~exp=1720165748~hmac=45f1493bd4de4e77140abb5433072b68ab377c758c0140aa81402a11d50103c1" alt="Bonnie Green avatar" />
                        <span className="font-medium dark:text-white">
                        Emily Thompson
                        </span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article>  

              {/* box 4 */}
            <article className="p-6 bg-white  border border-gray-200 shadow-md dark:bg-gray-800  rounded-lg  dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-300 duration-300">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                        Article
                    </span>
                    <span className="text-sm">13 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Harnessing the Power of Wind Energy</a></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400"> Wind energy harnesses wind turbines to generate clean electricity, a sustainable renewable resource contributing significantly to global energy needs while minimizing environmental impact. </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src="https://img.freepik.com/free-photo/confident-young-man-with-beard-glasses-smiling-camera-generated-by-artificial-intelligence_188544-126015.jpg?t=st=1720165303~exp=1720168903~hmac=92b472da1d3d0d313edee202131078b417859c223ae5386e0dc26f2d4d5091e4&w=2000" alt="Bonnie Green avatar" />
                        <span className="font-medium dark:text-white">
                        Alexander Johnson
                        </span>
                    </div>
                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </article>              
        </div>  
    </div>
  </section>
  )
}
