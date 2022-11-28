import { React, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom'

function SellProperty() {
    const [files, setFiles] = useState([])
    const [city, setCity] = useState("")

    const postCollectionRef = collection(db, "properties")

    let navigate = useNavigate()
    const addproperty = async (e) => {
        e.preventDefault()
        await addDoc(postCollectionRef, {
            files,
            city
        }).then(console.log(files, city))
    }

    return (
        <div class="container d-flex justify-content-center mt-5">
            <form>
                <div class="mb-3">
                    <span class="input-group-text">Seller Form</span>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Select Files</span>
                    <input type="file" multiple onChange={(e) => setFiles(e.target.value)} />
                </div>
                < div class="input-group mb-3">
                    <span class="input-group-text">city</span>
                    <input type="text" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div class="mt-3 text-center">
                    <button class="btn btn-outline-success me-3" onClick={addproperty}>submit</button>
                </div>
            </form>
        </div >
    )
}

export default SellProperty
