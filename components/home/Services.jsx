import React from "react";
import { MdCleaningServices } from "react-icons/md";
import { GoPaintcan } from "react-icons/go";
import { SiDatabricks } from "react-icons/si";
import { GiScrewdriver } from "react-icons/gi";

export default function Services() {
  return (
    <section
      id="services"
      className="py-14 pb-24 bg-[#f0f0f0]/[.3] lg:py-24 lg:pb-40"
    >
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-4 lg:mb-8">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Our Services
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              Triple E Solutions is different. Where other services simply offer
              you a list of contractor choices, we provide you with a carefully
              matched contractor for your needs, chosen from our expert
              contractor network.
            </p>
          </div>
        </div>
        <div className="sm:grid grid-cols-2 xl:grid-cols-4 justify-center items-center text-center gap-4 lg:gap-10">
          <div className="hover:scale-110 cursor-pointer w-full px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <MdCleaningServices size={35} color="white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white pt-4">
              Cleaning
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 py-4">
              We are professional cleaners, redefining our industry through
              innovation and world-class service.
            </p>
          </div>
          <div className="hover:scale-110 cursor-pointer w-full px-4 py-4 mt-6 lg:translate-y-[45px] bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <GoPaintcan size={35} color="white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white pt-4">
              Painting
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 py-4">
              Professional painting service includes interior & exterior house
              painting, commercial painting & more.
            </p>
          </div>
          <div className="hover:scale-110 cursor-pointer w-full mt-6 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <SiDatabricks size={33} color="white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white pt-4">
              Tiling
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 py-4">
              We provide a professional tiling service either on your bathroom,
              wet rooms, kitchen, swimming pools, etc
            </p>
          </div>
          <div className="hover:scale-110 cursor-pointer w-full px-4 py-4 mt-6 lg:translate-y-[45px] bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <GiScrewdriver size={33} color="white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white pt-4">
              Renovations
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 py-4">
              Our residential contractors can renovate any part of your home,
              from the kitchen to the bathroom, and even complete a whole home
              remode.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
