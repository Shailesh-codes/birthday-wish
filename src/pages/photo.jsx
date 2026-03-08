import React, { useState, useRef, useEffect } from "react";
import video from "../assets/video.mp4";
import { Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Photo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const navigate = useNavigate();
  const clickNext = () => {
    navigate("/greeting");
  };

  useEffect(() => {
    // Animate card opening after a short delay
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex-col gap-2 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center p-4">
      <div className={`greeting-card ${isOpen ? "open" : ""}`}>
        {/* Card Front */}
        <div className="card-front  bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg shadow-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-bounce">
            Happy Birthday ____! 🎂
          </h1>
          <p className="text-white text-lg">
            Click to Open Your Special Message ❤️
          </p>
        </div>

        {/* Card Inside */}
        <div className="card-inside  bg-white rounded-lg shadow-2xl p-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-3">
              A Special Moment With You 💝
            </h2>
            <div className="group relative rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full rounded-xl"
                autoPlay
                loop
                muted
                src={video}
              />
              <div
                className={`absolute group-hover:flex ${
                  isPlaying ? "hidden" : "flex"
                } inset-0 items-center justify-center bg-black/30`}
              >
                <div className="border-2 rounded-full p-2 border-white/50">
                  <button
                    onClick={togglePlayPause}
                    className="bg-white/10 backdrop-blur-md p-7 rounded-full hover:bg-white/30 transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="text-white" size={24} />
                    ) : (
                      <Play className="text-white" size={24} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center mt-3 text-pink-600  bg-clip-text rounded-xl text-sm">
              May your day be filled with joy, laughter, and beautiful memories!
              🎉
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-300"
                onClick={clickNext}
              >
                Click Here ❤️
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .greeting-card {
          perspective: 2000px;
          width: 100%;
          max-width: 800px;
        }

        .card-front,
        .card-inside {
          backface-visibility: hidden;
          transition: transform 6s ease;
        }

        .card-front {
          position: absolute;
          width: 100%;
          height: 90%;
          z-index: 1;
          transform-origin: left;
        }

        .greeting-card.open .card-front {
          transform: rotateY(-180deg);
        }

        .card-inside {
          transform: rotateY(0);
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Photo;
