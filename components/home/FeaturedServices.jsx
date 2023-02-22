import React from "react";

export default function FeaturedServices() {
  return (
    <div>
      <div className=" bg-gray-50/[.3]">
        <div className="flex flex-col lg:flex-row">
          <div className="h-[40vh] lg:h-[500px] lg:w-1/2 bg-no-repeat bg-origin-content bg-left-bottom bg-cover lg:bg-contain bg-local lg:bg-fixed bg-renovations"></div>
          <div className=" lg:w-1/2 p-[30px] lg:py-[50px]">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue/[0.6] pb-5">
              General Renovations
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-2">
              There are four types of renovation projects: the basics, curb
              appeal, best bang for the buck, and passion projects.
            </p>
            <ul className="list-disc list-inside text-neutral-grayish-blue text-sm lg:text-base">
              <li>
                The basics include a roof that doesn’t leak, functioning gutters
                and downspouts, a dry basement, a reliable furnace, solid
                floors, and walls and retaining walls that are in good repair.
              </li>
              <li>
                Curb-appeal features include a well-manicured lawn, low-cost
                landscaping, fresh paint inside and out, clean carpets, and new
                address numbers.
              </li>
              <li>
                Passion projects include swimming pools, tennis courts, hot
                tubs, wine cellars, and game rooms.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-pink-50/[.3]">
        <div className="flex flex-col lg:flex-row">
          <div className="h-[40vh] lg:order-2 lg:h-[500px] lg:w-1/2 bg-no-repeat bg-origin-content bg-right-bottom bg-cover lg:bg-contain bg-local lg:bg-fixed bg-painting"></div>
          <div className=" lg:w-1/2 p-[30px] lg:py-[50px]">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue/[0.6] pb-5">
              Interior Painting
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-2">
              We use only the best quality paint, newest technology and expert
              painters to create a new look for your home. Update with the
              latest trends in home colors creating a beautiful style throughout
              your interior, or give the outside of your home a makeover with
              fresh paint that will make it look new again.
            </p>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-4">
              Interior services we offer include:
            </p>
            <ul className="list-disc list-inside text-neutral-grayish-blue text-sm lg:text-base">
              <li>Wall and floor painting</li>
              <li>Graphics and artistic finishes</li>
              <li>Wainscoting for high-traffic areas</li>
              <li>Green-friendly paints</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-green-50/[.15]">
        <div className="flex flex-col lg:flex-row">
          <div className="h-[40vh] lg:h-[500px] lg:w-1/2 bg-no-repeat bg-origin-content bg-left-bottom bg-cover lg:bg-contain bg-local lg:bg-fixed bg-cleaning"></div>
          <div className=" lg:w-1/2 p-[30px] lg:py-[50px]">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue/[0.6] pb-5">
              Cleaning
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-2">
              There are at different types of cleaning services that our
              business offers. Many are specialized cleaning types that are
              offered to home/offices spaces
            </p>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-4">
              The following is a list of the common cleaning services we offer:
            </p>
            <ul className="list-disc list-inside text-neutral-grayish-blue text-sm lg:text-base">
              <li>Domestic cleaning</li>
              <li>Commercial cleaning</li>
              <li>General cleaning</li>
              <li>Spring and deep cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
