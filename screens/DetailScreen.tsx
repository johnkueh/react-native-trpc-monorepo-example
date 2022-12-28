import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The devil is in the detail 😈</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
