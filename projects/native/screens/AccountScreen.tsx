import { useState, useEffect } from 'react';
import { View, Button, TouchableOpacity, Pressable } from 'react-native';
import { auth } from '../features/auth/firebaseConfig';

import { logout } from '../features/auth/useAuth';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingTwo, TextLink, TextSingleM400 } from '../features/design-system/typography';
import { apiBaseUrl } from '../utils/TRPCProvider';

export default function AccountScreen() {
  return (
    <ScreenContainer>
      <View style={{ height: 10 }} />
      <HeadingTwo>Welcome to your profile!</HeadingTwo>
      <View style={{ height: 20 }} />
      <Pressable onPress={logout}>
        <TextLink>Logout</TextLink>
      </Pressable>
      <View style={{ height: 20 }} />
      <Debug />
    </ScreenContainer>
  );
}

function Debug() {
  const [idToken, setIdToken] = useState('');
  useEffect(() => {
    async function getIdToken() {
      const token = await auth.currentUser?.getIdToken();
      setIdToken(token || '');
    }

    getIdToken();
  }, []);

  return (
    <>
      <TextSingleM400>apiBaseUrl: {apiBaseUrl}</TextSingleM400>
      <View style={{ height: 20 }} />
      <TextSingleM400>idToken: {idToken}</TextSingleM400>
    </>
  );
}
