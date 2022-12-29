import styled from './styled-components';

export const ScreenContainer = styled.ScrollView((props) => ({
  padding: 20,
  flex: 1,
  background: props.theme.colors.background.base,
}));
