import React from "react";
import { modules } from "@/lib/course";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function Page() {
  const objectives = [
    {
      title: "At Work",
      description: "Learn and perform ASL signs for professions, tools, and workplace scenarios.",
      steps: [
        "Learn and perform ASL signs for professions, tools, and workplace scenarios.",
        "Imitate signs with camera validation to receive feedback and scores.",
        "Understand key workplace-related signs for effective communication.",
      ],
      image: "/images/at-work.png",
    },
    {
      title: "At School",
      description: "Familiarize with ASL signs for school-related objects and concepts.",
      steps: [
        "Familiarize with ASL signs for school-related objects and concepts.",
        "Use camera feedback to master signs for subjects and academic activities.",
        "Practice integrating school vocabulary into meaningful interactions.",
      ],
      image: "/images/at-school.png",
    },
    {
      title: "Emergency Signs",
      description: "Learn critical signs for emergency situations like asking for help or calling authorities.",
      steps: [
        "Learn critical signs for emergency situations like asking for help or calling authorities.",
        "Simulate emergency scenarios to practice rapid and accurate signing.",
        "Build confidence in using ASL during stressful situations.",
      ],
      image: "/images/emergency-signs.png",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <GradualSpacing
        framerProps={{
          hidden: { opacity: 0.3, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        text="Module 3: ASL in Everyday Contexts"
        delayMultiple={0.05}
        className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent text-4xl md:text-6xl [--animation-delay:200ms] dark:from-white dark:to-white/40"
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
