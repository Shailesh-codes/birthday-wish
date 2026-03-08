import React, { useState, useEffect, useRef } from "react";
import img4 from "../assets/img4.jpeg";
import love from "../assets/songbirth.mp3";
import "../global.css";
import { useNavigate } from "react-router-dom";

const Wish = () => {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(love));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLastPage = () => {
    navigate("/last");
  };

  useEffect(() => {
    // Animate image entrance
    setTimeout(() => setShowImage(true), 500);

    // Cleanup audio
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-purple-200 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full animate-spin-slow opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute w-full h-full animate-reverse-spin-slow opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-rose-500 to-red-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main content container */}
      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          showImage ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text animate-pulse">
          Happy Birthday My Love ❤️
        </h1>

        {/* Date display */}
        <div className="text-center mb-8">
          <span className="text-2xl font-semibold text-pink-600 bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm shadow-lg">
            11/02/2025 💝
          </span>
        </div>

        {/* Image container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          <div className="relative max-w-md mx-auto overflow-hidden rounded-xl">
            <div className="group relative transform transition-all duration-500 hover:scale-105">
              <img
                src={img4}
                alt="img4"
                className="w-full h-auto object-cover rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-xl font-bold">
                    Forever Yours ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Music control */}
        <button
          onClick={toggleMusic}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full 
          hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-3 
          shadow-lg mx-auto transform hover:scale-105 hover:shadow-xl backdrop-blur-sm"
        >
          <span className="text-sm">
            {isPlaying ? "🎵 Chalne do band mat karna..👇" : "▶️ Chalu Karo"}
          </span>
        </button>
      </div>
      <div className="mt-9">
        <button
          onClick={handleLastPage}
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 
          text-white rounded-full hover:from-pink-600 hover:to-purple-600 
          transition-all duration-300 transform hover:scale-105 shadow-lg 
          hover:shadow-pink-500/50 flex items-center gap-2 overflow-hidden"
        >
          <span className="relative z-10 font-semibold">Aakhri baar</span>
          <span className="relative z-10">❤️</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Floating elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-random"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        >
          {i % 3 === 0 ? "✨" : i % 3 === 1 ? "💝" : "🌟"}
        </div>
      ))}

      {/* Add Butterflies */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`butterfly-${i}`}
          className="absolute animate-butterfly"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 15}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
          }}
        >
          🦋
        </div>
      ))}

      {/* Add this inside your main container */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `ping ${2 + Math.random() * 2}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Add this to your global.css or as a style tag */}
      <style jsx>{`
        @keyframes float-random {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -50px) rotate(90deg);
          }
          50% {
            transform: translate(100px, 0) rotate(180deg);
          }
          75% {
            transform: translate(50px, 50px) rotate(270deg);
          }
        }

        .animate-float-random {
          animation: float-random 15s infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-reverse-spin-slow {
          animation: spin 25s linear infinite reverse;
        }

        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }

        @keyframes gradient-xy {
          0%,
          100% {
            background-size: 400% 400%;
            background-position: left top;
          }
          25% {
            background-size: 400% 400%;
            background-position: right top;
          }
          50% {
            background-size: 400% 400%;
            background-position: right bottom;
          }
          75% {
            background-size: 400% 400%;
            background-position: left bottom;
          }
        }

        @keyframes butterfly {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-50px) translateX(50px) rotate(20deg)
              scale(1.1);
          }
          50% {
            transform: translateY(-100px) translateX(100px) rotate(-10deg)
              scale(1);
          }
          75% {
            transform: translateY(-50px) translateX(150px) rotate(10deg)
              scale(1.1);
          }
        }

        .animate-butterfly {
          animation: butterfly 20s ease-in-out infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .hover-glow:hover {
          box-shadow: 0 0 15px rgba(255, 182, 193, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Wish;
