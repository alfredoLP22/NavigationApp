import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: Colors.light.tint,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.light.tint,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: "#BBBBBB",
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#BBBBBB",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  secondaryButton: {
    backgroundColor: "#333333",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  interestsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  interestsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  interestBadge: {
    backgroundColor: "#4A90E2",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  interestText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});