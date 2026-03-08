import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { FaBirthdayCake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Surprise = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/photo");
  };

  useEffect(() => {
    // Trigger confetti animation when component mounts
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { y: 0.6 },
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center">
      <div className="text-center p-8 rounded-lg backdrop-blur-sm bg-white/30 shadow-xl transform hover:scale-105 transition-transform duration-300">
        <FaBirthdayCake className="text-8xl mx-auto mb-6 text-pink-600 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4 text-white animate-pulse">
          Happy Birthday My Love! ❤️
        </h1>
        <p className="text-xl text-white mb-6 leading-relaxed">
          On this special day, I want to tell you how much you mean to me.
          <br />
          You make every day brighter just by being you.
          <br />
          Wishing you all the joy and happiness in the world!
        </p>
        <div className="space-y-4">
          <p className="text-2xl font-bold text-white">
            🎉 May all your dreams come true! 🎉
          </p>
          <p className="text-lg text-white animate-pulse">With love ❤️</p>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
          onClick={handleClick}
          >
          Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
