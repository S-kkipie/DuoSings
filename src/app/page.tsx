"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import SparklesText from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {modules} from "@/lib/course"
import { useWordAnimations } from "@/lib/hooks/useWordAnimations";
import { useEffect, useState } from "react";
import Visualization from "./components/Visualization";
const reviews = [
  {
    name: "Ana",
    username: "@ana",
    body: "¡Increíble! Facilita la comunicación en tiempo real.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Carlos",
    username: "@carlos",
    body: "Una herramienta esencial para la inclusión.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Sofia",
    username: "@sofia",
    body: "Fácil de usar y traducción precisa.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Luis",
    username: "@luis",
    body: "Revoluciona la forma de aprender lenguaje de señas.",
    img: "https://avatar.vercel.sh/luis",
  },
  {
    name: "María",
    username: "@maria",
    body: "Excelente app para mejorar la comunicación.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Una herramienta clave para la inclusión social.",
    img: "https://avatar.vercel.sh/pedro",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-transparent md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
  );
}
export default function Home() {
  const {
    currentWord,
    signingSpeed,
    setSigningSpeed,
    duration,
    setDuration,
    socket,
    getNextWord,
  } = useWordAnimations();

  useEffect(() => {
    if (socket) {
      socket.emit("E-REQUEST-ANIMATION", "HELLO WORLD");
    } else {
      console.warn("Socket is not initialized yet.");
    }
  }, [socket]);
  return (
    <div className="mx-auto flex-1 overflow-hidden">
      <section
        id="hero"
        className="relative mx-auto mt-12 flex flex-col items-center px-6 text-center md:px-8"
      >
        <div className="mb-16 px-10">
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
        <div className="relative mt-12 flex h-[500px] w-full max-w-[80rem] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Visualization
            full
            signingSpeed={signingSpeed}
            getNextWord={getNextWord}
            currentWord={currentWord}
          />
          <BorderBeam duration={12} delay={9} />
        </div>
        <MarqueeDemo />
        <h2 className="my-5 w-full text-left">
          Inspirado en el curso de{" "}
          <a
            className="font-bold text-primary"
            href="https://lifeprint.com/asl101/lessons/lessons.htm"
          >
            LIFEPRINT
          </a>
        </h2>
        <h1 className="mb-8 text-4xl font-bold text-primary">ROADMAP</h1>
        <Accordion type="single" collapsible className="w-2/3">
          <div className="relative flex flex-col justify-center overflow-hidden antialiased">
            <div className="mx-auto w-full px-4 md:px-6">
              <div className="flex flex-col justify-center divide-y [&>*]:py-4">
                <div className="mx-auto w-full">
                  <div className="relative space-y-8 border-dotted before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:translate-x-0">
                    {modules.map((module, index) => {
                      return (
                        <div className="relative">
                          <div className="mb-3 items-center md:flex md:space-x-4">
                            <div className="flex space-x-4 md:space-x-2 md:space-x-reverse">
                              <div className="flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-xl font-bold text-secondary shadow">
                                {index + 1}
                              </div>
                              <AccordionItem
                                className="relative !ml-14"
                                value={`item-` + index}
                              >
                                <AccordionTrigger className="text-xl font-semibold text-primary">
                                  {module.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="relative flex flex-col justify-center overflow-hidden antialiased">
                                    <div className="mx-auto w-full px-4 md:px-6">
                                      <div className="flex flex-col justify-center divide-y [&>*]:py-4">
                                        <div className="mx-auto w-full">
                                          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
                                            {module.lessons.map(
                                              (value: any, index: number) => {
                                                return (
                                                  <div className="relative">
                                                    <div className="mb-3 items-center md:flex md:space-x-4">
                                                      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                                                          <svg
                                                            className={
                                                              index === 0
                                                                ? "fill-primary"
                                                                : index ===
                                                                    module
                                                                      .lessons
                                                                      .length -
                                                                      1
                                                                  ? "fill-red-500"
                                                                  : "fill-slate-300"
                                                            }
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                          >
                                                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                                          </svg>
                                                        </div>
                                                        <h1 className="text-secondary md:w-28">
                                                          {value.week}
                                                        </h1>
                                                      </div>
                                                      <div className="ml-14">
                                                        <span className="font-bold text-primary">
                                                          {value.lesson}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="ml-14 rounded border p-4 shadow md:ml-44">
                                                      {value.activities}.
                                                      <br></br>
                                                      {value.homework}
                                                    </div>
                                                  </div>
                                                );
                                              },
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
        {/* <div className="relative flex flex-col justify-center overflow-hidden antialiased">
          <div className="mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col justify-center divide-y [&>*]:py-16">
              <div className="mx-auto w-full">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
                  {weeks.map((value: any, index: number) => {
                    return (
                      <div className="relative">
                        <div className="mb-3 items-center md:flex md:space-x-4">
                          <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                              <svg
                                className={
                                  index === 0
                                    ? "fill-primary"
                                    : index === 39
                                      ? "fill-red-500"
                                      : "fill-slate-300"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                              >
                                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                              </svg>
                            </div>
                            <h1 className="text-secondary md:w-28">
                              {value.week}
                            </h1>
                          </div>
                          <div className="ml-14">
                            <span className="font-bold text-primary">
                              {value.lesson}
                            </span>
                          </div>
                        </div>
                        <div className="ml-14 rounded border p-4 shadow md:ml-44">
                          {value.activities}.<br></br>
                          {value.homework}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
