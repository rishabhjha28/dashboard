import React, { useEffect } from "react";
import {useJsApiLoader,GoogleMap,Marker} from "@react-google-maps/api"
import { useState } from "react";
export default function Map({place1,place2}){
  const defaultProps = {
    center: {
        lat:21.1458,
        lng:79.088860
    },
    zoom: 1.2
  };
  const [place1cor,setPlace1cor]=useState(null)
  const [place2cor,setPlace2cor]=useState(null)
  function getCoordinates(address,setter){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+"AIzaSyA0TW4kTWtG7vu06Xr16S2JyEMupBfBhH8")
      .then(response => response.json())
      .then(data => {
        // console.log(data.results[0].geometry.location)
        setter(data.results[0].geometry.location)
      })
  }
  useEffect(()=>{
    getCoordinates(place1,setPlace1cor)
    getCoordinates(place2,setPlace2cor)
  },[])
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyA0TW4kTWtG7vu06Xr16S2JyEMupBfBhH8"
  })
  if(!isLoaded){
    return <div>Loading...</div>
  }
  return (
    <>
        <div className="heading">User accessing application from</div>
        <div style={{ height: '247px', width: '100%' }}>
        <GoogleMap center={defaultProps.center} zoom={defaultProps.zoom} mapContainerStyle={{height:'100%', width:"100%"}} mapTypeId="hybrid" options={{
            // zoomControl:false, 
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false
        }}>
            <Marker position={place1cor}/>
            <Marker position={place2cor}/>
            </GoogleMap>    
        </div>
        <div className="reload">
            <img src="reload-symbol.png" alt="reload" />
            <div className="update">Update</div>
        </div>
    </>
  );
}