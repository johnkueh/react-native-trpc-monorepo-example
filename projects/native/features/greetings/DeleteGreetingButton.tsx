import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';
import { trpc } from '../../utils/trpc';
import { TextLink } from '../design-system/typography';

export function DeleteGreetingButton({ id }: { id: number }) {
  const navigation = useNavigation();
  const utils = trpc.useContext();
  const mutation = trpc.greeting.delete.useMutation({
    onSuccess: () => {
      utils.greeting.all.invalidate();
      navigation.goBack();
    },
  });
  const isLoading = mutation.isLoading;
  const theme = useTheme();

  return (
    <>
      <Pressable
        disabled={isLoading}
        onPress={() => {
          mutation.mutate({ id });
        }}>
        <TextLink
          style={
            isLoading
              ? {
                  color: theme.colors.text.disabled,
                }
              : undefined
          }>
          {isLoading ? 'Loading...' : 'Delete'}
        </TextLink>
      </Pressable>
    </>
  );
}
