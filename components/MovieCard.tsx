import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/movieCardStyles";
import { Movie } from "@/interfaces/Movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.cover }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>📅 {movie.year}</Text>
      <Text style={styles.rating}>⭐ {movie.rating}</Text>
    </View>
  );
}
