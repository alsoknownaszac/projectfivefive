import Image from "next/image";

const motivationItems = [
  {
    iconPath: "/icons/icon-online.svg",
    title: "Skills",
    subtitle:
      "We have the best skilful worker who will be doing your job perfectly and smoothly.",
  },
  {
    iconPath: "/icons/icon-budgeting.svg",
    title: "Experiences",
    subtitle:
      "We produce a higher level of residential and commercial professional services.",
  },
  {
    iconPath: "/icons/icon-onboarding.svg",
    title: "Quality",
    subtitle:
      "We afford Quality Assurance services that approach each engagement as a partnership.",
  },
  {
    iconPath: "/icons/icon-api.svg",
    title: "Guarantee",
    subtitle:
      "100% Satisfaction Guarantee – We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems",
  },
];

export default function Motivation() {
  return (
    <section
      id="why_choose_us"
      className="py-14 bg-neutral-light-grayish-blue lg:py-24"
    >
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Why choose us?
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              Quality people. Great service. Responsive. Professional. These are
              just a few of the attributes our clients have used to describe our
              services. But the real reason to use Production Support Services
              is results. When it comes to your staffing needs, we don’t just
              promise to deliver great talent, we guarantee it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:gap-5 lg:grid-cols-4">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <Image
                  width={55}
                  height={55}
                  src={item.iconPath}
                  alt={item.title}
                />
              </div>

              <h2 className="text-lg text-primary-dark-blue pb-4 lg:pt-5 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
