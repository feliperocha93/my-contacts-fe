import { render } from '@testing-library/react';

import ContactForm from '../../components/ContactForm/index';

jest.mock('../../components/FormGroup', () => require('../mocks/MockFormGroup'));
jest.mock('../../components/Input', () => require('../mocks/MockInput'));
jest.mock('../../components/Select', () => require('../mocks/MockSelect'));
jest.mock('../../components/Button', () => require('../mocks/MockButton'));

const props = {
  buttonLabel: 'Label',
};

// TODO: Move this function to a global functions file
function getComponentInsideFormGroup(form, formGroupIndex) {
  return form.children[formGroupIndex].children[0];
}

describe('COMPONENT: ContactForm', () => {
  describe(('Rendering tests:'), () => {
    it('should render', () => {
      const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
      const element = getByTestId('contactform-component');

      expect(element).toBeInTheDocument();
    });

    it('should have 5 children', () => {
      const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
      const element = getByTestId('contactform-component');

      expect(element.children.length).toEqual(5);
    });

    it.each([
      [0, 'formgroup-component'],
      [1, 'formgroup-component'],
      [2, 'formgroup-component'],
      [3, 'formgroup-component'],
      [4, 'buttoncontainer-component'],
    ])(
      'children %i must be a %s => ',
      (formGroupoIndex, componentDataTestid) => {
        const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
        const element = getByTestId('contactform-component');

        expect(
          element.children[formGroupoIndex].getAttribute('data-testid'),
        ).toBe(componentDataTestid);
      },
    );

    it.each([
      [0, 'input-component'],
      [1, 'input-component'],
      [2, 'input-component'],
      [3, 'select-component'],
      [4, 'button-component'],
    ])(
      'children %i must encapsulate a %s => ',
      (formGroupoIndex, componentDataTestid) => {
        const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
        const element = getByTestId('contactform-component');

        expect(
          getComponentInsideFormGroup(element, formGroupoIndex).getAttribute('data-testid'),
        ).toBe(componentDataTestid);
      },
    );

    it('mmust pass props buttonLabel correctly to Button', () => {
      const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
      const element = getByTestId('contactform-component');
      const button = getComponentInsideFormGroup(element, 4);

      expect(button.innerHTML).toBe(props.buttonLabel);
    });
  });

  describe(('User interaction tests:'), () => {
    it.skip('should call callback function', () => {
      const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
      const element = getByTestId('contactform-component');

      expect(element).toBe();
    });

    it.skip('when state changes', () => {
      const { getByTestId } = render(<ContactForm buttonLabel={props.buttonLabel} />);
      const element = getByTestId('contactform-component');

      expect(element).toBe();
    });
  });
});
