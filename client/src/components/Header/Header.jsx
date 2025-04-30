import React from 'react'
import HeroImg from './../../assets/biglogohere.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="top-0 sticky bg-white rounded-b-3xl bg-auto shadow-xl z-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <img className="h-16 w-auto" src={HeroImg} alt="" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-lg text-black  transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    to="/About"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    to="/Blog"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </li>

                <div>
                  <Link
                    className="group inline-block rounded-full bg-gradient-to-r from-purple-700 to-blue-500 p-[2px] hover:text-white focus:outline-hidden"
                    to="#"
                  >
                    <span className="block text-[16px] rounded-full bg-white px-5 py-1 font-medium group-hover:bg-transparent transition duration-300">
                      Start A Project
                    </span>
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header