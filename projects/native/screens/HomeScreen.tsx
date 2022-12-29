import { useLinkTo } from '@react-navigation/native';
import { View, Button, Pressable } from 'react-native';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingOne, TextLink } from '../features/design-system/typography';

export default function HomeScreen() {
  const linkTo = useLinkTo();

  return (
    <ScreenContainer>
      <View style={{ height: 20 }} />
      <HeadingOne style={{ textAlign: 'center' }}>Welcome to your new home screen 👋 </HeadingOne>
      <View style={{ height: 32 }} />
      <Pressable
        onPress={() => {
          linkTo('/Detail');
        }}>
        <TextLink>Go to details screen</TextLink>
      </Pressable>
      <View style={{ height: 20 }} />
      <Pressable
        onPress={() => {
          linkTo('/InfoModal');
        }}>
        <TextLink>Open info modal</TextLink>
      </Pressable>
    </ScreenContainer>
  );
}
