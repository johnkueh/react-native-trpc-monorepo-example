import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';

export function ModalCloseButton() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <AntDesign name="close" size={24} color={theme.colors.global.primary} />
    </Pressable>
  );
}
