import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../json/mumbaiHotels.json'
import HotelItem from './hotelItem';

function Property() {
    const {id} = useParams();
    console.log(id)
    const search = () =>{
		data = data.filter((item) => item.hotel_name.includes(id));
	}
    useEffect(() => {
        search()
    }, [])
    
  return (
    <div className="container">
        <HotelItem hotel={data[0]} key_={0} check={false}/>
    </div>
  )
}

export default Property