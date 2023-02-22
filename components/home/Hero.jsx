export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div> */}
      <div className="bg-hero_img absolute w-full h-full bg-no-repeat bg-origin-content bg-top bg-cover bg-local"></div>
      {/* <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div> */}
      <div className="container backdrop-blur-[2px] h-[50vh] lg:h-[700px] relative z-20">
        <div className="h-full flex flex-col justify-end pb-[80px] lg:pb-0 lg:pt-20 lg:w-96 lg:justify-center">
          <div className="text-white h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-white/95 pb-3 w-[70%] lg:w-full font-semibold leading-10">
              Expert in Home/Office Services
            </h1>
            <p className=" text-lg lg:text-base font-normal text-white/85 leading-6 mb-4 ">
              Take the next step online with Project 55. We are one of the most
              effective and respective professional in services such as cleaning
              and maintenance of home and office spaces in Nigeria, offering
              quality services in various forms.
            </p>
            <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
              <button className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
                Talk to Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
