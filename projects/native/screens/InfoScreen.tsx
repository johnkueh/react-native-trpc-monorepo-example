import { Text, View, StyleSheet } from 'react-native';
import { ScreenContainer } from '../features/design-system/layouts';
import { HeadingTwo } from '../features/design-system/typography';

export default function InfoScreen() {
  return (
    <ScreenContainer>
      <HeadingTwo>Food for thought 🤓</HeadingTwo>
    </ScreenContainer>
  );
}
