// Card.js
import PropTypes from "prop-types";
import logo from "../assets/boat1.png";

const Card = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 hover:bg-gray-100">
      <div className="md:flex">
        <div className="md:flex-shrink-0 mt-6 ml-2">
          <img
            className="h-15 w-full object-cover md:w-40"
            src={logo}
            alt="Card Image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
