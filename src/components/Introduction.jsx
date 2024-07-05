import introImg from "../assets/wind-turbines.png";

export default function Introduction() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mt-6 text-center relative ml-5 mr-5 flex justify-between items-center">
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          Introduction
        </span>
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          2024
        </span>
      </div>

      <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="max-w-4xl text-start md:mt-32 md:ml-14 px-4">
        <h1 className="md:text-6xl font-bold tracking-wide dark:text-slate-200 text-slate-900 text-4xl">
          Promoting new energy technologies and solutions.
        </h1>
      </div>
      <div className="grid max-w-screen px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 md:m-16  ">
        <div className="lg:col-span-7 flex flex-col gap-8 mb-6 lg:mb-16 justify-center">
          <div className="grid gap-8 md:grid-cols-2 md:gap-y-28">
            {/* Box 1 */}
            <div className="flex items-center shadow-lg shadow-sky-400 bg-gray-50 rounded-lg  dark:bg-gray-600 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300">
              <a href="#">
                <img
                  className="w-16 rounded-lg sm:rounded-none sm:rounded-l-lg md:ml-8"
                  src="https://cdn2.iconfinder.com/data/icons/energy-supply-1/68/solar_electricity_power_panel_renewable_energy-512.png"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Solar Energy</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 uppercase">
                  [view details]
                </span>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex items-center shadow-lg shadow-sky-400 bg-gray-50 rounded-lg  dark:bg-gray-600 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300">
              <a href="#">
                <img
                  className="w-16 rounded-lg sm:rounded-none sm:rounded-l-lg md:ml-8"
                  src="https://cdn0.iconfinder.com/data/icons/ecology-445/68/84-512.png"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Hydro Energy</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 uppercase">
                  [view details]
                </span>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex items-center shadow-lg shadow-sky-400 bg-gray-50 rounded-lg  dark:bg-gray-600 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300">
              <a href="#">
                <img
                  className="w-16 rounded-lg sm:rounded-none sm:rounded-l-lg md:ml-8"
                  src="https://cdn4.iconfinder.com/data/icons/ecology-93/64/geothermal_energy-ecology_and_environment-power_plant-ecological-512.png"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Geothermal Energy</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 uppercase">
                  [view details]
                </span>
              </div>
            </div>
            {/* Box 4 */}
            <div className="flex items-center shadow-lg shadow-sky-400 bg-gray-50 rounded-lg  dark:bg-gray-600 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-300 duration-300">
              <a href="#">
                <img
                  className="w-16 rounded-lg sm:rounded-none sm:rounded-l-lg md:ml-8"
                  src="https://cdn4.iconfinder.com/data/icons/smart-technology-10/70/Smart_Technology-08-512.png"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Wind Energy</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 uppercase">
                  [view details]
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl mx-8 shadow-2xl shadow-sky-600"
            src="https://img.freepik.com/free-photo/wind-turbine-shore-lake_1268-27615.jpg?t=st=1720118478~exp=1720122078~hmac=7aaa11b00601c678101f45d4f41965336730e1f5024060d3feef96e91e59145d&w=2000"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
