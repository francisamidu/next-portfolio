const Button = ({ text, onClick }) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  return (
    <button
      className="w-max h-12 px-6 mt-4 rounded-md text-white bg-blue-600"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
