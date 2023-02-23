import Link from "next/link";
import { useState } from "react";
import BasicPopover from "../home/BasicPopover";

const navItems = [
  { name: "Home", link: "home" },
  { name: "Services", link: "services" },
  { name: "Testimonials", link: "testimonials" },
  { name: "Why Choose us", link: "why_choose_us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-4 lg:my-5 text-[16px] lg:text-[22px] font-semibold font-[Mynerve] text-[hsl(143,26%,78%)]">
            ProjectFiveFive
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem, i) => (
              <Link key={i} href={`#${navItem.link}`} passHref={true}>
                <span className="mx-3 py-5 hover:gradient-border-bottom">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>

          {/* <BasicPopover
            className="!px-0 !w-fit"
            contentStyles="!-translate-x-[60%] !translate-y-[5px] !p-[20px] !rounded-[23px] !bg-white"
            btn={
              <button className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
                Contact Us
              </button>
            }
          >
            <div className="bg-white text-center text-[14px] flex flex-col gap-[10px] ">
              <a href="tel:+2348053845469">
                <div className="py-3 hover:bg-gray-300">Call Now</div>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <div className="py-3 hover:bg-gray-300">Whatsapp Message</div>
              </a>
            </div>
          </BasicPopover> */}
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem, i) => (
            <Link key={i} href={`#${navItem.link}`} passHref={true}>
              <span className="mx-3 py-5 hover:gradient-border-bottom">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
