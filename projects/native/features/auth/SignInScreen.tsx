import { useLinkTo } from '@react-navigation/native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { PrimaryButton } from '../design-system/buttons';
import { FormInput, FormLabel } from '../design-system/forms';
import { ScreenContainer } from '../design-system/layouts';
import { TextLink } from '../design-system/typography';
import { login } from './useAuth';

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
      {formValue.error && <Text style={{ color: 'red' }}>{formValue.error}</Text>}
      <View style={{ height: 10 }} />
      <FormLabel>Email</FormLabel>
      <FormInput
        onChangeText={(email) => {
          setFormValue({ ...formValue, email: email });
        }}
        autoCapitalize="none"
        placeholder="john@doe.com"
      />
      <View style={{ height: 20 }} />
      <FormLabel>Password</FormLabel>
      <FormInput
        onChangeText={(password) => {
          setFormValue({ ...formValue, password: password });
        }}
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
