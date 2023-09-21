import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Card,Text, useTheme } from "react-native-paper";

type Props = {
  title: string;
  description: string;
  image_url: string;
  content: string;
};
const DetailCard = (props: Props) => {
    const theme = useTheme();
  return (
    <View>
      <Text
        style={{ color: "black", marginVertical: 10 }}
        variant="headlineMedium"
      >
        {props.title}
      </Text>
      <Card style={{backgroundColor:theme.colors.inverseOnSurface}} contentStyle={{width:Dimensions.get("window").width}}>
{props.image_url && (<Card.Cover source={{uri:props.image_url}}></Card.Cover>)}
<Card.Content  >
    <Text variant="headlineSmall" textBreakStrategy="highQuality" style={{textAlign:"left",marginVertical:10}}>
        {props.content}
    </Text>
</Card.Content>
      </Card>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({});
