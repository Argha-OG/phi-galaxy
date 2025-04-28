import React from 'react'
import AboutImg from './../assets/about.gif'
import AboutHere from './../assets/abouthere.gif'

const Aboutus = () => {
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
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus