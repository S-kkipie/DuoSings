import React from "react";
import { modules } from "@/lib/course";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
function page() {
  return (
    <div>
      <GradualSpacing
        framerProps={{
          hidden: { opacity: 0.3, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        text="Leccion 1"
        delayMultiple={0.05}
        className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
      />
      <div className="mt-5">
        <div className="w-72 rounded-md border">
          <div className="p-8">
            <h4 className="mb-4 text-xl font-bold leading-none">Objetivos</h4>
            {modules[0].lessons[0].objetives!.map((obj, index) => (
              <div key={index}>
                <div  className="text-sm">{obj}</div>
                <Separator  className="my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
