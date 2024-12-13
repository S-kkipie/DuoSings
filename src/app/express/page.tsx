"use client";

import React from "react";
import io from "socket.io-client";
import "regenerator-runtime/runtime";
import { useEffect, useRef, useState } from "react";

import { Slider } from "@/components/ui/slider";
import Visualization from "../components/Visualization";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { useWordAnimations } from "@/hooks/useWordAnimations";
=======
import { useWordAnimations } from "@/lib/hooks/useWordAnimations";
>>>>>>> d35e6adba966ea2d9f3fe0433028e30e1f4c4435

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
  const [text, setText] = useState<string>("");

  return (
    <div className="mx-20 flex h-[600px] w-full flex-row gap-4">
      <div className="flex w-80 flex-col items-start gap-6 bg-opacity-10 px-4 py-4">
        <div>
          <p className="text-4xl font-semibold">DuoSing</p>
          <GradualSpacing
            text="Aprende palabras"
            delayMultiple={0.05}
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center text-3xl font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-lg">Signing Speed</p>
          <Slider
            defaultValue={[signingSpeed]}
            value={[signingSpeed]}
            onValueChange={(value) => setSigningSpeed(value[0])}
            min={20}
            max={100}
            step={1}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <p className="text-lg">Duration</p>
          <input
            value={duration}
            placeholder="Enter duration (in seconds)"
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded border border-white border-opacity-10 bg-transparent p-2 text-sm placeholder-white placeholder-opacity-50 focus:outline-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-start gap-1">
          <p className="text-lg">Content</p>
          <textarea
            value={text}
            placeholder="Enter text to sign"
            onChange={(e) => setText(e.target.value)}
            className="h-full w-full rounded border border-white border-opacity-10 bg-transparent p-2 text-sm placeholder-white placeholder-opacity-50 focus:outline-none"
          />
        </div>
        <Button
          className="flex w-full items-center justify-center rounded bg-secondary py-2 transition duration-300"
          onClick={() => socket!.emit("E-REQUEST-ANIMATION", text)}
        >
          Render
        </Button>
      </div>
      <Visualization
        full
        signingSpeed={signingSpeed}
        getNextWord={getNextWord}
        currentWord={currentWord}
      />
    </div>
  );
}
