import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const FormLabel = styled(Text)((props) => ({
  ...props.theme.fonts.textSingleS500,
  margin: '8px 0px',
}));

export const FormInput = styled(TextInput)((props) => ({
  fontWeight: 500,
  fontSize: '16px',
  padding: '16px',
  borderRadius: '8px',
  borderWidth: '1px',
  borderColor: props.theme.colors.global.border,
  background: props.theme.colors.background.base,
}));
