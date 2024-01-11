import React from 'react';
import '../TollList/TollList.css'

const List = () => {
  return (
    <>
    <div className="AllList">
        
    <h1>All Toll List</h1>

        
      </div>
      <div>
        <table className="TollListTable">
          <tr>
            <th>Toll Name</th>
            <th>Car/Jeep/Van</th>
            <th>LC Vehicle</th>
            <th>Truck/Bus</th>
            <th>Heavy vehicle</th>
          </tr>
          <tr>
            <td>Latur</td>
            <td>	100/200</td>
            <td>	300/500</td>
            <td>600/600</td>
            <td>800/900</td>
          </tr>
          <tr>
            <td>Latur</td>
            <td>	100/200</td>
            <td>	300/500</td>
            <td>600/600</td>
            <td>800/900</td>
          </tr>
          <tr>
            <td>Latur</td>
            <td>	100/200</td>
            <td>	300/500</td>
            <td>600/600</td>
            <td>800/900</td>
          </tr>
          
        </table>
      </div>
    </>
  );
}

export default List;
