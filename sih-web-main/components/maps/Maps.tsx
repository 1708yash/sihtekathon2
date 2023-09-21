// @ts-nocheck
"use client"
import React from 'react'
import GoogleMapReact from 'google-map-react';


export const DEFAULT_DISTANCE = 100
export const DEFAULT_ZOOM = 10
export const DEFAULT_CENTER = { lat: 28.7041, lng: 77.1025 }
const AnyReactComponent = ({ text }:{text:any}) => <div>{text}</div>;


const Maps = () => {
    const defaultProps = {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM
      };
  return (
    <>
<div>
<div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAW-yfggxPKG70-wGj_e634dgadcJZfe-I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={28.7041}
          lng={77.1025}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> 
</div>
    </>
  )
}

export default Maps