import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
