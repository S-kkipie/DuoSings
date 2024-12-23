import GradualSpacing from "@/components/ui/gradual-spacing";
import React from "react";
import { modules } from "@/lib/course";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import SparklesText from "@/components/ui/sparkles-text";

function Page() {
  return (
    <div className="mt-8">
      <GradualSpacing
        framerProps={{
          hidden: { opacity: 0.3, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        text="Estas listo para comenzar tu aprendizaje?"
        delayMultiple={0.05}
        className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
      />
      <SparklesText
        text="Empieza por lo fundamental y aprende a tu propio ritmo"
        className="animate-fade-in my-12 translate-y-[-1rem] text-center text-lg tracking-tight text-gray-400 [--animation-delay:400ms] md:text-xl"
      ></SparklesText>
      <div className="mx-16 my-16">
        <div className="flex flex-wrap justify-around gap-24">
          {modules.map((module, index) => (
            <BlurFade
              className="w-1/4"
              key={index}
              delay={0.25 + index * 0.05}
              inView
            >
              <MagicCard className="shadow-2xl">
                <CardHeader>
                  <Link href={module.href}>
                    <CardTitle>{module.title}</CardTitle>
                  </Link>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full px-5">
                    {module.lessons.map((lesson, index) => (
                      <AccordionItem key={index} value={"item-" + index}>
                        <div className="flex items-center">
                          <div className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
                          <AccordionTrigger>{lesson.title}</AccordionTrigger>
                        </div>
                        <AccordionContent className="px-4">
                          <div className="mb-2">
                            <h1>What you will do:</h1>
                            <p className="text-xs">{lesson.objetives}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
                <CardFooter className="mt">
                  <p>Duracion : {module.duration}</p>
                </CardFooter>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
