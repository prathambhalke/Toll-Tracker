import React from "react";
import "../Home/home.css";

const Home = () => {
  return (
    <>
      <div className="vehicleEntry">
        <h1 className="vehicle-heading">Vehicle Entries___ </h1>
        <i className="fa-solid fa-truck"></i>
        <i className="fa-solid fa-truck"></i>

        <div className="log-entry">
          <input
            type="search"
            className="search-bar"
            placeholder="Search By VH No..."
          />

          <select name="" id="">
            <option value="">All Tolls</option>
            <option value="">Latur</option>
            <option value="">Nanded</option>
          </select>
          <i className="fa-solid fa-arrow-down-short-wide"></i>
        </div>
      </div>
      <div>
        <table className="table">
          <tr>
            <th>VEHICLE TYPE</th>
            <th>VEHICLE NUMBER</th>
            <th>DATE/TIME</th>
            <th>TOLL NAME</th>
            <th>TARIFF</th>
          </tr>
          <tr>
            <td>Car/Jeep/Van</td>
            <td>MH 12</td>
            <td>4.10.2022 / 9:22:16</td>
            <td>Nanded</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Car/Jeep/Van</td>
            <td>MH 12</td>
            <td>4.10.2022 / 9:22:16</td>
            <td>Nanded</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Car/Jeep/Van</td>
            <td>MH 12</td>
            <td>4.10.2022 / 9:22:16</td>
            <td>Nanded</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Car/Jeep/Van</td>
            <td>MH 12</td>
            <td>4.10.2022 / 9:22:16</td>
            <td>Nanded</td>
            <td>200</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Home;
