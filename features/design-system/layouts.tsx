import styled from './styled-components';

export const ScreenContainer = styled.View((props) => ({
  padding: 20,
  flex: 1,
  background: props.theme.colors.background.base,
}));
