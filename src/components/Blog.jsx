import React from "react";

export default function Blog() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mt-6 text-center relative ml-5 mr-5 flex justify-between items-center">
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          Content and Publications
        </span>
        <span className="text-md tracking-widest font-normal whitespace-nowrap dark:text-white">
          2024
        </span>
      </div>

      <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="container px-6 py-10 mx-auto max-w-full">
        <div className="flex w-full h-full  items-center justify-center md:justify-start tracking-widest md:tracking-wider leading-loose">
          <div className="text-center md:text-start ">
            <h1 className="text-4xl font-semibold text-slate-800 lg:text-6xl dark:text-slate-300">
              Insights and News
            </h1>
            {/* <h4 className='text-sm font-semibold lg:text-lg  md:mt-6 md:text-slate-800 hidden md:block underline decoration-1 underline-offset-8'>BE PART OF THE GLOBAL SHIFT TOWARDS CLEAN SUSTAINABLE ENERGY SOURCES.</h4> */}
          </div>
        </div>

        <div className="grid grid-cols-1 max-w-full gap-8 mt-8 md:mt-16  xl:grid-cols-3 ">
            {/* blog 1 */}
          <div className="dark:bg-gray-800/50 dark:ring-slate-600   rounded-md  dark:hover:shadow-sky-600 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-100 duration-700">
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 rounded-tr-lg">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full  "
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Emily Davis
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Energy Efficiency Consultant
                  </p>
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white md:ml-2">
              Promoting Energy Equity in 2023: Initiatives and Outcomes
            </h1>

            <hr className="w-32 my-6 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400 md:ml-2">
              This year has been transformative for Clean Energy Group and our
              partners in promoting energy justice and advancing equitable clean
              energy solutions for communities.
            </p>

            <a
              href="#"
              className="inline-flex items-center font-medium text-slate-800 dark:text-slate-500 hover:underline mt-4 md:ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 mb-2"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

          </div>
            {/* blog 2 */}
          <div className="dark:bg-gray-800/50 dark:ring-slate-600   rounded-md  dark:hover:shadow-sky-600 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-100 duration-700">
            <div className="relative ">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 rounded-tr-lg ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full bgt"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Michael Patel
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Solar Energy Engineer
                  </p>
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white line-clamp-1 md:ml-2">
            The Solar+Storage market is thriving more than ever, yet many communities still require support to fully access and benefit from these technologies.
            </h1>

            <hr className="w-32 my-6 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400 md:ml-2">
            Demand for early-stage technical assistance will rise as communities face growing vulnerabilities from climate disasters and an aging power grid.
            </p>

            <a
              href="#"
              className="inline-flex items-center font-medium text-slate-800 dark:text-slate-500 hover:underline mt-4 md:ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
            {/* blog 3 */}
          <div className="dark:bg-gray-800/50 dark:ring-slate-600   rounded-md  dark:hover:shadow-sky-600 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-100 duration-700">
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 rounded-tr-lg ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full "
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Sarah Chang 
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:ml-2">
                  Renewable Energy Policy Analyst
                  </p>
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white md:ml-2">
            Flaws in the EPA Power Plant Rule
            </h1>

            <hr className="w-32 my-6 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400 md:ml-2">
            New Study Highlights Benefits of Renewable Energy Investments for Economic Growth and Environmental Sustainability in Emerging Markets.
            </p>

            <a
              href="#"
              className="inline-flex items-center font-medium text-slate-800 dark:text-slate-500 hover:underline mt-4 md:ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
