import React from 'react';
import '../NewToll/newtoll.css'

const NewToll = () => {
  return (
    <form  action="" className="AddToll-container">
    <h1 className="AddNewTollHeding">Add New Toll</h1>
   <div className="AddNewTollform">
    
   <div className="toll-name">
       <label htmlFor="">Toll Name</label>
       <span>
         <input type="text" required className='tollnameInput'  placeholder="Toll Name" />
       </span>
     </div>

     <h1 className="AddNewTollHeding">Vehicle Tariff Details</h1>


     <div className="tariffDetails">
       <label htmlFor="">Car/Jeep/Van</label>
       <span>
         <input type="number" required  placeholder="single journey" />
         <input type="number" required  placeholder="return journey" />
       </span>
     </div>

     <div className="tariffDetails">
       <label htmlFor="">LCV</label>
       <span>
         <input type="number" required  placeholder="single journey" />
         <input type="number" required  placeholder="return journey" />
       </span>
     </div>

     <div className="tariffDetails">
       <label htmlFor="">Truck/Bus</label>
       <span>
         <input type="number" required  placeholder="single journey" />
         <input type="number" required  placeholder="return journey" />
       </span>
     </div>

     <div className="tariffDetails">
       <label htmlFor="">Heavy vehicle</label>
       <span>
         <input type="number" required  placeholder="single journey" />
         <input type="number" required  placeholder="return journey" />
       </span>
     </div>

     <p className="add-btn" >
       ADD DETAILS
     </p>
   </div>
 </form>
  );
}

export default NewToll;
