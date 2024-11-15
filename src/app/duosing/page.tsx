"use client";

import React from "react";
import io from "socket.io-client";
import "regenerator-runtime/runtime";
import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Camera from "../components/Camera";
import { Slider } from "@/components/ui/slider";
import Transcription from "../components/Transcription";
import Visualization from "../components/Visualization";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socket = io("ws://localhost:1234");

export default function Home() {
  const wordAnimationsToPlay = useRef<any>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [signingSpeed, setSigningSpeed] = useState<number>(50);

  const [ASLTranscription, setASLTranscription] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("R-TRANSCRIPTION", (data) => {
      setASLTranscription(data);
      console.log(data);
    });

    socket.on("E-ANIMATION", (animations) => {
      wordAnimationsToPlay.current = [
        ...wordAnimationsToPlay.current,
        ...animations,
      ];
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      socket.emit("E-REQUEST-ANIMATION", transcript.toLowerCase());
      resetTranscript();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [transcript]);

  function getNextWord(): string | null {
    if (!wordAnimationsToPlay.current.length) {
      return null;
    }

    let animation = wordAnimationsToPlay.current.shift();
    setCurrentWord(animation[0]);

    return animation[1];
  }

  function clear() {
    socket.emit("R-CLEAR-TRANSCRIPTION");
  }

  return (
    <div className="flex flex-col gap-20 p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center rounded border">
          <h1 className="text-3xl font-bold text-primary mt-6 mb-4">ASL Fingerspell → English</h1>
          <div className="flex w-full items-center justify-center gap-4 p-6">
            <Camera />
            <Separator orientation="vertical" className="h-[480px]" />
            <p className="w-1/3 min-w-96 pl-10 text-4xl">{ASLTranscription}</p>
          </div>

          <div className="flex items-center justify-end gap-4 bg-opacity-10 px-4 py-4">
            <Checkbox id="auto-correct" />
            <label htmlFor="auto-correct">AutoCorrect</label>
            <Button
              onClick={clear}
              className="cursor-pointer rounded border border-opacity-20 px-4 py-1 transition duration-300 hover:bg-opacity-10"
            >
              <p className="select-none text-lg">Clear</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl">English → ASL</h1>
        <div className="flex h-full w-full flex-col rounded border">
          <Visualization
            signingSpeed={signingSpeed}
            getNextWord={getNextWord}
            currentWord={currentWord}
          />
          <Transcription content={transcript} />
          <div className="flex flex-col items-start gap-2 bg-opacity-10 px-4 py-4">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg">Signing Speed</p>
              <div className="flex items-center gap-4">
                <div
                  onClick={() =>
                    SpeechRecognition.startListening({ continuous: true })
                  }
                  className="cursor-pointer rounded border border-opacity-20 px-4 py-1 transition duration-300 hover:bg-opacity-10"
                >
                  <p className="select-none">Start</p>
                </div>
                <Checkbox id="asl" />
                <label htmlFor="asl">ASL Gloss</label>
              </div>
            </div>

            <Slider
              defaultValue={[signingSpeed]}
              value={[signingSpeed]}
              onValueChange={(value) => setSigningSpeed(value[0])}
              min={20}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
