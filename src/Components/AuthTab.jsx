import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AuthTab = () => {
  const point = useLocation().pathname;

  return (
    <div>
      <div className="bg-[#F2F2F2] flex items-center justify-center w-screen h-screen font-medium">
        <div className="bg-[#FFFFFF] w-[83%] h-[60%] shadow-2xl rounded-2xl p-2">
          <h1 className="text-3xl text-center p-6 font-extrabold">QUIZEE</h1>
          <div className="flex items-center justify-center gap-12 mb-6">
            <Link to="/signup">
              <button
                className={
                  point === "/" || point === "/signup"
                    ? "px-16 py-2 rounded-lg shadow-[0_1px_8px_8px_rgba(11,203,237,0.2)]"
                    : "bg-white px-16 py-2"
                }
              >
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button
                className={
                  point === "/login"
                    ? "px-16 py-2 rounded-lg shadow-[0_1px_8px_8px_rgba(11,203,237,0.2)]"
                    : "bg-white px-16 py-2"
                }
              >
                Log In
              </button>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthTab;
