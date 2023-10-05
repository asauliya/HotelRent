import React from 'react'
import image from '../img/hotel-img.jpg'
import image2 from '../img/hotel-img2.jpg'
import image3 from '../img/hotel-img3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faLocationDot, faBuilding,faArrowsUpDownLeftRight, faStar } from '@fortawesome/free-solid-svg-icons'
import './hotelItem.css';
import { Link } from 'react-router-dom'

function HotelItem({hotel, key_, check}) {

    const padding = {
        padding:"0px",
        fontSize:"14px"
    }
    return (
        <div className="card shadow" style={{width: "22rem", borderRadius: "15px", background: "#f2f6fc", padding: "0.5rem" }}>
            {/* <span></span> */}
            <div id={`carouselExampleIndicators${key_}`} className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleIndicators${key_}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${key_}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${key_}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block w-100" alt="..." style={{ padding: "0.5rem", borderRadius: "16px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." style={{ padding: "0.5rem", borderRadius: "16px" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." style={{ padding: "0.5rem", borderRadius: "16px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${key_}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${key_}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card-body" style={{ paddingTop: "0" }}>
                <h3>{hotel.hotel_name}</h3>
                {/* {Array(hotel.stars).fill(<FontAwesomeIcon icon={faStar}/>)} */}
                {Array(hotel.stars)
                    .fill(true)
                    .map((item, index) => (
                        <FontAwesomeIcon icon={faStar} key={index}/>
                ))}
                <div style={{margin:"5px", marginLeft:"0"}}><FontAwesomeIcon icon={faLocationDot} /> {hotel.address.street},{hotel.address.city}</div>
                    <div className="row row-cols-3" style={{padding:"20px"}}>
                        <div className="col text-start" style={padding}>
                            <FontAwesomeIcon icon={faBuilding} />
                            <div>{hotel.room.availability} Room</div>
                        </div>
                        <div className="col text-start" style={padding}>
                            <FontAwesomeIcon icon={faBed} />
                            <div>{hotel.room.number_of_beds} Bed</div>
                        </div>
                        <div className="col text-start" style={padding}>
                            <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
                            <div>{hotel.room.room_size}</div>
                        </div>
                    </div>
                <hr />
                <div className="container p-0">
                    <div className="row row-cols-2">
                        <div className="col">
                            <h5 >{hotel.room.price_per_night}₹/<span style={{ fontSize: "15px" }}>night</span></h5>
                        </div>
                        {check && <div className="col text-end">
                            <span className="btn btn-outline-primary btn-sm" style={{borderRadius:"10px"}}><Link to={`property/${hotel.hotel_name}`}>Read More</Link></span>
                        </div>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotelItem