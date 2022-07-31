import { Header } from "../components/Header";

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
    </>
  );
}
