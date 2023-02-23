import React from "react";

export default function CallToAction() {
  return (
    <div className="!backdrop-blur flex items-center h-[50vh] lg:h-[85vh] bg-calltoaction bg-no-repeat bg-origin-content bg-right-top bg-cover bg-local">
      <div className="container text-center h-[50%]">
        <div className="text-white lg:w-1/3 h-1/2 text-left">
          <h1 className="text-xl sm:text-3xl lg:text-5xl text-white/95 lg:pb-3 font-semibold lg:leading-[60px]">
            What are you waiting for?
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl font-normal text-white/85 leading-6 mb-3 lg:mb-6 w-[90%]">
            Got a service you want done professionally?
          </p>
          <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
            <button className="hover:animate-bounce bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs lg:text-sm bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
              Give us a chat
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
