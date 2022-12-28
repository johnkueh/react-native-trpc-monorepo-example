import { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Pressable } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { login } from './useAuth';
import { ScreenContainer } from '../design-system/layouts';
import { TextLink } from '../design-system/typography';
import { PrimaryButton } from '../design-system/buttons';
import { FormInput, FormLabel } from '../design-system/forms';

export default function SignInScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    error: '',
  });
  const linkTo = useLinkTo();

  return (
    <ScreenContainer>
      {formValue.error && <Text style={styles.error}>{formValue.error}</Text>}
      <View style={{ height: 10 }} />
      <FormLabel>Email</FormLabel>
      <FormInput
        onChangeText={(email) => {
          setFormValue({ ...formValue, email: email });
        }}
        style={styles.input}
        autoCapitalize="none"
        placeholder="Email"
      />
      <View style={{ height: 20 }} />
      <FormLabel>Password</FormLabel>
      <FormInput
        onChangeText={(password) => {
          setFormValue({ ...formValue, password: password });
        }}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={{ height: 20 }} />
      <PrimaryButton
        isLoading={isLoading}
        onPress={async () => {
          setIsLoading(true);
          const error = await login(formValue.email, formValue.password);
          if (error != null) {
            setFormValue({ ...formValue, error: error });
          }
          setIsLoading(false);
        }}
        title="Log in"
      />
      <View style={{ height: 20 }} />
      <Pressable
        onPress={() => {
          linkTo('/Sign up');
        }}>
        <TextLink>Sign up</TextLink>
      </Pressable>
    </ScreenContainer>
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
