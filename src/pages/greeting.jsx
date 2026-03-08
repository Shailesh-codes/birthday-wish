import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import birthdaySong from "../assets/song.mp3";

const Greeting = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(birthdaySong));

  // Split the message into lines for better presentation
  const lines = [
    "Your Msg"
  ];

  useEffect(() => {
    // Show card with initial animation
    setTimeout(() => setShowCard(true), 500);

    // Start playing music
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    audioRef.current
      .play()
      .catch((err) => console.log("Audio autoplay failed:", err));

    // Line by line animation
    const lineInterval = setInterval(() => {
      setCurrentLineIndex((prev) => {
        if (prev < lines.length - 1) {
          return prev + 1;
        }
        clearInterval(lineInterval);
        return prev;
      });
    }, 1000); // Slower timing for reading

    return () => {
      clearInterval(lineInterval);
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextClick = () => {
    navigate("/wish", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-purple-300 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="hearts"></div>
        <div className="sparkles"></div>
      </div>

      {/* Main content */}
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Title with enhanced animation */}
        <div className="text-center mb-8 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
            To My Dear _____ ✨
          </h1>
          <div className="absolute inset-0 blur-lg opacity-50 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500"></div>
        </div>

        {/* Updated Message Card with line-by-line animation */}
        <div className="relative group">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 
            group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
          ></div>
          <div className="relative bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4">
                {lines.slice(0, currentLineIndex + 1).map((line, index) => (
                  <p
                    key={index}
                    className="text-gray-800 leading-relaxed text-lg md:text-xl opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: "1s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <span className="inline-block animate-blink">|</span>
            </div>
          </div>
        </div>

        {/* Controls with enhanced design */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={toggleMusic}
            className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-full 
            hover:bg-white/50 transition-all transform hover:scale-105 shadow-lg
            flex items-center gap-2 text-purple-700 font-medium group"
          >
            <span className="group-hover:rotate-12 transition-transform">
              {isPlaying ? "🎵" : "▶️"}
            </span>
            <span>
              {isPlaying ? "Stop" : "Chalu karo"}
            </span>
          </button>

          <button
            onClick={handleNextClick}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
            text-white rounded-full hover:from-pink-600 hover:to-purple-600 
            transition-all transform hover:scale-105 shadow-lg
            flex items-center gap-2 font-medium group"
          >
            <span>Continue to Surprise</span>
            <span className="group-hover:translate-x-1 transition-transform">
              ✨
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: left;
          }
          50% {
            background-position: right;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 3s linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stars,
        .hearts,
        .sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hearts::before,
        .sparkles::before {
          content: "❤️";
          position: absolute;
          animation: float 20s linear infinite;
        }

        .sparkles::before {
          content: "✨";
        }

        @keyframes float {
          0% {
            transform: translate(0, 100vh) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translate(100vw, -100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Greeting;
