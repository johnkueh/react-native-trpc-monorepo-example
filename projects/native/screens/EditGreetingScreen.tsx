import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { AuthedStackParamList } from '../features/auth/AuthedStack';
import { ScreenContainer } from '../features/design-system/layouts';
import { DeleteGreetingButton } from '../features/greetings/DeleteGreetingButton';
import { EditGreetingForm } from '../features/greetings/EditGreetingForm';
import { trpc } from '../utils/trpc';

export default function EditGreetingScreen() {
  const route = useRoute<RouteProp<AuthedStackParamList, 'EditGreetingModal'>>();
  const greetingId = route.params?.id;

  if (greetingId == null) return null;

  const result = trpc.greeting.byId.useQuery({ id: greetingId });

  if (result.data == null) return null;

  return (
    <ScreenContainer>
      <EditGreetingForm greeting={result.data} />
      <View style={{ height: 30 }} />
      <DeleteGreetingButton id={greetingId} />
    </ScreenContainer>
  );
}
