import React,{useState} from 'react'
import SearchBar from './SearchBar'
import M2 from './M2'
import NavbarComponent from './NavbarComponent'
function Home({ location, setlocation, flatType, setFlatType, budget, setBudget, navLocation, setNavLocation,propertyV,setPropertyV,userid,setuserid }) {
  const [propertyU, setPropertyU] = useState("")
  setPropertyV(propertyU)
  return (
    <div>
      <div>
        <NavbarComponent setNavLocation={setNavLocation} />
        <div class="btn-group">
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            value="Sell"
            autocomplete="off"
            onChange={(e) => setPropertyU(e.target.value)}
          ></input>
          <label class="btn btn-outline-secondary" for="btnradio1">
            Sell
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            value="Rent"
            autocomplete="off"
            onChange={(e) => setPropertyU(e.target.value)}
          ></input>
          <label class="btn btn-outline-secondary" for="btnradio2">
            Rent
          </label>
        </div>
        <SearchBar
          setlocation={setlocation}
          setFlatType={setFlatType}
          setBudget={setBudget} />
        <M2 location={location} flatType={flatType} budget={budget} navLocation={navLocation} propertyV={propertyV} setuserid={setuserid}/></div>
    </div>

  )
}

export default Home