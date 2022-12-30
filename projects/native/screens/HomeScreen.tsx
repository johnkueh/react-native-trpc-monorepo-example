import { useLinkTo, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { Fragment } from 'react';
import { Pressable, View } from 'react-native';
import { AuthedStackParamList } from '../features/auth/AuthedStack';
import { PrimaryButton } from '../features/design-system/buttons';
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

      <CurrentUser />
      <View style={{ height: 10 }} />
      <Greetings />

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

function Greetings() {
  const linkTo = useLinkTo();
  const navigation = useNavigation<NativeStackNavigationProp<AuthedStackParamList>>();
  const result = trpc.greeting.all.useQuery();
  if (!result.data) return null;

  return (
    <>
      <View style={{ height: 10 }} />

      {result.data.map((greeting) => (
        <Fragment key={greeting.id}>
          <View style={{ height: 10 }} />
          <Pressable
            onPress={() => {
              navigation.navigate('EditGreetingModal', { id: greeting.id });
            }}>
            <TextLink>{greeting.message}</TextLink>
          </Pressable>
          <View style={{ height: 10 }} />
        </Fragment>
      ))}

      <View style={{ height: 10 }} />

      <PrimaryButton
        title="Add greeting"
        onPress={async () => {
          linkTo('/AddGreetingModal');
        }}
      />
    </>
  );
}

function CurrentUser() {
  const result = trpc.user.current.useQuery();
  if (!result.data) return null;

  return (
    <>
      <View style={{ height: 10 }} />
      <TextSingleM400>Your name is: {result.data.name}</TextSingleM400>
    </>
  );
}
