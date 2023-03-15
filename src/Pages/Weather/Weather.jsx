import React from "react";

const Weather = () => {
  return (
    <div class="grid grid-cols-1 gap-4 ">
      <div className="bg-gradient-to-b from-cyan-500 to-sky-800 text-sky-300 h-screen">
        <div className="flex flex-col justify-center align-middle p-10 text-center">
          <h1 className="text-7xl">29c</h1>
          <h1 className="text-3xl">Cloudy 31/24</h1>
          <h1 className="bg-zinc-100 w-20 alig">AQI 30</h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
