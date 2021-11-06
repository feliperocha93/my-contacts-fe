import { render } from '@testing-library/react';

import App from '../../components/App/index';

jest.mock('../../Routes', () => require('../mocks/MockRoutes'));
jest.mock('../../components/Header', () => require('../mocks/MockHeader'));

describe('COMPONENT: App', () => {
  describe(('Rendering tests:'), () => {
    it('should render', () => {
      const { getByTestId } = render(<App />);
      const element = getByTestId('app-component');

      expect(element).toBeInTheDocument();
    });

    it('should have the follow style', () => {
      const { getByTestId } = render(<App />);
      const element = getByTestId('app-component');

      expect(element).toHaveStyle('width: 100%');
      expect(element).toHaveStyle('max-width: 500px');
      expect(element).toHaveStyle('margin: 0 auto');
      expect(element).toHaveStyle('padding: 0 16px');
    });

    it('should have two children => header-component and routes-component', async () => {
      const { getByTestId } = render(<App />);
      const element = getByTestId('app-component');

      expect(element.children.length).toEqual(2);
      expect(element.children[0].getAttribute('data-testid')).toBe('header-component');
      expect(element.children[1].getAttribute('data-testid')).toBe('routes-component');
    });
  });
});
