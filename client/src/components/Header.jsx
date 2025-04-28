import React from 'react'
import HeroImg from './../assets/biglogohere.png'

const Header = () => {
  return (
    <header className=" border redius-b-3xl overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
              <img className="h-16 w-auto" src={HeroImg} alt="" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-lg text-black  transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    href="#"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    className="text-lg text-black transition hover:text-purple-900 hover:text-shadow-purple-500 hover:text-shadow-lg/10"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="relative hidden md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header