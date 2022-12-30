import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { trpc } from '../../utils/trpc';
import { PrimaryButton } from '../design-system/buttons';
import { FormInput, FormLabel } from '../design-system/forms';

interface GreetingFormDefaults {
  greeting?: {
    message: string;
  };
}

export function AddGreetingForm({ greeting }: GreetingFormDefaults) {
  const [formValue, setFormValue] = useState({
    message: greeting?.message ?? '',
  });
  const utils = trpc.useContext();
  const mutation = trpc.greeting.create.useMutation({
    onSuccess: () => {
      utils.greeting.all.invalidate();
      navigation.goBack();
    },
  });
  const navigation = useNavigation();

  return (
    <>
      {mutation.error && <Text style={{ color: 'red' }}>{mutation.error.message}</Text>}
      <FormLabel>Message</FormLabel>
      <FormInput
        value={formValue.message}
        onChangeText={(message) => {
          setFormValue({ ...formValue, message: message });
        }}
      />
      <View style={{ height: 20 }} />
      <PrimaryButton
        isLoading={mutation.isLoading}
        onPress={async () => {
          mutation.mutate(formValue);
        }}
        title="Save"
      />
    </>
  );
}
