import { useLinkTo } from '@react-navigation/native';
import { View, Pressable } from 'react-native';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingOne, TextLink, TextSingleM400 } from '../features/design-system/typography';
import { trpc } from '../utils/trpc';

export default function HomeScreen() {
  const linkTo = useLinkTo();

  return (
    <ScreenContainer>
      <View style={{ height: 20 }} />
      <HeadingOne style={{ textAlign: 'center' }}>Welcome to your new home screen 👋 </HeadingOne>
      <View style={{ height: 10 }} />

      <HelloAll />
      <HelloCurrentUser />

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

function HelloAll() {
  const result = trpc.hello.all.useQuery();
  if (!result.data) return null;

  return (
    <>
      <View style={{ height: 10 }} />
      {result.data.map((entries) => (
        <TextSingleM400 key={entries.message}>{entries.message}</TextSingleM400>
      ))}
    </>
  );
}

function HelloCurrentUser() {
  const result = trpc.user.current.useQuery();
  if (!result.data) return null;

  return (
    <>
      <View style={{ height: 10 }} />
      <TextSingleM400>Your name is: {result.data.name}</TextSingleM400>
    </>
  );
}
