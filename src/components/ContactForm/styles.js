import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonContainer = styled.div.attrs(() => ({
  'data-testid': 'buttoncontainer-component',
}))`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
