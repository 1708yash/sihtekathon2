import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ComplaintForm: React.FC = () => {
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = () => {
    // You can implement your submission logic here
    // For example, send the data to an API or handle it as needed
    console.log("Place:", place);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Complaint:", complaint);
  };

  return (
    <View style={styles.container}>
        <Button title="Upload the image  " onPress={handleSubmit} />
      <Text style={styles.label}>Nearby Place:</Text>
      <TextInput
        value={place}
        onChangeText={(text) => setPlace(text)}
        style={styles.input}
        placeholder="Enter nearby place"
      />

      <Text style={styles.label}>City:</Text>
      <TextInput
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.input}
        placeholder="Enter city name"
      />

      <Text style={styles.label}>State:</Text>
      <TextInput
        value={state}
        onChangeText={(text) => setState(text)}
        style={styles.input}
        placeholder="Enter state"
      />

      <Text style={styles.label}>Complaint:</Text>
      <TextInput
        value={complaint}
        onChangeText={(text) => setComplaint(text)}
        style={[styles.input, styles.complaintBox]}
        placeholder="Enter your complaint"
        multiline
        numberOfLines={6}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    marginBottom: 5,
    paddingTop: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  complaintBox: {
    height: 120,
    borderWidth: 2,
    borderColor: "blue",
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default ComplaintForm;
