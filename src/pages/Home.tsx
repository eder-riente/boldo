import { Header } from "../components/Header";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowRight,
  CaretCircleDown,
  CheckCircle,
  Eye,
  PenNib,
  Sun,
} from "phosphor-react";
import Logo from "../components/Logo";

export function Home() {
  return (
    <>
      {/* Section One  */}
      <section className="px-24 py-14 bg-blue-900 bg-ellipse bg-auto bg-no-repeat bg-right-top">
        <Header />
        <div className="w-full flex items-center justify-between mb-20 sm:flex-wrap ">
          <div className="flex flex-col items-start justify-between w-[47%] gap-10">
            <h1 className="text-gray-50 text-5xl font-sans font-light leading-relaxed">
              Save time by building fast with Boldo Template
            </h1>
            <p className="text-gray-50 text-sm font-light">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex items-center justify-start gap-4 w-full">
              <button className="py-4 px-14 rounded-full bg-green-400 text-blue-900 font-bold text-sm hover:opacity-90 transition-colors">
                Buy template
              </button>
              <button className="py-4 px-14 rounded-full border border-gray-50 text-gray-50 font-bold text-sm hover:bg-gray-50 hover:text-blue-900 transition-colors">
                Explore
              </button>
            </div>
          </div>
          <div>
            <img src="/src/assets/hero-graphics.png" alt="hero graphics" />
          </div>
        </div>
        <div className=" w-full bg-logos bg-auto bg-no-repeat">
          <img src="/src/assets/rectangle.png" alt="logos" />
        </div>
      </section>

      {/* Section Two */}
      <section className="px-24 py-14">
        <div className="flex flex-col items-center justify-evenly w-full px-24 py-14 bg-gray-50">
          <span className="text-sm text-gray-600 text-center">Our Service</span>
          <h1 className="text-5xl font-sans font-light text-blue-900 leading-relaxed text-center w-[50rem]">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-start">
          <div className="flex flex-col gap-4">
            <img
              className="w-[300px] h-[354px]"
              src="/src/assets/card-1.png"
              alt="card 1"
            />
            <strong className="text-base font-sans font-bold">
              Cool feature title
            </strong>
            <p className="text-sm text-gray-600 font-light">
              Learning curve network effects <br />
              return on investment.
            </p>
            <a
              href=""
              className=" flex items-center text-sm font-bold gap-4 text-blue-900 border-b-2 border-b-blue-900 w-32 pb-3"
            >
              Explore page
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-[300px] h-[354px]"
              src="/src/assets/card-2.png"
              alt="card 1"
            />
            <strong className="text-base font-sans font-bold">
              Even cooler feature
            </strong>
            <p className="text-sm text-gray-600 font-light">
              Learning curve network effects <br /> return on investment.
            </p>
            <a
              href=""
              className=" flex items-center text-sm font-bold gap-4 text-blue-900 border-b-2 border-b-blue-900 w-32 pb-3"
            >
              Explore page
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="w-[300px] h-[354px]"
              src="/src/assets/card-3.png"
              alt="card 1"
            />
            <strong className="text-base font-sans font-bold">
              Even cooler feature
            </strong>
            <p className="text-sm text-gray-600 font-light">
              Learning curve network effects
              <br /> return on investment.
            </p>
            <a
              href=""
              className=" flex items-center text-sm font-bold gap-4 text-blue-900 border-b-2 border-b-blue-900 w-32 pb-3"
            >
              Explore page
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Section Three */}
      <section className="px-24 py-14">
        <div className="flex items-end justify-between gap-[150px]">
          <div className="relative">
            <img
              className="w-[494px] h-[506px]"
              src="/src/assets/work-01.png"
              alt="Homem no escritorio"
            />
            <img
              className="absolute left-[186px] right-[57px] bottom-[-130px] w-[251px] h-[388px] "
              src="/src/assets/chart-01.png"
              alt="graficos"
            />
          </div>
          <div className="flex flex-1 flex-col w-96 items-start justify-between gap-8">
            <h1 className="text-4xl  text-blue-900 font-sans font-light">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
            <div className="flex flex-col items-start justify-between gap-5">
              <div className="flex items-center justify-between gap-2">
                <CheckCircle size={36} weight="fill" color="#0A2640" />
                <span className="text-base text-black font-sans font-light">
                  We connect our customers with the best.
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <CheckCircle size={36} weight="fill" color="#0A2640" />
                <span className="text-base text-black font-sans font-light">
                  Advisor success customer launch party.
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <CheckCircle size={36} weight="fill" color="#0A2640" />
                <span className="text-base text-black font-sans font-light">
                  Business-to-consumer long tail.
                </span>
              </div>
            </div>
            <button className=" text-sm text-gray-50 font-bold py-4 px-14 bg-blue-900 rounded-full">
              Start now
            </button>
          </div>
        </div>
      </section>

      {/* Section Four */}
      <section className="px-24 py-14 mb-32">
        <div className="flex items-end justify-between gap-60">
          <div className="flex flex-1 flex-col w-96 items-start justify-between gap-8">
            <h1 className="text-4xl  text-blue-900 font-sans font-light">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
            <div className="flex flex-col items-start justify-between gap-5">
              <div className="w-full flex items-center gap-2 py-3 pl-5 pr-14 bg-blue-900 rounded-[4px] shadow-lg">
                <PenNib size={26} weight="light" color="#FFFFFF" />
                <span className="text-base text-gray-50 font-sans font-light">
                  We connect our customers with the best.
                </span>
              </div>
              <div className="w-full flex items-center gap-2 py-3 pl-5 pr-14 bg-grey-50 rounded-[4px] shadow-lg">
                <Eye size={26} weight="light" color="#0A2640" />
                <span className="text-base text-black font-sans font-light">
                  Advisor success customer launch party.
                </span>
              </div>
              <div className="w-full flex items-center  gap-2 py-3 pl-5 pr-14 bg-grey-50 rounded-[4px] shadow-lg">
                <Sun size={26} weight="light" color="#0A2640" />
                <span className="text-base text-black font-sans font-light">
                  Business-to-consumer long tail.
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[444px] h-[523px]"
              src="/src/assets/work-02.png"
              alt="Homem no escritorio"
            />
            <img
              className="absolute left-[48px] right-[150px] bottom-[-130px] w-[291px] h-[388px] "
              src="/src/assets/chart-02.png"
              alt="graficos"
            />
          </div>
        </div>
      </section>

      {/* Section Five */}
      <section className="px-24 py-[120px] bg-blue-900">
        <div className=" flex flex-col items-start gap-16">
          <div className="flex items-end w-full gap-52">
            <h1 className="text-5xl text-gray-50 font-light max-w-[700px]">
              An enterprise template to ramp up your company website
            </h1>
            <div className="flex items-end gap-2">
              <ArrowCircleLeft weight="fill" size={72} color="#FFFFFF" />
              <ArrowCircleRight weight="fill" size={72} color="#FFFFFF" />
            </div>
          </div>
          <div className="flex items-baseline justify-between gap-5">
            <div className="max-w-xs h-auto flex flex-col items-start gap-10 p-10 bg-gray-50 rounded-xl">
              <p className="text-base text-black font-sans font-normal">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-14 h-14 "
                  src="/src/assets/user-01.png"
                  alt="usuario"
                />
                <div className="flex flex-col items-start gap-1">
                  <strong className="font-bold text-blue-900">
                    Albus Dumbledore
                  </strong>
                  <span className="text-xs font-light text-blue-900">
                    Manager @ Howarts
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-xs h-auto flex flex-col items-start gap-10 p-10 bg-gray-50 rounded-xl">
              <p className="text-base text-black font-normal">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-14 h-14 "
                  src="/src/assets/user-02.png"
                  alt="usuario"
                />
                <div className="flex flex-col items-start gap-1">
                  <strong className="font-bold text-blue-900">
                    Severus Snape
                  </strong>
                  <span className="text-xs font-light text-blue-900">
                    Manager @ Slytherin
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-xs h-auto flex flex-col items-start gap-10 p-10 bg-gray-50 rounded-xl">
              <p className="text-base text-black font-normal">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full w-14 h-14 "
                  src="/src/assets/user-03.png"
                  alt="usuario"
                />
                <div className="flex flex-col items-start gap-1">
                  <strong className="font-bold text-blue-900">
                    Herry Potter
                  </strong>
                  <span className="text-xs font-light text-blue-900">
                    Team Leader @ Gryffindor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Six */}
      <section className="px-24 py-[120px] bg-gray-50">
        <img
          className="mb-14 w-full"
          src="/src/assets/work-03.png"
          alt="Trabalho"
        />
        <div className=" flex items-start justify-between gap-5 w-full">
          <h1 className="text-4xl text-black leading-10 w-3/4">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex flex-col items-end justify-start gap-8 w-full">
            <div className="flex flex-1 items-center justify-between gap-3 pb-4 border-b-2 border-b-gray-400 w-[500px]">
              <span className="text-xl font-sans text-black">
                We connect our customers with the best?
              </span>
              <CaretCircleDown size={28} weight="fill" color="#000000" />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 pb-4 border-b-2 border-b-gray-400 w-[500px]">
              <span className="text-xl font-sans text-black">
                Android research & development rockstar?
              </span>
              <CaretCircleDown size={28} weight="fill" color="#000000" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Seven */}
      <section className="px-24 py-[120px] bg-gray-50">
        <div className="flex flex-col items-center justify-evenly w-full px-24 py-14 mb-[79px] bg-gray-50">
          <span className="text-sm text-gray-600 text-center">Our Blog</span>
          <h1 className="text-5xl font-sans font-light text-blue-900 leading-relaxed text-center ">
            Value proposition accelerator product management venture
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-start mb-[84px]">
          {/* Card 1 */}
          <div className="flex flex-col items-start gap-6">
            <img
              className="w-[300px] h-[209px]"
              src="/src/assets/card-1.png"
              alt="pessoa"
            />
            <div className="flex flex-col items-start gap-3 w-[300px] h-[139px]">
              <div className="flex items-center gap-3">
                <strong className="text-base font-sans text-blue-900">
                  Category
                </strong>
                <span className="text-base text-gray-600 font-light">
                  November 22, 2021
                </span>
              </div>
              <p className="text-xl font-normal text-black leading-8">
                Pitch termsheet backing validation focus release.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/src/assets/user-04.png" alt="Rachel Green" />
              <span className="text-base text-black font-normal">
                Chandler Bing
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-start gap-6">
            <img
              className="w-[300px] h-[209px]"
              src="/src/assets/work-02.png"
              alt="pessoa"
            />
            <div className="flex flex-col items-start gap-3 w-[300px] h-[139px]">
              <div className="flex items-center gap-3">
                <strong className="text-base font-sans text-blue-900">
                  Category
                </strong>
                <span className="text-base text-gray-600 font-light">
                  November 22, 2021
                </span>
              </div>
              <p className="text-xl text-black leading-8">
                Seed round direct mailing non-disclosure agreement graphical
                user interface rockstar.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/src/assets/user-05.png" alt="Chandler Bing" />
              <span className="text-base text-black font-normal">
                Rachel Green
              </span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-start gap-6">
            <img
              className="w-[300px] h-[209px]"
              src="/src/assets/card-4.png"
              alt="pessoa"
            />
            <div className="flex flex-col items-start gap-3 w-[300px] h-[139px]">
              <div className="flex items-center gap-3">
                <strong className="text-base font-sans text-blue-900">
                  Category
                </strong>
                <span className="text-base text-gray-600 font-light">
                  November 22, 2021
                </span>
              </div>
              <p className="text-xl text-black leading-8">
                Beta prototype sales iPad gen-z marketing network effects value
                proposition
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/src/assets/user-06.png" alt="Monica Geller" />
              <span className="text-base text-black font-normal">
                Monica Geller
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="px-14 py-4 border-2 border-blue-900 rounded-full text-xl font-bold text-blue-900">
            Load more
          </button>
        </div>
      </section>

      {/* Section Eight */}
      <section className="px-24 py-[120px] bg-gray-50">
        <div className="flex items-center justify-center w-full h-[391px] rounded-lg bg-blue-900 bg-ellipse bg-auto bg-no-repeat bg-right-top">
          <div className="flex flex-col items-center gap-12 w-[716px] h-[247px]">
            <h1 className="text-5xl font-light text-gray-50 leading-relaxed text-center ">
              An enterprise template to ramp up your company website
            </h1>
            <div className="flex items-center gap-5">
              <input
                className="bg-gray-50 text-black text-xl font-bold rounded-full px-14 py-4 w-96"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <button
                className="px-14 py-4 bg-green-400 text-blue-900 text-xl font-bold rounded-full"
                type="submit"
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nine  */}
      <section className="px-24 py-[120px] bg-gray-50">
        <div className="grid grid-rows-1 grid-cols-2 place-content-center">
          <div className="grid grid-cols-1 gap-8">
            <Logo color="dark" />
            <p className="text-gray-400 text-base w-[400px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <span className="text-gray-400 text-base">
              All rights reserved.
            </span>
          </div>
          <div className="grid grid-cols-3 justify-items-center">
            <div className="flex flex-col items-start gap-8">
              <strong className="text-xl text-black font-bold">Landing</strong>
              <a href="#" className="text-gray-400">
                Home
              </a>
              <a href="#" className="text-gray-400">
                Products
              </a>
              <a href="#" className="text-gray-400">
                Services
              </a>
            </div>
            <div className="flex flex-col items-start gap-8">
              <strong className="text-xl text-black font-bold">Company</strong>
              <a href="#" className="text-gray-400">
                Home
              </a>
              <a href="#" className="text-gray-400">
                Careers
              </a>
              <a href="#" className="text-gray-400">
                Services
              </a>
            </div>
            <div className="flex flex-col items-start gap-8">
              <strong className="text-xl text-black font-bold">
                Reaources
              </strong>
              <a href="#" className="text-gray-400">
                Blog
              </a>
              <a href="#" className="text-gray-400">
                Products
              </a>
              <a href="#" className="text-gray-400">
                Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
