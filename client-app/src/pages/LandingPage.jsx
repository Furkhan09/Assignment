import Navbar from "../components/Navbar";
import Cardgrid from "../components/Cardgrid";
import { Link } from "react-router-dom";
//h-50 bg-gradient-to-r from-sky-500 to-indigo-500
const LandingPage = () => {
  return (
    <div className="h-50 bg-indigo-950">
      <Navbar />
      <div className=" font-sans text-4xl text-center text-white transform scale-100 transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="w-1/8">
          <h1 className="text-5xl">boAt.</h1>
        </div>
        <div className="w-1/8">
          <h1 className="text-5xl">Truely.Yours.</h1>
        </div>
      </div>
      <Cardgrid />
      <div className="flex items-center justify-center mt-8 pb-8">
        <Link
          to="/formPage"
          className="rounded-full p-4 bg-white text-black-500 hover:text-sky-700"
        >
          {" "}
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
