/* eslint-disable no-undef */
// TODO: Check if is possible to keep this imports in setup file
import { screen, render } from '@testing-library/react';

import App from '../../components/App/index';

// TODO: Move mocks components to separared folder
jest.mock('../../Routes', () => function DummyRoutes() {
  return (
    <div date-testid="dummy-routes">
      <span>DummyRoutes</span>
    </div>
  );
});

jest.mock('../../components/Header', () => function DummyHeader() {
  return (
    <div date-testid="header-component">
      <span>DummyRoutes</span>
    </div>
  );
});

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

    it('should have two children', () => {
      act(() => {
        render(<App />);
      });
      const element = screen.getByTestId('app-component');
      expect(element.children.length).toBe(2);
    });
  });

  describe(('User interecting testing'), () => {
    // Callback
    // Rendering by states
  });
});
