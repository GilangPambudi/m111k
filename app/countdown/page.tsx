"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - new Date().getTime();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds, isFinished: timeLeft === 0 };
}

export default function CountdownPage() {
  const target = new Date(2025, 4, 28, 19, 0, 0);
  const countdown = useCountdown(target);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  // For responsive confetti
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isCountdownDone =
    countdown.days === 0 &&
    countdown.hours === 0 &&
    countdown.minutes === 0 &&
    countdown.seconds <= 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Confetti */}
      {isCountdownDone && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={800}
          recycle={true}
          gravity={0.25}
          wind={0.01}
          run={true}
        />
      )}
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/landing-01.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6) blur(2px)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        {!isCountdownDone && (
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 text-center">
            Menuju Pendaftaran M111
          </h1>
        )}
        {!isCountdownDone ? (
          <div className="flex gap-4 md:gap-8 mb-8">
             <Card className="bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl md:text-5xl font-extrabold">
                  {String(countdown.days).padStart(2, "0")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-base md:text-lg font-normal mt-1">
                  Hari
                </span>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl md:text-5xl font-extrabold">
                  {String(countdown.hours).padStart(2, "0")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-base md:text-lg font-normal mt-1">
                  Jam
                </span>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl md:text-5xl font-extrabold">
                  {String(countdown.minutes).padStart(2, "0")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-base md:text-lg font-normal mt-1">
                  Menit
                </span>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900 text-3xl md:text-5xl font-extrabold">
                  {String(countdown.seconds).padStart(2, "0")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-base md:text-lg font-normal mt-1">
                  Detik
                </span>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <div className="text-white font-extrabold text-4xl md:text-6xl mb-4 drop-shadow-lg animate-pop-infinite">
              Pendaftaran M111 telah dibuka!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}