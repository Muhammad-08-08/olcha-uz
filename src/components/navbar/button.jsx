function Button({ children }) {
  return (
    <button className="w-24 h-14 hover:text-red-600 cursor-pointer transition duration-1000">
      {children}
    </button>
  );
}

export default Button;
