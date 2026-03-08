import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ekbaraur");
  };
  return (
    <>
      <div className="flex flex-col gap-y-14 items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Your birthday is on ______ 202_
            <br />
            Your Msg 👇
          </h1>
        </div>

        <div className="p-5">
          <button className="bg-purple-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
            onClick={handleClick}
          >
            click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
