import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { logout } from '../features/auth/useAuth';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={{height: 10}} />
      <Button
        onPress={logout}
        title="Logout"
      />
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
