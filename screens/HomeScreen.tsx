import { useLinkTo } from '@react-navigation/native';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const linkTo = useLinkTo();

  return (
    <View style={styles.container}>
      <View style={{ height: 20 }} />
      <Text style={styles.title}>Welcome to your new home screen 👋 </Text>
      <View style={{ height: 20 }} />
      <Button
        onPress={() => {
          linkTo('/Detail');
        }}
        title="Go to details screen"
      />
      <View style={{ height: 10 }} />
      <Button
        onPress={() => {
          linkTo('/InfoModal');
        }}
        title="Open info modal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
});
