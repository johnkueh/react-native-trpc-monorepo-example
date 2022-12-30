import { useLinkTo } from '@react-navigation/native';
import { Pressable, View } from 'react-native';

import { logout } from '../features/auth/useAuth';
import { Divider, ScreenContainer } from '../features/design-system/layouts';
import { HeadingTwo, TextLink } from '../features/design-system/typography';

export default function AccountScreen() {
  const linkTo = useLinkTo();

  return (
    <ScreenContainer>
      <View style={{ height: 10 }} />
      <HeadingTwo>Welcome to your profile!</HeadingTwo>
      <View style={{ height: 20 }} />
      <Pressable onPress={() => linkTo('/Update User')}>
        <TextLink>Update user</TextLink>
      </Pressable>
      <View style={{ height: 20 }} />
      <Pressable onPress={() => linkTo('/Debug')}>
        <TextLink>Debug</TextLink>
      </Pressable>
      <View style={{ height: 20 }} />
      <Divider />
      <View style={{ height: 20 }} />
      <Pressable onPress={logout}>
        <TextLink>Logout</TextLink>
      </Pressable>
    </ScreenContainer>
  );
}
