import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Constants from "expo-constants";

import { Ionicons } from "@expo/vector-icons";

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

        {/* Top frame */}
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
          <View style={styles.rates}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Ionicons
                name="star"
                size={24}
                color="#E6B91F"
                style={{ marginBottom: 5 }}
              />
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                >
                  8.6
                </Text>
                <Text style={{ color: "lightgrey", fontSize: 13 }}>/10</Text>
              </View>
              <Text style={{ color: "lightgrey" }}>1.1M</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Ionicons
                name="star-outline"
                size={24}
                color="lightgrey"
                style={{ marginBottom: 5 }}
              />

              <Text
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                Rate this
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "#61C74F",
                  padding: 2,
                  marginBottom: 8,
                }}
              >
                74
              </Text>
              <Text style={{ color: "white", fontSize: 13 }}>Metascore</Text>
              <Text style={{ color: "lightgrey", fontSize: 11 }}>
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom frame */}
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
              Top Billed Cast
            </Text>
            <Text
              style={{
                color: "#109DE3",
                textTransform: "uppercase",
                fontSize: 14,
              }}
            >
              See all
            </Text>
          </View>

          <ScrollView horizontal>
            <View
              style={{
                width: 150,
                backgroundColor: "#2A2A2A",
                marginTop: 10,
                marginRight: 10,
              }}
            >
              <Image
                style={styles.actorPicture}
                source={require("./assets/images/actors/matthew-mcconaughey.jpeg")}
              ></Image>
              <Text
                numberOfLines={1}
                style={{ color: "white", paddingHorizontal: 10, fontSize: 12 }}
              >
                Matthew McConaughey
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: "lightgrey",
                  paddingHorizontal: 10,
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                Cooper
              </Text>
            </View>

            <View
              style={{
                width: 150,
                backgroundColor: "#2A2A2A",
                marginTop: 10,
                marginRight: 10,
              }}
            >
              <Image
                style={styles.actorPicture}
                source={require("./assets/images/actors/anne-hathaway.jpeg")}
              ></Image>
              <Text
                numberOfLines={1}
                style={{ color: "white", paddingHorizontal: 10, fontSize: 12 }}
              >
                Anne Hathaway
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: "lightgrey",
                  paddingHorizontal: 10,
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                Brand
              </Text>
            </View>

            <View
              style={{
                width: 150,
                backgroundColor: "#2A2A2A",
                marginTop: 10,
                marginRight: 10,
              }}
            >
              <Image
                style={styles.actorPicture}
                source={require("./assets/images/actors/jessica-chastain.jpeg")}
              ></Image>
              <Text
                numberOfLines={1}
                style={{ color: "white", paddingHorizontal: 10, fontSize: 12 }}
              >
                Jessica Chastain
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: "lightgrey",
                  paddingHorizontal: 10,
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                Murph
              </Text>
            </View>
          </ScrollView>

          <View>
            <Text style={{ color: "white", marginTop: 10 }}>Director</Text>
            <Text style={{ color: "white", fontSize: 12, color: "lightgrey" }}>
              Christopher Nolan
            </Text>
            <Text style={{ color: "white", marginTop: 10 }}>Writers</Text>
            <Text style={{ color: "white", fontSize: 12, color: "lightgrey" }}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
            <Text></Text>
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
    marginBottom: 20,
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

  rates: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actorPicture: {
    width: 150,
    height: 190,
    resizeMode: "cover",
    marginBottom: 5,
  },
});
