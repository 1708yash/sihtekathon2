import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { newsData } from "../utils/types";
import { Card, useTheme } from "react-native-paper";
import { NavigationProp, Route } from "@react-navigation/native";

type Props = {
  title: string;
  description: string;
  image_url: string;
  content: string;
  navigation: NavigationProp<Route>;
};
const CardItem = (props:Props ) => {
  const theme = useTheme();
  const handlepress = () => {
    props.navigation.navigate("NewsOverview",
    {title:props.title,
    description:props.description,
    image_url:props.image_url, 
    content:props.content
  }
    );
    
  };
  return (
    <Pressable onPress={handlepress}>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.scrim,
        }}
      >
        <Card.Cover borderRadius={10} source={{uri:props.image_url}}/>
        <Card.Title title={props.title} subtitle={props.description.split("\n")[0]}
        titleNumberOfLines={1}
        > </Card.Title>
      </Card>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  card: {},
});
