import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import MockedService from "./services/MockedService";
import CardCarrousel from "./components/CardCarrousel";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    console.log("calling service");
    MockedService.getCardsInformation().then((response) => {
      const isSucess = response && Array.isArray(response);
      if (isSucess) {
        setListCards(response);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {listCards &&
        listCards.map(
          ({ title, image }, indexIteration) =>
            indexIteration === currentIndex && (
              <CardCarrousel
                key={indexIteration}
                title={title}
                imageURL={image}
              />
            )
        )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(currentIndex - 1);
          }}
          style={
            currentIndex === 0
              ? { ...styles.button, ...styles.disabled }
              : styles.button
          }
          disabled={currentIndex === 0}
        >
          <MaterialIcons
            name="skip-previous"
            size={15}
            color="white"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          style={
            currentIndex === listCards.length - 1
              ? { ...styles.button, ...styles.disabled }
              : styles.button
          }
          disabled={currentIndex === listCards.length - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
          <MaterialIcons
            name="skip-next"
            size={15}
            color="white"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonsContainer: {
    padding: 30,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    maxWidth: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginHorizontal: 15,
  },
  disabled: {
    backgroundColor: "grey",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Carrousel;
