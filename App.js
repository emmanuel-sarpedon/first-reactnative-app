import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView>
        {/* Bannière */}
        <View style={styles.banner}>
          <Image
            style={styles.bannerLogo}
            source={require("./assets/images/logo.png")}
          ></Image>
        </View>

        <View style={styles.container}>
          <Text style={styles.movieTitle}>Interstellar</Text>
          <Text style={styles.movieDetails}>
            2014 PG-13 2h 49min Adventure, Drama, Sci-Fr
          </Text>
          <View style={styles.movieDescription}>
            <Image
              style={styles.moviePicture}
              source={require("./assets/images/movie.jpeg")}
            ></Image>
            <View style={{ flexGrow: 1, flex: 1, marginLeft: 20 }}>
              <Text style={styles.movieSynopsis}>
                A team of explorers travel trough a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: "#0277BE",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    padding: 10,
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  + Add to watchlist
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#191919",
  },

  banner: {
    height: 50,
    backgroundColor: "#393939",
    paddingHorizontal: 15,
    flexDirection: "row",
  },

  bannerLogo: {
    width: "15%",
    height: null,
    resizeMode: "contain",
  },

  container: {
    paddingHorizontal: 15,
    backgroundColor: "#202020",
    paddingVertical: 10,
  },

  movieTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "200",
    marginBottom: 10,
  },

  movieDetails: {
    color: "grey",
    fontSize: 15,
    fontWeight: "normal",
  },

  movieDescription: {
    marginVertical: 30,
    flexDirection: "row",
  },

  moviePicture: {
    width: 130,
    height: 176.5,
    resizeMode: "contain",
    backgroundColor: "white",
  },

  movieSynopsis: {
    color: "white",
    lineHeight: 25,
  },
});
