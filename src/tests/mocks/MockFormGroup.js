import PropTypes from 'prop-types';

export default function MockFormGroup({ children }) {
  return (
    <div data-testid="formgroup-component">
      {children}
    </div>
  );
}

MockFormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
