export default function Home() {
  return (
    <div className="mx-auto grid px-16 pb-8 lg:flex lg:gap-8">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="mb-4 max-w-3xl text-4xl font-extrabold text-primary leading-8 tracking-tight md:text-5xl xl:text-6xl">
          Aprende y comunica en lenguaje de señas
          <div className="my-2 w-1 "/>
          sin límites ni barreras, de forma sencilla.
        </h1>
        <p className="my-6 max-w-2xl md:text-lg lg:mb-8 lg:text-xl">
          Descubre el poder de la comunicación sin barreras: nuestra app de
          traducción de señas, impulsada por inteligencia artificial, te conecta
          en tiempo real con el lenguaje de señas, facilitando la inclusión y
          comprensión.
        </p>
      </div>
      <div className="hidden  lg:flex lg:w-1/2">
        <img className="w-full" src="/hero.jpeg" alt="hero image" />
      </div>
    </div>
  );
}
