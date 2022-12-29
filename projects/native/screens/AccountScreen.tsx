import { View, Button, TouchableOpacity, Pressable } from 'react-native';

import { logout } from '../features/auth/useAuth';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingTwo, TextLink } from '../features/design-system/typography';

export default function AccountScreen() {
  return (
    <ScreenContainer>
      <View style={{ height: 10 }} />
      <HeadingTwo>Welcome to your profile!</HeadingTwo>
      <View style={{ height: 20 }} />
      <Pressable onPress={logout}>
        <TextLink>Logout</TextLink>
      </Pressable>
    </ScreenContainer>
  );
}
