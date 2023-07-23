import { useLottie } from "lottie-react";
import animationData from "../assets/Error Element.json";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="w-1/3">{View}</div>
      <div>
        <Link
          to="/"
          className="bg-cyan-700 hover:bg-red-400 text-white font-semibold rounded-xl text-lg px-5 py-2 transition-all hover:scale-105"
        >
          Back to Home 
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
