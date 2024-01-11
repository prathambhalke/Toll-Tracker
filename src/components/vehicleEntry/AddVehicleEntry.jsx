import { sliceActions } from "../../Features/AddVelEntrySlice";
import "../vehicleEntry/Addentry.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddVehicleEntry = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [debouncedVehicleNum, setDebouncedVehicleNum] = useState('');

  let vehicleList = useSelector((state) => state.addVelEnt); // Fixed the selector to use the correct slice name
  let dispatch = useDispatch();
  console.log(vehicleList)

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const onSelectTollName = (e) => {
    dispatch(sliceActions.addSelectToll(e.target.value));
  };

  // Function that will be called when the debounced vehicle number changes
  const debouncedOnVehicleNum = debounce((value) => {
    dispatch(sliceActions.addVehicleNum(value));
  }, 1000); // Adjust delay time (in milliseconds) as needed

  // Original function to handle input change
  const onVehicleNum = (e) => {
    let vehNum = e.target.value;
    setDebouncedVehicleNum(vehNum); // Update the debounced value
    debouncedOnVehicleNum(vehNum); // Trigger the debounced function
  };
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };






  return (
    <form action="" className="form-container">
      <h1 className="AddVehicleHeding">Add Vehicle</h1>
      <div className="AddVehicleform">

        <div className="TollName">
          <h3>Select the toll Name</h3>
          <select className="select-tollname" name="" id="" onChange={onSelectTollName} >
            <option value="Select the toll Name">Select the toll Name</option>
            <option value="Latur">Latur</option>
            <option value="pune">pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Lamjana">Lamjana</option>
            <option value="Makani">Makani</option>
            <option value="Aurad">Aurad</option>
            <option value="Kharosa">Kharosa</option>



          </select>
        </div>

        <div className="Vtype">
          <label htmlFor="">Vehicle type</label>


          <div className="vtype-buttons">
            <span className='vtype-btn'
            onClick={() => handleButtonClick(1)}
              style={{
                backgroundColor: selectedButton === 1 ? 'blue' : 'transparent',
                color: selectedButton === 1 ? 'black' : 'white',
              }}
            >
              
              Car/Jeep

            </span>
            <span className='vtype-btn'
              onClick={() => handleButtonClick(2)}
              style={{
                backgroundColor: selectedButton === 2 ? 'blue' : 'transparent',
                color: selectedButton === 2 ? 'black' : 'white',
              }}
            >
              Truck/Bus

            </span>
            <span className='vtype-btn'
              onClick={() => handleButtonClick(3)}
              style={{
                backgroundColor: selectedButton === 3 ? 'blue' : 'transparent',
                color: selectedButton === 3 ? 'black' : 'white',
              }}
            >
              LCV
            </span>
            <span className='vtype-btn'
              onClick={() => handleButtonClick(4)}
              style={{
                backgroundColor: selectedButton === 4 ? 'blue' : 'transparent',
                color: selectedButton === 4 ? 'black' : 'white',
              }}
            >
              Heavy vehicle
            </span>
          </div>


        </div>

        <div className="Vnumber">
          <label htmlFor="">Vehicle Number</label>
          <span>
            <input type="text" className="vehicle-number" placeholder="Vehicle Number" onChange={onVehicleNum}/>
          </span>
        </div>

        <div className="journey-type">
          <label htmlFor="">Journey Type</label>
          <span className="journey-span">
            <span>
              <input type="radio" />
              <label htmlFor="">single journey</label>
            </span>
            <span>
              <input type="radio" />
              <label htmlFor="">return journey</label>
            </span>
          </span>
        </div>

        <div className="tollName">
          <h2 className="trf">TARIFF</h2>
          <span className="tariff">
            <span></span>
          </span>
        </div>

        <p className="add-btn" onClick={() => dispatch(sliceActions.addtoll())}>
          ADD
        </p>
      </div>
    </form>
  );
};

export default AddVehicleEntry;
