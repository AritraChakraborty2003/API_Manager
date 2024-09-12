import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center gap-y-5">
        <div className="text-[10vmin] flex flex-col justify-center items-center">
          😓
          <p className="text-[8.5vmin] font-extrabold">
            Oops Something went wrong!!!
          </p>
        </div>
        <p className="text-[8vmin] font-bold">URL not Found</p>
        <p className="text-[4.5vmin] font-bold">
          &nbsp;{err.status}&nbsp;:&nbsp;{err.statusText}
        </p>
      </div>
    </>
  );
};

export default Error;
