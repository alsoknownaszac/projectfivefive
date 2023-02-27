import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 bg-[#f0f0f0]/[.2] lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-4 lg:mb-6">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Testimonials
            </h2>
          </div>
        </div>
        <div>
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 md:mb-0 flex-between items-center ">
            <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-indigo-500 text-lg">“</span>
                Cheap price and good service. The guy came on time and did a
                very nice job cleaning the blinds.
                <span className="font-bold text-indigo-500 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-indigo-500 text-sm">
                    Nkechi
                  </span>
                  <span className="dark:text-gray-400 text-xs flex items-center">
                    Owner of a Duplex
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-indigo-500 text-lg">“</span>
                Booking the service online was very easy. The guy was thorough
                and hardworking – he managed to clean all the mattresses in the
                house for under 2 hours. Now that’s efficient! We will
                definitely call again!
                <span className="font-bold text-indigo-500 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-indigo-500 text-sm">
                    Janet and Tim
                  </span>
                  <span className="dark:text-gray-400 text-xs flex items-center">
                    2 bedroom flat Owners
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-indigo-500 text-lg">“</span>
                The best office cleaners in Delta! The booking is a breeze and
                they are always flexible when it comes to setting the schedule
                <span className="font-bold text-indigo-500 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-indigo-500 text-sm">
                    Daniel
                  </span>
                  <span className="dark:text-gray-400 text-xs flex items-center">
                    Owner of Hon. Dan Law firm
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg mx-auto rounded-xl p-4">
              <p className="text-gray-600 dark:text-white">
                <span className="font-bold text-indigo-500 text-lg">“</span>
                The price is okay, communication with the office could have been
                easier. However, the cleaner was polite and punctual and did a
                very good job removing the stains from the carpet.
                <span className="font-bold text-indigo-500 text-lg">”</span>
              </p>
              <div className="flex items-center mt-4">
                <div className="flex flex-col ml-2 justify-between">
                  <span className="font-semibold text-indigo-500 text-sm">
                    Precious
                  </span>
                  <span className="dark:text-gray-400 text-xs flex items-center">
                    Boutique Owner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
