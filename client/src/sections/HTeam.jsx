import React from 'react'
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
import TeamCaro from '../components/carousel/TeamCaro';

const HTeam = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-20 pb-40 sm:px-6 lg:px-8">
        <div className="flex place-content-evenly my-16">
          <div className="">
            <div className="max-w-lg md:max-w-none ">
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                Our Expert
              </span>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Meet Our Professional Team Members
              </h2>
            </div>
          </div>

          <div className="">
            <Link to="" >
            <Button>
                VIEW ALL MEMBERS
            </Button></Link>
            <div>
                
            </div>

          </div>

          <div className="md:col-span-7"></div>
        </div>
        <div>
            <TeamCaro />
        </div>
      </div>
    </section>
  );
}

export default HTeam