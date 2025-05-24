"use client"

import { useEffect, useRef, useState } from "react"
import Confetti from "react-confetti"

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(() => {
        const diff = targetDate.getTime() - new Date().getTime()
        return diff > 0 ? diff : 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = targetDate.getTime() - new Date().getTime()
            setTimeLeft(diff > 0 ? diff : 0)
        }, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
    const seconds = Math.floor((timeLeft / 1000) % 60)

    return { days, hours, minutes, seconds, isFinished: timeLeft === 0 }
}

export default function CountdownPage() {
    const target = new Date(2025, 4, 24, 19, 0, 0)
    const countdown = useCountdown(target)
    const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

    // For responsive confetti
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        if (typeof window !== "undefined") {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Ubah: countdown selesai saat detik <= 1
    const isCountdownDone = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds <= 0;
    // Animasi zoom in zoom out pada detik <= 10
    // Zoom in saat detik ganjil, zoom out saat detik genap (hanya pada 10 detik terakhir)
    const isZooming = !isCountdownDone && countdown.seconds <= 10 && countdown.minutes === 0 && countdown.hours === 0 && countdown.days === 0;
    const zoomClass = isZooming
        ? countdown.seconds % 2 === 1
            ? "animate-zoom-in"
            : "animate-zoom-out"
        : "";
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [audioPlayed, setAudioPlayed] = useState(false);

    useEffect(() => {
        if (isCountdownDone && !audioPlayed) {
            setAudioPlayed(true);
            // Play audio if countdown is done
            if (audioRef.current) {
                // Try to play, catch error if blocked
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => {});
            }
        }
        if (!isCountdownDone && audioPlayed) {
            setAudioPlayed(false);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [isCountdownDone, audioPlayed]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Hidden audio for countdown finish */}
            <audio
                ref={audioRef}
                src="/opening.mp3"
                preload="auto"
                hidden
            />
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
                {/* Countdown Title */}
                {!isCountdownDone && (
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 text-center">
                        Menuju Pendaftaran M111
                    </h1>
                )}
                {/* Countdown or Result */}
                {!isCountdownDone ? (
                    <div className={`flex gap-4 md:gap-8 mb-8 transition-transform duration-300 ${zoomClass}`}>
                        {/* <div className="flex flex-col items-center bg-white/90 rounded-2xl px-6 py-4 text-blue-900 font-extrabold text-3xl md:text-5xl shadow-lg min-w-[70px]">
                            <span>{countdown.days}</span>
                            <span className="text-base md:text-lg font-normal mt-1">Hari</span>
                        </div> */}
                        <div className="flex flex-col items-center bg-white/90 rounded-2xl px-6 py-4 text-blue-900 font-extrabold text-3xl md:text-5xl shadow-lg min-w-[70px]">
                            <span>{String(countdown.hours).padStart(2, "0")}</span>
                            <span className="text-base md:text-lg font-normal mt-1">Jam</span>
                        </div>
                        <div className="flex flex-col items-center bg-white/90 rounded-2xl px-6 py-4 text-blue-900 font-extrabold text-3xl md:text-5xl shadow-lg min-w-[70px]">
                            <span>{String(countdown.minutes).padStart(2, "0")}</span>
                            <span className="text-base md:text-lg font-normal mt-1">Menit</span>
                        </div>
                        <div className="flex flex-col items-center bg-white/90 rounded-2xl px-6 py-4 text-blue-900 font-extrabold text-3xl md:text-5xl shadow-lg min-w-[70px]">
                            <span>{String(countdown.seconds).padStart(2, "0")}</span>
                            <span className="text-base md:text-lg font-normal mt-1">Detik</span>
                        </div>
                    </div>
                ) : (
                    <div className="relative flex flex-col items-center">
                        <div className="text-white font-extrabold text-4xl md:text-6xl mb-4 drop-shadow-lg animate-pop-infinite">
                            Pendaftaran M111 telah dibuka!
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes zoomIn {
                    0% { transform: scale(0.95); }
                    50% { transform: scale(1.08); }
                    100% { transform: scale(1); }
                }
                @keyframes zoomOut {
                    0% { transform: scale(1.08); }
                    50% { transform: scale(0.95); }
                    100% { transform: scale(1); }
                }
                .animate-zoom-in {
                    animation: zoomIn 0.5s forwards;
                }
                .animate-zoom-out {
                    animation: zoomOut 0.5s forwards;
                }
                @keyframes popTextInfinite {
                    0% { transform: scale(0.8); opacity: 0.5;}
                    50% { transform: scale(1.1); opacity: 1;}
                    100% { transform: scale(0.8); opacity: 0.5;}
                }
                .animate-pop-infinite {
                    animation: popTextInfinite 2s cubic-bezier(0.4,0,0.2,1) infinite;
                }
            `}</style>
        </div>
    )
}