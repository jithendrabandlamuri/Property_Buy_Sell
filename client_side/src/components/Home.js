import React, { useState } from 'react'
import SearchBar from './SearchBar'
import M2 from './M2'
import NavbarComponent from './NavbarComponent'
import Carousel from 'react-bootstrap/Carousel';
function Home({ location, setlocation, flatType, setFlatType, budget, setBudget, navLocation, setNavLocation, propertyV, setPropertyV, userid, setuserid }) {
  return (
    <div>
      <div>
        <NavbarComponent setNavLocation={setNavLocation} />
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://w0.peakpx.com/wallpaper/441/409/HD-wallpaper-3d-house-design-modern-exterior-design-modern-house.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Find a home you'll love</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/11/Moody-home-office-background-with-builtin-shelves-by-WhittneyParkinson.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Choose wisely</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://media.istockphoto.com/id/594450002/photo/text-home-sweet-home-in-a-house-shaped-signboard.jpg?b=1&s=170667a&w=0&k=20&c=sPfMrp36IF4yBq8umvDDc05FcJ-XCP3U6XrNleuRH0M="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Future Home is near</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <br/>
        <div className="col  d-flex justify-content-center align-items-center">
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              value="Sell"
              autoComplete="off"
              onChange={(e) => setPropertyV(e.target.value)}
            ></input>
            <label className="btn btn-outline-secondary" htmlFor="btnradio1">
              Sell
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              value="Rent"
              autoComplete="off"
              onChange={(e) => setPropertyV(e.target.value)}
            ></input>
            <label className="btn btn-outline-secondary" htmlFor="btnradio2">
              Rent
            </label>
          </div>
        </div>
        <SearchBar
          setlocation={setlocation}
          setFlatType={setFlatType}
          setBudget={setBudget} />
        <M2 location={location} flatType={flatType} budget={budget} navLocation={navLocation} propertyV={propertyV} setuserid={setuserid} /></div>
    </div>
    

  )
}

export default Home