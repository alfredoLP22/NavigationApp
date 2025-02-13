import { Colors } from "@/constants/Colors";
import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 8,
    paddingVertical: 15,
  },

  tabBar: {
    position: "absolute",
    backgroundColor: Colors.dark.backgroundSoft,
    borderTopWidth: 0,
    height: 60,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: Platform.OS === "ios" ? 20 : 10,
    shadowColor: "#00000088",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
  },

  tabIcon: {
    fontSize: 28,
  },

  tabTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
