import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {createBrowserHistory} from "history";
import {Router} from "react-router";

describe('App', () => {

  test('should render LoginPage as initial page', () => {
    render(<App />);
    const loginButton = screen.getByRole('button', { name: 'LOGIN'});
    expect(loginButton).toBeInTheDocument();
  });

});
