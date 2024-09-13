import React from "react";

const Header = () => {
  return (
    <div>
      <div className="HeaderHolder ">
        <div className="flex items-center h-[13vmin] bg-[#128496] w-[100vw] p-2">
          <div className="logoHolder flex gap-x-3 items-center ml-1">
            <div className="logoHolder">
              <div className="imgHolder h-[10vmin] w-[10vmin]">
                <img src={require("../assets/api.png")} />
              </div>
            </div>
            <h1 className="text-white lg:ml-3 text-[3.4vmin] lg:text-[3.5vmin] font-extrabold">
              API Manager
            </h1>
          </div>
          <div className="emptyHolder w-[45vw] lg:w-[70vw]"></div>
          <div className="btnHolder">
            <button
              className="bg-white text-black p-2 lg:p-3 text-[2.75vmin] rounded-md"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
