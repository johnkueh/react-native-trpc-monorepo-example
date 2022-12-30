import { useState } from 'react';
import { Text, View } from 'react-native';
import { trpc } from '../../utils/trpc';
import { PrimaryButton } from '../design-system/buttons';
import { FormInput, FormLabel } from '../design-system/forms';
import { ScreenContainer } from '../design-system/layouts';
import { signup } from './useAuth';

export default function SignUpScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
  });
  const utils = trpc.useContext();
  const createUserMutation = trpc.user.create.useMutation({
    onSuccess: () => {
      utils.invalidate();
    },
  });

  return (
    <ScreenContainer>
      {formValue.error && <Text style={{ color: 'red' }}>{formValue.error}</Text>}
      <View style={{ height: 10 }} />
      <FormLabel>Name</FormLabel>
      <FormInput
        onChangeText={(name) => {
          setFormValue({ ...formValue, name: name });
        }}
        placeholder="John Doe"
      />
      <View style={{ height: 20 }} />
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
          const error = await signup(formValue.email, formValue.password);
          if (error != null) {
            setFormValue({ ...formValue, error: error });
          }
          createUserMutation.mutate({ name: formValue.name });
          setIsLoading(false);
        }}
        title="Sign up"
      />
      <View style={{ height: 20 }} />
    </ScreenContainer>
  );
}
