import React, { useState} from 'react'
import HotelContext from './HotelContext'
import data from '../json/mumbaiHotels.json';

function HotelState(props) {

	const [posts] = useState(data);

  return (
    <HotelContext.Provider value={{posts}}>
      {props.children}
    </HotelContext.Provider>
  )
}

export default HotelState