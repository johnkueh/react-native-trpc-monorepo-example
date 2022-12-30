import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { auth } from '../features/auth/firebaseConfig';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingTwo, TextSingleM400 } from '../features/design-system/typography';
import { apiBaseUrl } from '../utils/TRPCProvider';

export default function DetailScreen() {
  return (
    <ScreenContainer>
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
      <HeadingTwo>apiBaseUrl</HeadingTwo>
      <TextSingleM400>{apiBaseUrl}</TextSingleM400>
      <View style={{ height: 20 }} />
      <HeadingTwo>idToken</HeadingTwo>
      <TextSingleM400>{idToken}</TextSingleM400>
    </>
  );
}
