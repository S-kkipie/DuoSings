import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Particles from "@/components/ui/particles";
import SparklesText from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
 
export default function Home() {
  
  return (
    // <div className="mx-auto grid px-16 pb-8 lg:flex lg:gap-8">
    //   <div className="mr-auto place-self-center lg:col-span-7">
    //     <h1 className="mb-4 max-w-3xl text-4xl font-extrabold text-primary leading-8 tracking-tight md:text-5xl xl:text-6xl">
    //       Aprende y comunica en lenguaje de señas
    //       <div className="my-2 w-1 "/>
    //
    //     </h1>
    //     <p className="my-6 max-w-2xl md:text-lg lg:mb-8 lg:text-xl">
    //       Descubre el poder de la comunicación sin barreras: nuestra app de
    //       traducción de señas, impulsada por inteligencia artificial, te conecta
    //       en tiempo real con el lenguaje de señas, facilitando la inclusión y
    //       comprensión.
    //     </p>
    //   </div>
    //   <div className="hidden  lg:flex lg:w-1/2">
    //     <img className="w-full" src="/hero.jpeg" alt="hero image" />
    //   </div>
    // </div>
    <div className="mx-auto flex-1 overflow-hidden">
      <Particles
        className="fixed inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      <section
        id="hero"
        className="relative mx-auto mt-12 max-w-[80rem] px-6 text-center md:px-8"
      >
        <div className="mb-16 max-w-full px-10">
          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            text="Duosing es la nueva forma"
            delayMultiple={0.05}
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />
          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            text="de aprender"
            delayMultiple={0.15}
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />

          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            delayMultiple={0.1}
            text="lenguaje de señas"
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />
        </div>
        <SparklesText
          text="Descubre la comunicación sin barreras con nuestra app de traducción de
          señas impulsada por IA"
          className="animate-fade-in mb-12 translate-y-[-1rem] text-center text-lg tracking-tight text-gray-400 [--animation-delay:400ms] md:text-xl"
        ></SparklesText>
        <button className="animate-fade-in inline-flex h-9 translate-y-[-1rem] items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors ease-in-out [--animation-delay:600ms] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-black">
          <span>Crea una cuenta gratis! </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="relative mt-12 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <img src="/duoHero.jpeg" alt="" />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </section>
    </div>
  );
}
