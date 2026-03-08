import React, { useState, useRef, useEffect } from "react";
import vid from "../assets/vid.mp4";
import ishq from "../assets/ishq.mp3";
import img2 from "../assets/img2.jpeg";
import { Play, Pause, Heart, Music, Stars } from "lucide-react";

const End = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(new Audio(ishq));
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Handle video playback
  const playVideo = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
            setVideoEnded(false);
          })
          .catch((error) => {
            console.error("Video play failed:", error);
            setIsVideoPlaying(false);
          });
      }
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setIsVideoPlaying(false);
  };

  // Toggle video
  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        playVideo();
      }
    }
  };

  // Handle audio end and restart video
  const handleAudioEnd = () => {
    setIsAudioPlaying(false);
    setVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to start
      playVideo();
    }
  };

  // Toggle audio
  const toggleAudio = (e) => {
    e.stopPropagation();
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  useEffect(() => {
    // Initialize video
    if (videoRef.current) {
      videoRef.current.muted = true;
      playVideo();
      videoRef.current.muted = false;
    }

    // Initialize audio and add ended event listener
    audioRef.current.loop = false; // Disable loop to handle end event
    audioRef.current.addEventListener('ended', handleAudioEnd);

    setTimeout(() => setShowContent(true), 500);

    // Cleanup
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      audioRef.current.pause();
      audioRef.current.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300 py-10 px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle, ${
                ['rgba(255,182,193,0.4)', 'rgba(255,192,203,0.4)', 'rgba(255,228,225,0.4)'][
                  Math.floor(Math.random() * 3)
                ]
              } 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating Hearts */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-200/30 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-lg blur"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 relative animate-pulse">
            <span className="bg-gradient-to-r from-white to-pink-100 text-transparent bg-clip-text">
              Our Beautiful Journey ❤️
            </span>
          </h1>
          <div className="flex justify-center gap-2 items-center">
            <Stars className="text-pink-200 animate-spin-slow" size={24} />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
            <Heart className="text-pink-200 animate-pulse" size={24} />
          </div>
        </div>

        {/* Enhanced Content Container */}
        <div className="relative p-8 rounded-3xl backdrop-blur-sm">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          
          {/* Video/Image Container with Enhanced Effects */}
          <div className="relative group">
            {!videoEnded ? (
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                
                {/* Video Container with Enhanced Play Button */}
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="relative rounded-2xl w-full shadow-2xl"
                    src={vid}
                    onEnded={handleVideoEnd}
                    playsInline
                    preload="auto"
                  />
                  
                  {!isVideoPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300"
                      onClick={toggleVideo}
                    >
                      <div className="transform transition-all duration-300 hover:scale-110">
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
                          <Play 
                            className="text-white w-12 h-12 ml-1 drop-shadow-lg" 
                            fill="white"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative group transform hover:scale-105 transition-all duration-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={geet}
                    alt="Geet"
                    className="w-full h-auto object-cover rounded-xl transform transition-all duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-2xl font-bold">Forever & Always 💝</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Music Player Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleAudio}
            className="group relative hover:scale-110 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative px-8 py-4 bg-black/80 backdrop-blur-md rounded-full leading-none flex items-center border border-white/10">
              <span className="flex items-center space-x-4">
                {isAudioPlaying ? (
                  <>
                    <Pause className="text-pink-500" size={28} />
                    <Music className="text-pink-400 animate-bounce" size={20} />
                  </>
                ) : (
                  <Play className="text-pink-500" size={28} />
                )}
                <span className="text-white group-hover:text-pink-100 transition duration-300 text-lg">
                  {isAudioPlaying ? "Now Playing: Ishq ❤️" : "Play Music 🎵"}
                </span>
              </span>
            </div>
          </button>
        </div>

        {/* Enhanced Now Playing Indicator */}
        {isAudioPlaying && (
          <div className="fixed bottom-28 right-8 z-50">
            <div className="bg-black/80 backdrop-blur-md rounded-lg px-6 py-3 text-white flex items-center space-x-3 border border-white/10 shadow-xl">
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-8 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full animate-music-bar"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <span className="text-pink-300 text-lg flex items-center gap-2">
                <Music className="animate-spin-slow" size={16} />
                Ishq Wala Love ❤️
              </span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes float-heart {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-30px) scale(1.1) rotate(10deg); }
        }

        @keyframes music-bar {
          0%, 100% { height: 8px; opacity: 0.7; }
          50% { height: 32px; opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float { animation: float 20s infinite ease-in-out; }
        .animate-float-heart { animation: float-heart 3s infinite ease-in-out; }
        .animate-music-bar { animation: music-bar 1s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
};

export default End;
