import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddVehicleEntry from './components/vehicleEntry/AddVehicleEntry';
import Newtoll from './components/NewToll/Newtoll';
import List from './components/TollList/List';


function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>

          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/AddVehicleEntry' element={<AddVehicleEntry />} ></Route>
          <Route exact path='/Newtoll' element={<Newtoll/>} ></Route>
          <Route exact path='/List' element={<List />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
