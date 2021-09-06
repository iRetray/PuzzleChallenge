import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Image } from "react-native";

const CardCarrousel = ({ title, imageURL }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: imageURL,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "stretch",
    marginHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  card: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fafafa",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
});

CardCarrousel.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
};

export default CardCarrousel;
