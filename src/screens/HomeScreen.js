import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>YOLO</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title='Go to components demo'
      ></Button>
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate("List")}
      ></Button>
      <Button
        title='Go to Image Screen'
        onPress={() => navigation.navigate("Image")}
      ></Button>
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate("Counter")}
      ></Button>
      <Button
        title='Go to ColorScreen Demo'
        onPress={() => navigation.navigate("Color")}
      ></Button>
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate("Square")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
