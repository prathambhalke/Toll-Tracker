import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [showButtons, setShowButtons] = useState(true);

  const handleClose = () => {
    setShowButtons(true);
  };

  const handleSeeTolls = () => {
    setShowButtons(false);
  };


  return (
    <nav className="navbar">
      <Link className="ml-24 text-white text-2xl no-underline" to="/">
        Toll Management Application
      </Link>

      {showButtons ? (
        <div className="btns">
          <Link className="primary-btn" to="/AddVehicleEntry" onClick={handleSeeTolls}>
            Add Vehicle Entry
          </Link>
          <Link className="primary-btn" to="/Newtoll" onClick={handleSeeTolls}>
            Add New Toll
          </Link>
          <Link className="primary-btn" to="/List" onClick={handleSeeTolls}>
            See Tolls List
          </Link>
        </div>

      ) : (
        <div className="close-btn">
          <Link className="primary-btn" to='/' onClick={handleClose}>
            Close
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
