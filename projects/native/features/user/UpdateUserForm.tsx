import { User } from '@packages/database';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { trpc } from '../../utils/trpc';
import { PrimaryButton } from '../design-system/buttons';
import { FormInput, FormLabel } from '../design-system/forms';

interface UserFormDefaults {
  user: User;
}

export function UpdateUserForm({ user: { name } }: UserFormDefaults) {
  const [formValue, setFormValue] = useState({
    name: name ?? '',
  });
  const mutateUser = trpc.user.update.useMutation({
    onSuccess: () => {
      utils.user.current.invalidate();
    },
  });
  const navigation = useNavigation();
  const utils = trpc.useContext();

  return (
    <>
      {mutateUser.error && <Text style={{ color: 'red' }}>{mutateUser.error.message}</Text>}
      <FormLabel>Name</FormLabel>
      <FormInput
        value={formValue.name}
        onChangeText={(name) => {
          setFormValue({ ...formValue, name: name });
        }}
      />
      <View style={{ height: 20 }} />
      <PrimaryButton
        isLoading={mutateUser.isLoading}
        onPress={async () => {
          mutateUser.mutate(formValue);
          navigation.goBack();
        }}
        title="Save"
      />
    </>
  );
}
