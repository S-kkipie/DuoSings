import React from "react";
import { modules } from "@/lib/course";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function Page() {
  const objectives = [
    {
      title: "Recognize and interpret basic greetings and farewells in ASL.",
      description: "Learn the fundamental gestures and their meanings in ASL.",
      steps: [
        "Observe the following image sequences of basic greetings.",
        "Read the descriptions accompanying each gesture.",
        "Match the signs with their meanings in a practice exercise.",
      ],
      image: "learn/images/greetings.jpeg",
    },
    {
      title: "Perform greetings and farewells using appropriate facial expressions.",
      description: "Master the use of facial expressions to enhance communication.",
      steps: [
        "Watch the video below demonstrating greetings with facial expressions.",
        "Practice in front of a mirror to replicate the expressions and signs.",
        "Record yourself and compare with the video example.",
      ],
      image: "/images/facial-expressions.png",
    },
    {
      title: "Understand the cultural significance of greetings and farewells in Deaf interactions.",
      description: "Explore the cultural importance of greetings in the Deaf community.",
      steps: [
        "Read the article below about the cultural importance of greetings in the Deaf community.",
        "Reflect on how these interactions differ from other cultures.",
        "Write a short summary of what you learned.",
      ],
      image: "/images/culture.png",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <GradualSpacing
        framerProps={{
          hidden: { opacity: 0.3, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        text="Lección 1: Saludando en ASL"
        delayMultiple={0.05}
        className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
      />
      
      <div className="mt-8 flex flex-col md:flex-row gap-6 px-6 h-full">
        {/* Objectives Section */}
        <div className="w-72 rounded-md ">
          <div className="w-full rounded-md border  ">
            <div className="p-8">
              <h4 className="mb-4 text-xl font-bold leading-none">Objetivos</h4>
              {objectives.map((objective, index) => (
                <div key={index}>
                  <h5 className="">
                    {objective.title}
                  </h5>
                  <p className="text-sm text-gray-400">{objective.description}</p>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Objectives Section */}
        <div className="w-full md:w-2/3 space-y-6 h-full">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-700 bg-gray-950 p-6 shadow-lg h-full"
            >
              <h4 className="text-xl font-bold text-primary mb-4">
                {objective.title}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {objective.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <span className="mr-2 text-primary">✔</span>
                    {step}
                  </li>
                ))}
              </ul>
              <img
                src={objective.image}
                alt={objective.title}
                className="w-full mt-4 rounded-lg shadow-md"
              />
              <div className="mt-4 flex justify-end">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transition-all duration-200 text-base font-medium px-6 py-2"
                >
                  Probar con cámara
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
