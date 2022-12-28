import { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { signup } from './useAuth';

export default function SignUpScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    error: '',
  });

  return (
    <View style={styles.container}>
      {formValue.error && <Text style={styles.error}>{formValue.error}</Text>}
      <View style={{ height: 10 }} />
      <TextInput
        onChangeText={(email) => {
          setFormValue({ ...formValue, email: email });
        }}
        style={styles.input}
        autoCapitalize="none"
        placeholder="Email"
      />
      <TextInput
        onChangeText={(password) => {
          setFormValue({ ...formValue, password: password });
        }}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        disabled={isLoading}
        onPress={async () => {
          setIsLoading(true);
          const error = await signup(formValue.email, formValue.password);
          if (error != null) {
            setFormValue({ ...formValue, error: error });
          }
          setIsLoading(false);
        }}
        title={isLoading ? 'Loading...' : 'Submit'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  error: {
    color: 'red',
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#efefef',
  },
});
