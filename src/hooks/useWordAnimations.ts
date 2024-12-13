import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useWordAnimations(
  url: string = "ws://localhost:1234", // Puedes parametrizar la URL
  initialSigningSpeed = 50,
  initialDuration = "3"
) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const wordAnimationsToPlay = useRef<string[][]>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [signingSpeed, setSigningSpeed] = useState<number>(initialSigningSpeed);
  const [duration, setDuration] = useState<string>(initialDuration);

  useEffect(() => {
    const socketInstance = io(url);

    socketInstance.on("E-ANIMATION", (animations) => {
      try {
        // Intenta procesar las animaciones
        if (duration !== "0") {
          setSigningSpeed(
            Math.floor(animations[0][1].length / parseFloat(duration))
          );
        }
    
        // Agrega las animaciones al estado
        wordAnimationsToPlay.current = [
          ...wordAnimationsToPlay.current,
          ...animations,
        ];
      } catch (error) {
      }
    });

    setSocket(socketInstance);

    return () => {
      // Limpiar el socket al desmontar
      socketInstance.disconnect();
    };
  }, [url, duration]);

  function getNextWord(): string | null {
    if (!wordAnimationsToPlay.current.length) {
      return null;
    }

    const animation = wordAnimationsToPlay.current.shift();
    if (animation) {
      setCurrentWord(animation[0]);
      return animation[1];
    }
    return null;
  }

  return {
    socket, // Exponer el socket
    currentWord,
    signingSpeed,
    setSigningSpeed,
    duration,
    setDuration,
    getNextWord,
  };
}
