import PropTypes from 'prop-types';

export default function MockButton({ children }) {
  return (
    <button type="button" data-testid="button-component">
      { children }
    </button>
  );
}

MockButton.propTypes = {
  children: PropTypes.string.isRequired,
};
