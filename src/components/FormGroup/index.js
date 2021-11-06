import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Container data-testid="formgroup-component">
      {children}
      { error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
