import Link from "next/link";
import { useState } from "react";
import BasicPopover from "../home/BasicPopover";
import { TiThMenu, TiTimes } from "react-icons/ti";

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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <TiThMenu size={24} className={`${isOpen && "hidden"}`} />
            <TiTimes size={28} className={isOpen ? "block" : "hidden"} />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed w-screen h-screen !inset-0 z-30 bg-gray-900 
      bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem, i) => (
            <a
              key={i}
              onClick={() => setIsOpen(false)}
              className="py-2"
              href={`#${navItem.link}`}
            >
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
