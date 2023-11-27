import logo from "../assets/boat_logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h2 className="text-white text-3xl font-bold">boAt</h2>
      </div>
    </nav>
  );
};

export default Navbar;
