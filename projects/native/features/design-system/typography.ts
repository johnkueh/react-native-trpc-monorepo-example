import styled from './styled-components';

export const HeadingOne = styled.Text((props) => props.theme.fonts.headingOne);
export const HeadingTwo = styled.Text((props) => props.theme.fonts.headingTwo);
export const TextSingleM400 = styled.Text((props) => props.theme.fonts.textSingleM400);
export const TextSingleM500 = styled.Text((props) => props.theme.fonts.textSingleM500);
export const TextSingleM600 = styled.Text((props) => props.theme.fonts.textSingleM600);
export const TextSingleS500 = styled.Text((props) => props.theme.fonts.textSingleS500);
export const TextLink = styled(TextSingleM600)((props) => ({
  color: props.theme.colors.global.primary,
}));
