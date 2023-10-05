import Navbar from "./components/Navbar";
import Property from "./components/Property";
import TabLocation from "./components/TabLocation";
import { Routes, Route } from "react-router-dom";
import HotelState from './context/HotelState'
function App() {
  return (
    <HotelState>
    <Navbar/>
    <div className="container">
      <Routes >
          <Route index element={<TabLocation/>} />
          <Route exact path="property/:id" element={<Property />} />
        </Routes>
    </div>
    </HotelState>
  );
}

export default App;
