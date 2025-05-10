import React, { Children } from 'react'
import Hconback from "./../../assets/Hconback.png";
import { Link } from 'react-router-dom'

function Bread({children}){
  return (
    <div
      style={{
        backgroundImage: `url(${Hconback})`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-18 lg:px-8 lg:py-18">
        <nav aria-label="Breadcrumb" className='content-center items-center'>
            <h1 className='text-white text-4xl text-center font-bold content-center'>{children}</h1>
          <ol className="flex items-center overflow-hidden w-fit content-center rounded border border-gray-300 bg-white text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <li>
              <Link
                to="#"
                className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900 dark:bg-gray-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 dark:bg-gray-700"></span>

              <a
                href="#"
                className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                Category
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Bread