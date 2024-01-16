import { AddVehicleSliceActions } from "../../Features/AddVelEntrySlice";
import { VehicleDataSliceActions } from "../../Features/addDataSlice";
import "../vehicleEntry/Addentry.css";
import { useDispatch, useSelector } from "react-redux";

const AddVehicleEntry = () => {
  const VehicleTypeBtns = ["Car/Jeep", "Truck/Bus", "LCV", "Heavy vehicle"];
  let vehicleList = useSelector((state) => state.addVelEnt);
  let vehicleData = useSelector((state) => state.addVelData);

  let dispatch = useDispatch();
  console.log(vehicleList);
  console.log(vehicleData);

  return (
    <form action="" className="form-container">
      <h1 className="AddVehicleHeding">Add Vehicle</h1>
      <div className="AddVehicleform">
        <div className="TollName">
          <h3>Select the toll Name</h3>
          <select
            className="select-tollname"
            name=""
            id=""
            onChange={(e) =>
              dispatch(AddVehicleSliceActions.addSelectToll(e.target.value))
            }
          >
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
            {VehicleTypeBtns.map((item, index) => {
              return (
                <p
                  className="bg-blue-700 text-white rounded-lg p-4 mx-2 text-sm cursor-pointer hover:bg-white hover:text-black"
                  key={index}
                  onClick={() =>
                    dispatch(AddVehicleSliceActions.addVehicleType(item))
                  }
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="Vnumber">
          <label htmlFor="">Vehicle Number</label>
          <span>
            <input
              type="text"
              className="vehicle-number"
              placeholder="Vehicle Number"
              onClick={(e) =>
                dispatch(AddVehicleSliceActions.addVehicleNum(e.target.value))
              }
            />
          </span>
        </div>

        <div className="journey-type">
          <label htmlFor="">Journey Type</label>
          <span className="journey-span">
            <span>
              <input
                type="radio"
                checked={vehicleList.journeyType === "single" ? true : false}
                onClick={() =>
                  dispatch(AddVehicleSliceActions.addJourneyType("single"))
                }
              />
              <label htmlFor="">single journey</label>
            </span>
            <span>
              <input
                type="radio"
                checked={vehicleList.journeyType === "double" ? true : false}
                onClick={() =>
                  dispatch(AddVehicleSliceActions.addJourneyType("double"))
                }
              />
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

        <p
          className="add-btn"
          onClick={() => dispatch(VehicleDataSliceActions.addToll(vehicleList))}
        >
          ADD
        </p>
      </div>
    </form>
  );
};

export default AddVehicleEntry;
