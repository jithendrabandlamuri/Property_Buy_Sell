import { React, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore"
import { db, storageRef,auth } from "../firebase";
import { useNavigate } from 'react-router-dom'
import Navbaruser from "./Narbaruser"

function SellProperty({ setIsAuth, isAuth }) {
    const [coverImg, setCoverImg] = useState(null)
    const [propertyName, setPropertyName] = useState("")
    const [city, setCity] = useState("")
    const [locality, setLocality] = useState("")
    const [address, setAddress] = useState("")
    const [homeType, sethomeType] = useState("")
    const [flatType, setFlatType] = useState("")
    const [area, setArea] = useState("")
    const [areav, setAreaV] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [price, setPrice] = useState("")
    const [priceV, setPriceV] = useState("")

    const postCollectionRef = collection(db, "properties")

    let navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
        console.log(auth.currentUser);
    }, [])

    const handleCoverImg = (e) => {
        if (e.target.files[0]) {
            setCoverImg(e.target.files[0])
        }
    }

    const addproperty = async (e) => {

        setArea(area.toString() + " " + areav)
        e.preventDefault()

        const uploadtask = storageRef.child('img/' + coverImg.name).put(coverImg);
        uploadtask.on(
            'state_changed',
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storageRef.child('img/' + coverImg.name).getDownloadURL().then(url => {
                    console.log("img url", url);
                    addDoc(postCollectionRef, {
                        coverImg: url,
                        propertyName,
                        city,
                        locality,
                        address,
                        homeType,
                        flatType,
                        area,
                        propertyType,
                        price,
                        priceV,
                        author: {
                            name: auth.currentUser.displayName, id: auth.currentUser.uid
                        }
                    }).then(console.log(coverImg, city)).then(navigate("/userMain"))
                })
            }
        )

    }

    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div class="container d-flex justify-content-center">
                <form>
                    <div class="row">
                        <div class="col-lg-4">
                            <h5 >Select Cover Image</h5>
                        </div>
                        <div class="col-lg-8">
                            <input type="file" name="coverimg" accept="/image" onChange={(e) => handleCoverImg(e)} />
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-12">
                            <h5 >Property Name</h5>
                            <input type="text" class="form-control" placeholder="Enter property name" onChange={(e) => setPropertyName(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-6">
                            <h5 > City</h5>
                            <input type="text" class="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)}></input>
                        </div>
                        <div class="col-lg-6">
                            <h5 >Locality</h5>
                            <input type="text" class="form-control" placeholder="Locality" onChange={(e) => setLocality(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-12">
                            <h5 >Address</h5>
                            <input type="text" class="form-control" placeholder="Enter detail address" onChange={(e) => setAddress(e.target.value)}></input>
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-3">
                            <h5 class="label">Property Type</h5>
                        </div>
                        <div class="col-lg-9">
                            <b><label class="radio-container">
                                <input type="radio" class="form-check-input" name="exampleRadios" value="Flat" onChange={(e) => sethomeType(e.target.value)}></input>&nbsp;&nbsp;Flat
                            </label></b>&nbsp;&nbsp;&nbsp;&nbsp;
                            <b><label class="radio-container">
                                <input type="radio" class="form-check-input" name="exampleRadios" value="House" onChange={(e) => sethomeType(e.target.value)}></input>&nbsp;&nbsp;House
                            </label></b>
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-2">
                            <h5>Flat Type</h5>
                        </div>
                        <div class="col-lg-4">
                            <select name="flatType" tabindex="-1" class=" col-lg-9 form-control " onChange={(e) => setFlatType(e.target.value)}>
                                <option disabled="disabled" selected="selected">Choose Flat Type</option>
                                <option value="1 bhk" defaultChecked>1 bhk</option>
                                <option value="2 bhk">2 bhk</option>
                                <option value="3 bhk">3 bhk</option>
                            </select>
                        </div>
                        <div class="col-lg-1">
                            <h5 >Area</h5>
                        </div>
                        <div class="col-lg-3">
                            <input type="text" class="form-control" placeholder="Enter Area" onChange={(e) => setArea(e.target.value)}></input>
                        </div>
                        <div class="col-lg-2">
                            <select name="flatType" tabindex="-1" class=" form-control select2-hidden-accessible" aria-hidden="true" onChange={(e) => setAreaV(e.target.value)}>
                                <option selected="selected" value="Sq-ft">Sq-ft</option>
                                <option value="Sq-m">Sq-m</option>
                                <option value="Sq-yrd">Sq-yrd</option>
                                <option value="Acre">Acre</option>
                                <option value="Hectare">Hectare</option>
                                <option value="kanal">kanal</option>
                                <option value="cent">cent</option>
                            </select>
                        </div>
                    </div><br />
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="row">
                                <h5>Property Type</h5>
                                <div class="btn-group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="Sell" autocomplete="off" onChange={(e) => setPropertyType(e.target.value)}></input>
                                    <label class="btn btn-outline-secondary" for="btnradio1">Sell</label>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="Rent" autocomplete="off" onChange={(e) => setPropertyType(e.target.value)}></input>
                                    <label class="btn btn-outline-secondary" for="btnradio2">Rent</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row">
                                <h5>Price</h5>
                            </div>
                            <div class="row">
                                <div class="col-lg-7">
                                    <input type="text" class="form-control" placeholder="Expected price" onChange={(e) => setPrice(e.target.value)}></input>
                                </div>
                                <div class="col-lg-5">
                                    <select name="flatType" tabindex="-1" class=" form-control select2-hidden-accessible" aria-hidden="true" onChange={(e) => setPriceV(e.target.value)}>
                                        <option selected="selected" value="lakh">Lakh</option>
                                        <option value="crore">Crore</option>
                                        <option value="thousand">Thousand</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <button type="submit" class="btn btn-primary " onClick={addproperty}>Submit</button>
                </form>

            </div >
        </>

    )
}

export default SellProperty
