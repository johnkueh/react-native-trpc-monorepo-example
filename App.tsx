import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthedStack from './features/auth/AuthedStack';
import UnauthedStack from './features/auth/UnauthedStack';
import { useAuthentication } from './features/auth/useAuth';

import useCachedResources from './hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { user } = useAuthentication();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {user ? <AuthedStack /> : <UnauthedStack />}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
