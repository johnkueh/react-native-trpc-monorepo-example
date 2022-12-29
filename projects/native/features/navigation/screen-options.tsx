import { HeaderBackground } from '@react-navigation/elements';
import styled from '../design-system/styled-components';

export const CustomHeaderBackground = styled(HeaderBackground)((props) => ({
  borderBottomWidth: 1,
  borderBottomColor: props.theme.colors.global.border,
}));

export const screenOptions = {
  headerShadowVisible: false,
  headerBackground: () => <CustomHeaderBackground />,
};
