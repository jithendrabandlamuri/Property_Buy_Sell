import React from 'react'
import SellProperty from './SellProperty'
import SearchBar from './SearchBar'
import M2 from './M2'
import {db} from '../firebase';
import { collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
function Home() {



  return (
    
    
    <div>
      <div>
      <SearchBar/>
      <M2 /></div>
    </div>
    
  )
}

export default Home