import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthedStack from './features/auth/AuthedStack';
import UnauthedStack from './features/auth/UnauthedStack';
import { useAuthentication } from './features/auth/useAuth';
import useCachedResources from './utils/useCachedResources';
import { theme } from './features/design-system/theme';
import { ThemeProvider } from './features/design-system/styled-components';
import { TRPCProvider } from './utils/TRPCProvider';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { user } = useAuthentication();
  const isLoadingAuth = user === undefined;
  const isUnauthed = user === null;
  const isAuthed = user != null;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <TRPCProvider>
          <ThemeProvider theme={theme}>
            {isLoadingAuth ? <View /> : isAuthed ? <AuthedStack /> : <UnauthedStack />}
          </ThemeProvider>
        </TRPCProvider>
      </SafeAreaProvider>
    );
  }
}
