import { Header } from "../components/Header";
import { ArrowRight } from "phosphor-react";

export function Home() {
  return (
    <>
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
              <button className="py-2 px-10 rounded-full bg-green-400 text-blue-900 font-bold text-sm hover:opacity-90 transition-colors">
                Buy template
              </button>
              <button className="py-2 px-10 rounded-full border border-gray-50 text-gray-50 font-bold text-sm hover:bg-gray-50 hover:text-blue-900 transition-colors">
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
      <section className="px-24 py-14">
        <div className="flex flex-col items-center justify-evenly w-full px-24 py-14 bg-gray-50">
          <span className="text-sm text-gray-600 text-center">Our Service</span>
          <h1 className="text-5xl font-sans font-light text-blue-900 leading-relaxed text-center w-[50rem]">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-center">
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
    </>
  );
}
