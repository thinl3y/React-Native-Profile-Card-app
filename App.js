import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/profile1.jpeg')} style={styles.avatar} />
        <Text style={styles.name}>Thinley Dorji</Text>
        <Text style={styles.subtitle}>BE Information Technology · Year 3</Text>
        <Text style={styles.bio}>
          For cross platform i intend the develop an app called Stockly it is applicable in day to day life.
        </Text>

        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {/* Step 4.3 Task 3: Display message when likes reach 10 or more */}
        {likes >= 10 && <Text style={styles.popularMessage}>You're popular!</Text>}

        <View style={styles.row}>
          {/* Upvote Button with press feedback */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          {/* Downvote Button prevented from dropping below 0 */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
            onPress={() => setLikes(Math.max(0, likes - 1))}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          {/* Step 4.3 Task 2: Reset Button */}
          <Pressable
            style={({ pressed }) => [styles.button, styles.resetButton, pressed && { opacity: 0.6 }]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  bio: { fontSize: 15, textAlign: 'center', marginTop: 12, lineHeight: 22 },
  likesRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 20 },
  likesText: { fontSize: 18 },
  popularMessage: { fontSize: 14, color: '#2e7d32', fontWeight: 'bold', marginTop: 8 },
  row: { flexDirection: 'row', gap: 8, marginTop: 12 },
  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 72,
  },
  resetButton: {
    backgroundColor: '#6c757d',
  },
  buttonLabel: { color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 },
});