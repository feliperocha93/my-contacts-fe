/* eslint-disable global-require */
/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';

import App from '../../components/App/index';

jest.mock('../../Routes', () => require('../mocks/MockRoutes'));
jest.mock('../../components/Header', () => require('../mocks/MockHeader'));

describe('App Component', () => {
  describe(('Rendering testing'), () => {
    // Render - should has a container with style rules wrapper the content
    // Styles
    // DOM tree - App must has a Header and a Routes
    // Rendering by props

    it('should render', () => {
      render(<App />);
      const element = screen.getByTestId('app-component');
      expect(element.tagName).toBeTruthy();
    });

    it.only('should have the follow style', () => {
      render(<App />);
      const element = screen.getByTestId('app-component');
      expect(element).toHaveStyle('width: 100%');
      expect(element).toHaveStyle('max-width: 500px');
      expect(element).toHaveStyle('margin: 0 auto');
      expect(element).toHaveStyle('padding: 0 16px');
    });

    it('should have two children => header-component and routes-component', () => {
      render(<App />);
      const element = screen.getByTestId('app-component');
      expect(element.children.length).toBe(2);
      // expect(element.children[0].getAttribute('data-testid')).toBe('header-component');
      console.log(element.children[0].getAttribute(''));
      // expect(element.children[1].getAttribute('data-testid')).toBe('routes-component');
    });
  });

  describe(('User interecting testing'), () => {
    // Callback
    // Rendering by states
  });
});
