import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
let locationsOfInterest = [
  {
    title: "Bridge broke down",
    location: {
      latitude: 28.726289106812686,
      longitude: 77.20797004178166,
    },
    description: "Due to heavy rainfall bridge broke down",
  },
  {
    title: "Houses drawn in water",
    location: {
      latitude: -15.82997,
      longitude: -48.06189,
    },
    description:
      "Due to heavy rainfall many houses near the river were drawn in water",
  },
];
const Saved = () => {

  const [count,setcount] =React.useState(0);
  const showLocationOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };
  const onRegionChange = (region: any) => {
    console.log(region);
  };
  const [dragableMarkercoord, setDragableMarkercoord] = React.useState({
    latitude: 28.655708858072586,

    longitude: 77.1938609103084,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 28.671383149212268,
          latitudeDelta: 0.5067468949590825,
          longitude: 77.22144747152925,
          longitudeDelta: 0.2825060114264488,
        }}
      >
        {showLocationOfInterest()}
        <Marker
          pinColor="#0000FF"
          draggable
          coordinate={dragableMarkercoord}
          title="Report Problem in Area"
          description="Drag the marker to the location of the problem"
          onDrag={(e) => setDragableMarkercoord(e.nativeEvent.coordinate)}
        />
        <Marker coordinate={{latitude:28.670245, longitude:77.189317}} pinColor="#00ff00">
          <Callout>
            <Text>Number of Conirmations:{count}</Text>
            <Button title='Number of Confirmation' onPress={()=>setcount(count+1)} ></Button>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  maps: {
    height: "100%",
    width: "100%",
  },
});
