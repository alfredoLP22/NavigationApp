import { ScrollView, Text } from "react-native";
import MovieCard from "@/components/MovieCard";
import styles from "@/styles/homeStyles";
import { topMovies, mostViewedMovies } from "@/helpers/movies";
import Container from "@/components/ui/common/Container";

export default function HomeScreen() {
  return (
    <Container>
      <Text style={styles.header}>Top Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>

      <Text style={styles.header}>Más Vistas</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      >
        {mostViewedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </Container>
  );
}
