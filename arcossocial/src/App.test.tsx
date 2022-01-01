import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {createBrowserHistory} from "history";
import {Router} from "react-router";

describe('App', () => {

  const localStorageMock = (function() {
    let store = {};

    return {
      getItem(key:string) {
        // @ts-ignore
        return store[key];
      },
      setItem(key:string, value:string) {
        // @ts-ignore
        store[key] = value;
      },
      clear() {
        store = {};
      }
    };
  })();

  afterEach(() => {
    window.localStorage.clear();
  });

  test('should render LoginPage as initial page', () => {
    render(<App />);
    const loginButton = screen.getByRole('button', { name: 'LOGIN'});
    expect(loginButton).toBeInTheDocument();
  });

  test('should redirect to Main Page if the user is logged', () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    window.localStorage.setItem('arcossocial-token', 'testToken');
    const history = createBrowserHistory();
    render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(history.location.pathname).toBe('main');
  });

});
