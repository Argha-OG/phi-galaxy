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
        </nav>
      </div>
    </div>
  );
}

export default Bread