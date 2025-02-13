import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Container from "@/components/ui/common/Container";
import styles from "@/styles/profileStyle";

export default function ProfileScreen() {
  return (
    <Container>
      <View style={styles.header}></View>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>
          Software Developer | React Native Enthusiast
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>15</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.interestsContainer}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.interestsList}>
          {["Coding", "Movies", "Gaming", "Photography"].map((item) => (
            <View key={item} style={styles.interestBadge}>
              <Text style={styles.interestText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
}