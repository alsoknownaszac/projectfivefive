import BasicPopover, { BasicFooterPopover } from "../home/BasicPopover";
import { IoLogoWhatsapp, IoMdCall, IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[hsl(228,22%,23%)] py-[10px] text-white">
      <div className="container">
        <div className="text-center flex items-center justify-between gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="text-[16px] lg:text-[26px] font-light font-Reenie">
            <span className="hidden lg:inline"> Developer - </span>
            <a href="https://twitter.com/Alsoknownaszac">
              <span className="text-[hsl(172,33%,74%)] animate-pulse">
                @alsoknownaszac
              </span>
            </a>
          </div>

          {/* <div className="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4">
            <button className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
              Request Invite
            </button>
          </div> */}
          <BasicPopover
            className="!px-0"
            contentStyles="w-[70vw] right-[0px] lg:w-[250px] !p-[10px] !bottom-[40px] !rounded-[10px] !bg-white/[.8]"
            btn={
              <div className="inline lg:hidden bg-primary-lime-green px-3 py-1 rounded-full text-neutral-white text-[10px] bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
                Let&apos;s Begin!
              </div>
            }
          >
            <div className="rounded-2xl p-2 flex justify-between items-center text-black text-center text-[14px] gap-[5px] ">
              <a href="tel:+2348053845469">
                <IoMdCall className="text-primary-lime-green text-[20px]" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <IoLogoWhatsapp className="text-primary-lime-green text-[20px]" />
              </a>
              <a href="mailto:mayo16collins?subject=Request%20for%20your%20Services!&body=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <IoMdMail className="text-primary-lime-green text-[20px]" />
              </a>
            </div>
          </BasicPopover>
          {/* <BasicFooterPopover
            className="!px-0 !w-fit"
            contentStyles="-translate-x-[60%] !translate-y-[5px] !p-[20px] !rounded-[23px] !bg-white"
            btn={
              <button className="lg:hidden block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
                Let&apos;s Begin!
              </button>
            }
          >
            <div className="bg-white rounded-2xl p-6 flex justify-between items-center text-black text-center text-[14px] gap-[10px] ">
              <a href="tel:+2348053845469">
                <IoMdCall className="text-primary-lime-green text-[25px]" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <IoLogoWhatsapp className="text-primary-lime-green text-[25px]" />
              </a>
              <a href="mailto:mayo16collins?subject=Request%20for%20your%20Services!&body=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
                <IoMdMail className="text-primary-lime-green text-[25px]" />
              </a>
            </div>
          </BasicFooterPopover> */}
          <div className="hidden lg:flex items-center text-black text-center text-[14px] gap-[60px] ">
            <a href="tel:+2348053845469">
              <div className="hover:animate-bounce flex items-center mx-auto justify-center p-[7px] rounded-xl bg-[hsl(130,11%,43%)]/[.6] text-white">
                <IoMdCall className="text-white text-[18px]" />
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+2348053845469&text=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
              <div className="hover:animate-bounce flex items-center mx-auto justify-center p-[7px] rounded-xl bg-[hsl(130,11%,43%)]/[.6] text-white">
                <IoLogoWhatsapp className="text-white text-[18px]" />
              </div>
            </a>
            <a href="mailto:mayo16collins?subject=Request%20for%20your%20Services!&body=Hi.I%20stumbled%20on%20your%20website%20and%20i%20want%20to%20inquire%20about%20your%20services">
              <div className="hover:animate-bounce flex items-center mx-auto justify-center p-[7px] rounded-xl bg-[hsl(130,11%,43%)]/[.6] text-white">
                <IoMdMail className="text-white text-[18px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
