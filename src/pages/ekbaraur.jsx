import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import confetti from 'canvas-confetti';

const Ekbaraur = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Trigger confetti before navigation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => navigate("/surprise"), 300);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center">
      <div className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-center gap-4 mb-6 animate-bounce">
          <FaHeart className="text-6xl text-red-500" />
          <FaHeart className="text-6xl text-pink-500" />
          <FaHeart className="text-6xl text-purple-500" />
        </div>
        <button 
          onClick={handleClick}
          className="px-8 py-4 text-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
          hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
        >
          Once More 🎈✨
        </button>
        <div className="mt-6 text-3xl animate-pulse">
          💖 🎉 💝
        </div>
      </div>
    </div>
  );
};

export default Ekbaraur;
