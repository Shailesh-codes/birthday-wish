import React, { useState, useEffect, useRef } from "react";
import mini from "../assets/mini.jpeg";
import img3 from "../assets/img.jpeg";
import gulabi from "../assets/gulabi.mp3";
import { useNavigate } from "react-router-dom";

const Last = () => {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(gulabi));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondImage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowSecondImage(true), 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      audioRef.current.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,192,203,0.3) 100%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10
                }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white to-pink-100 text-transparent bg-clip-text">
              Meri Pyari _____❤️
            </span>
          </h1>
          <div className="w-32 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        {/* Card Container with Decorative Frame */}
        <div className="relative p-8">
          {/* Decorative Frame */}
          <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/30 to-pink-300/30 rounded-2xl blur-lg"></div>

          {/* Existing Flip Card */}
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-100 to-rose-200 p-8 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h2 className="text-2xl font-bold text-rose-700 mb-4">
                    I Love You So Much 💝
                  </h2>
                  <p className="text-rose-600">Hover me!</p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <div className="w-full h-full bg-gradient-to-bl from-pink-200 via-rose-100 to-pink-200 p-8 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4">💖</div>
                  <h2 className="text-2xl font-bold text-rose-700 mb-4">
                    {" "}
                    मैं आपसे बोहत ज़्यादा प्यार करता हु ❤️
                  </h2>
                  <p className="text-rose-600">Beautiful!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
        </div>

        {/* Floating Hearts */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute heart-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1 + 0.5}rem`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {["❤️", "💖", "💝"][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div>

      {/* Updated Premium Music Player Button */}
      <div className="fixed bottom-2 right-6 z-50">
        <button
          onClick={toggleAudio}
          className="group relative hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          <div className="relative px-6 py-3 bg-black rounded-full leading-none flex items-center">
            <span className="flex items-center space-x-3">
              {isPlaying ? (
                <>
                  <span className="text-pink-600 group-hover:text-pink-400 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-100 group-hover:text-pink-100 transition duration-300">
                    अब बंद मत करना 🥲
                  </span>
                </>
              ) : (
                <>
                  <span className="text-pink-600 group-hover:text-pink-400 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-100 group-hover:text-pink-100 transition duration-300">
                    चालू करो ❤️
                  </span>
                </>
              )}
            </span>
          </div>
        </button>
      </div>

      {/* Now Playing Indicator */}
      {isPlaying && (
        <div className="fixed bottom-28 right-8 z-50">
          <div className="bg-black/80 rounded-lg px-4 py-2 text-white text-sm flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-4 bg-pink-500 rounded-full animate-music-bar"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-pink-300">Now Playing: Gulabi</span>
          </div>
        </div>
      )}

      {/* Main content */}
      <div
        className={`relative z-10 transform transition-all duration-1000 ${showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        {/* First Image Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1
            className="text-2xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r 
          text-white-900 bg-clip-text heartbeat"
          >
            Meri Minimalist ❤️
          </h1>
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={mini}
                alt="mini"
                className="w-full h-auto object-cover rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110 animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-0 right-0 text-center text-white text-xl font-bold animate-pulse">
                  My Beautiful Love 💝
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Image Section */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${showSecondImage
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
            }`}
        >
          <div className="group relative transform hover:scale-105 transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="img3"
                className="w-full h-auto object-cover rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110 animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-0 right-0 text-center text-white text-xl font-bold animate-pulse">
                  Forever Together 💑
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <button
            onClick={() => navigate("/end")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Yeh pakka last page hai 🥲
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 8s infinite linear;
        }

        .animate-float-random {
          animation: float-random 15s infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
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
          50% {
            background-size: 400% 400%;
            background-position: right bottom;
          }
        }

        @keyframes music-bar {
          0%,
          100% {
            height: 4px;
            opacity: 0.7;
          }
          50% {
            height: 16px;
            opacity: 1;
          }
        }

        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }

        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 300px;
          perspective: 1000px;
          position: relative;
          z-index: 10;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .heart-float {
          position: absolute;
          animation: float 5s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        .page-transition-enter {
          opacity: 0;
          transform: translateY(20px);
        }

        .page-transition-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 500ms, transform 500ms;
        }

        @keyframes tilt {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-tilt {
          animation: tilt 10s infinite ease-in-out;
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Last;
