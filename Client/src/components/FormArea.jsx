import React, { useState } from "react";
import { adminEmail, adminPassword } from "../../Utils/GeneralValues";
import { useNavigate } from "react-router-dom";

const FormArea = () => {
  const navigate = useNavigate();

  const [state, setState] = useState(false);
  const VerifyLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "" || password === "") {
      alert("Invalid Credentials");
    } else {
      if (email === adminEmail) {
        if (password === adminPassword) {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "/dashboard";
        } else {
          alert("Wrong password entered...");
        }
      } else {
        alert("Wrong email entered");
      }
    }
  };
  return (
    <div className="w-[100vw] h-[92vh] lg:h-[100vh] flex justify-center items-center">
      <div className="w-[96vw] md:w-[90vw] border-[2.5px] rounded-[2.5vmin] border-[#e4e4e4] flex">
        <div className="hidden lg:block">
          <div className="leftHolder  rounded-[2.5vmin] opacity-90 flex flex-col gap-y-7 justify-center items-center  w-[50vw] bg-[#128496] lg:h-[90vmin]">
            <div className="imageHolder w-[28vw] h-[65vmin]">
              <img
                src={require("../assets/api.png")}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <p className="text-white font-medium text-[4.5vmin] font-Montserrat">
              API Manager Application...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[7.5vmin]  justify-center items-center leftHolder w-[96vw]  p-5  lg:w-[40vw]  lg:h-[90vmin]">
          <div>
            <p className="font-extrabold text-[10vmin] md:text-[7.5vmin] text-center text-[#494949] mt-2">
              Login
            </p>
            <div className="underline  h-[6px] md:h-[10px] w-[21vmin] md:w-[17vmin] bg-[#e0bb02]"></div>
          </div>
          <form className="flex flex-col gap-y-[5vmin]">
            <div className="flex flex-col  gap-y-1">
              <label for="email" className="text-[#616161] font-medium">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-[1px] w-[81vw] lg:w-[33vw] p-3 rounded-[2.5vmin]"
                placeholder="Enter your email..."
              />
            </div>
            <div className="flex flex-col  gap-y-1">
              <label for="password" className="text-[#616161] font-medium">
                Password:
              </label>

              <div className=" flex ml-2">
                <input
                  type={state === false ? "password" : "text"}
                  name="password"
                  id="password"
                  className="w-[73vw] lg:w-[29.5vw]  p-3 border-[1px]  rounded-[2.5vmin]"
                  placeholder="Enter password..."
                />

                {(state === false && (
                  <div
                    onClick={() => {
                      setState(true);
                    }}
                    className="boxHolder lg:w-[5vw] w-[7vw] h-[7vmin] lg:p-2 flex justify-center items-center mt-2 lg:mt-0 ml-2 lg:ml-0"
                  >
                    <img
                      src={require("../assets/closeeye.png")}
                      className="max-w-full max-h-full object-contain "
                    ></img>
                  </div>
                )) || (
                  <div
                    onClick={() => {
                      setState(false);
                    }}
                    className="boxHolder lg:w-[5vw] w-[7vw] h-[7vmin] lg:p-2 flex justify-center items-center mt-2 lg:mt-0 ml-2 lg:ml-0"
                  >
                    <img
                      src={require("../assets/openeye.png")}
                      className="max-w-full max-h-full object-contain "
                    ></img>
                  </div>
                )}
              </div>
              <div className="flex gap-x-[17vmin] lg:gap-x-[30vmin] ">
                <div>
                  <input
                    type="checkbox"
                    name="check"
                    id="checkbox1"
                    value="html"
                    className="mt-[5.15vmin] ml-2"
                  />
                  &nbsp;
                  <label for="checkbox1">Remember me</label>
                </div>
                <div>
                  <p className="hidden lg:block mt-[4.5vmin] text-[#919191] font-medium">
                    Forget password?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[85vw] lg:w-[35vw]">
              <button
                onClick={VerifyLogin}
                className="rounded-xl w-[70vw] lg:w-[30vw] bg-[#e0bb02] text-[4.25vmin] lg:text-[2.75vmin] text-[#414141] font-medium text-center p-3"
              >
                Sign In
              </button>
            </div>

            <p>*Please login to manage the APIs</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
