import React, { useState } from 'react'
import SearchBar from './SearchBar'
import M2 from './M2'
import NavbarComponent from './NavbarComponent'
function Home({ location, setlocation, flatType, setFlatType, budget, setBudget, navLocation, setNavLocation, propertyV, setPropertyV, userid, setuserid }) {
  return (
    <div>
      <div>
        <NavbarComponent setNavLocation={setNavLocation} />
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