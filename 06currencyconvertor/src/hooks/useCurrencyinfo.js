//Custom hooks
//mostly api call se jho value aati hai wo string format me aati hai

import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`)
  },[])
}