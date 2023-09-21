// @ts-nocheck
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF,
} from "@react-google-maps/api";
import toast from 'react-hot-toast';

export const DEFAULT_DISTANCE = 100;

const containerStyle = {
  width: "100%",
  height: "90vh",
};

async function getLatLng(address: string) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address + ",India"
    )}&key=AIzaSyAW-yfggxPKG70-wGj_e634dgadcJZfe-I`
  );
  const geoCodeResponse = await res.json();
  if (!geoCodeResponse || geoCodeResponse.status === "ZERO_RESULTS") {
    toast.error("No results found");
    return;
  }
  const { lat, lng } = geoCodeResponse.results[0].geometry.location;
  console.log(lat, lng);
  return { lng, lat };
}

function MapTwo() {
  const [selected, setSelected] = useState<any>(undefined);
  const [currentPosition, setCurrentPosition] = useState(undefined);
  const [center, setCenter] = useState({ lat: 30.770052, lng: 76.577564 });
  const cityRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAW-yfggxPKG70-wGj_e634dgadcJZfe-I",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const search = async () => {
    // @ts-ignore
    const city = cityRef.current.value;
    // @ts-ignore
    const { lat, lng } = await getLatLng(currentPosition);
    if (!lat || !lng) {
      return;
    }
    setCenter({ lat, lng });
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 z-10 w-full h-16 bg-white flex items-center justify-center">
          <form onSubmit={search}>
            <input
              ref={cityRef}
              onChange={(e) => {
                setCurrentPosition(e.target.value as any);
              }}
              type="text"
              placeholder="Enter city"
              className="w-1/2 h-10 border border-gray-300 rounded-md px-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
              Search
            </button>
          </form>
        </div>

        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {places.map((place) => (
              <MarkerF
                key={place.name}
                position={place.location}
                onClick={() => {
                  place === selected
                    ? setSelected(undefined)
                    : setSelected(place);
                }}
              />
            ))}
            {selected ? (
              // @ts-ignore
              <InfoWindowF
                position={selected.location}
                zIndex={30}
                // @ts-ignore
                clickable={true}
                onCloseClick={() => setSelected(undefined)}
              >
                <div>
                  <h2>{selected.name}</h2>
                  <p>{selected.details}</p>
                </div>
              </InfoWindowF>
            ) : null}

            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default React.memo(MapTwo);

const places = [
  {
    name: "Chandigarh",
    location: {
      lat: 30.722885,
      lng: 76.738924,
    },
    details: "Flood affected area",
  },
  {
    name: "Kharar",
    location: {
      lat: 30.751191,
      lng: 76.737301,
    },
    details: "Water logging",
  },
  {
    name: "Location 3",
    location: {
      lat: 30.7754,
      lng: 76.560569,
    },
    details: "Pounds are dirty",
  },
  {
    name: "Kochi",
    location: {
      lat: 9.932734,
      lng: 76.297977,
    },
    details: "Kochi Flood affected area",
  }
];
