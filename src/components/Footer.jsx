import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[50px] bg-[rgba(0,0,0,0)] mt-[-50px] text-white">
      <h1 className="text-center ">
        <span className="shadow-md px-10 py-2 rounded-3xl bg-[rgba(0,0,0,0.1)]">
          Made with{" "}
          <span className="bg-gradient-to-r from-red-500 via-violet-600 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Code and Cuts
          </span>{" "}
          combined together with 💖
        </span>
      </h1>
    </div>
  );
};

export default Footer;
