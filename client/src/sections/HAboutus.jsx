import React from 'react'
import AboutImg from './../assets/about.gif'
import AboutHere from './../assets/abouthere.gif'

const HAboutus = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-7 gap-4 content-center items-center my-16">
          <div className="col-span-3">
            <div className="max-w-lg md:max-w-none ">
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                About Us
              </span>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                We're A Strategic IT Consulting & Solutions Firm
              </h2>

              <p className="mt-4 text-gray-700">
                PhyGalaxy Is A Leading IT Consulting Firm Specializing In
                Innovative Technology Solutions, Digital Transformation, And IT
                Strategy. We Help Businesses Optimize Their Operations, Enhance
                Cybersecurity, And Implement Cutting-Edge Software Solutions.
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-full overflow-hidden border-4 border-purple-700 flex justify-end pl-10 h-78">
              <img
                src={AboutImg}
                className="ml-10 rounded-full h-auto w-full scale-y-110" //h-86 removed as it was causing issues.
                alt=""
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-full overflow-hidden border-4 border-blue-500 flex justify-start pr-10 h-78">
              <img
                src={AboutHere}
                className="mr-10 rounded-full h-auto w-full scale-y-110" //h-86 removed as it was causing issues.
                alt=""
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="max-w-lg md:max-w-none">
              <p className="mt-4 text-gray-700">
                Partner With Us To Navigate The Digital Future With Confidence.
                Our Expert Team Delivers Customized IT Services, From Cloud
                Computing To AI-Driven Solutions, Ensuring Efficiency And
                Scalability.
              </p>
            </div>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-4">
              <li class="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-600 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Software Development
              </li>
              <li class="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-600 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Web Application Development
              </li>
              <li class="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-600 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Web Application Security Assesment
              </li>
              <li class="flex items-center">
                <svg
                  className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-600 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                UI/UX & Graphics Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HAboutus