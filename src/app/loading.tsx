import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="w-24 h-24 rounded-full border-t-4 border-green-600 animate-spin mb-4"></div>
      <p className="text-sm text-center font-medium  -mb-4">
        Estamos preparando tudo para você
      </p>
    </div>
  );
};

export default LoadingScreen;
