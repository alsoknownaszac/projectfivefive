import BasicPopover from "./BasicPopover";

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div> */}
      <div className="bg-hero_img absolute w-full h-full bg-no-repeat bg-origin-content bg-top bg-cover bg-local"></div>

      {/* <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div> */}
      <div className="backdrop-blur-[2px] ">
        <div className="container h-[60vh] xs:h-[50vh] lg:h-[700px] relative z-20">
          <div className="h-full flex items-center">
            <div className="text-white h-1/2 lg:h-[40%] text-center lg:text-left lg:w-1/3">
              <h1 className="text-xl sm:text-3xl lg:text-5xl text-white/95 pb-3 lg:w-[80%] font-semibold leading-7 sm:leading-10">
                Experts in Home/Office Services
              </h1>
              <p className="text-sm sm:text-lg lg:text-base font-normal text-white/85 sm:leading-6 mb-4 ">
                The most effective and respective professional in services such
                as cleaning and maintenance of home and office spaces in
                Nigeria.
              </p>
              <BasicPopover
                className="!px-0 lg:w-fit"
                contentStyles="w-[90vw] left-[0] lg:w-[280px] !p-[20px] !bottom-[40px] !rounded-[15px] !bg-gray-300/[.95]"
                btn={
                  <div className="inline bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs lg:text-sm bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
                    Talk to Us
                  </div>
                }
              >
                <div className="text-center text-[14px] flex flex-col gap-[10px] ">
                  <a href="tel:+2348053845469">
                    <div className="hover:animate-pulse py-3 rounded-xl bg-gradient-to-r from-[hsl(192,33%,68%)]/[.9] to-[hsl(234,32%,36%)]/[.9]">
                      Call Now
                    </div>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                    <div className="hover:animate-pulse py-3 rounded-xl bg-gradient-to-r from-[hsl(192,33%,68%)]/[.9] to-[hsl(234,32%,36%)]/[.9]">
                      Whatsapp Message
                    </div>
                  </a>
                </div>
              </BasicPopover>
              {/* <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <button className="hover:animate-bounce bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs lg:text-sm bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
                  Talk to Us
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
