import { ScreenContainer } from '../features/design-system/layouts';
import { UpdateUserForm } from '../features/user/UpdateUserForm';
import { trpc } from '../utils/trpc';

export default function UpdateUserScreen() {
  const result = trpc.user.current.useQuery();
  if (!result.data) return null;

  return (
    <ScreenContainer>
      <UpdateUserForm user={result.data} />
    </ScreenContainer>
  );
}
