import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { TextLink } from './typography';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => {};
  isDisabled?: boolean;
  isLoading?: boolean;
}

export function PrimaryButton({ title, onPress, isDisabled, isLoading }: PrimaryButtonProps) {
  const theme = useTheme();
  const opacity = isDisabled || isLoading ? 0.5 : 1.0;

  return (
    <Button style={{ opacity: opacity }} onPress={isLoading ? null : onPress}>
      <TextLink style={{ color: theme.colors.text.inverted }}>
        {isLoading ? 'Loading...' : title}
      </TextLink>
    </Button>
  );
}

const Button = styled(Pressable)((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
  borderRadius: '8px',
  background: props.theme.colors.global.primary,
}));
