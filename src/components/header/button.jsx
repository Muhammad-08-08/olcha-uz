import React from "react";

function Button({ children }) {
  return (
    <button className="py-1 px-2 bg-white text-red-600 font-medium rounded-md  transition duration-[1s] cursor-pointer hover:bg-red-600 hover:border hover:text-white hover:border-white">
      {children}
    </button>
  );
}

export default Button;
