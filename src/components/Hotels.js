import React, {useContext,  useState } from 'react'
import HotelItem from './hotelItem'
import HotelContext from '../context/HotelContext'

function Hotels(props) {
  const context = useContext(HotelContext)
  const {posts} = context;

  const newData = posts.filter((item) => item.address.city.includes(props.location));

  const [count, setCount] = useState(6)
  const totalCount = newData.length;
  return (
    <>
      <h2>Hotels in {props.location}</h2>
      <div className="container">
        <div className="row row-cols-3 row-cols-lg-3 g-lg-3">
          { newData.slice(0, count).map((item, i) => (
            <div className="col d-flex justify-content-evenly m-0 p-3" key={i}>
              <HotelItem hotel={item} key_={i} check={true}/>
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-evenly p-3">
          {(count < totalCount) && <span className="btn btn-primary" onClick={() => { setCount(count + 3) }}>Show More</span>}
          {(count > 6) && <span className="btn btn-primary" onClick={() => { setCount(count - 3) }}>Show Less</span>}
        </div>
      </div>
    </>
  )
}

export default Hotels