import React from 'react';
// import { render, screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Se existem os links Home, About e Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorite).toBeInTheDocument();
  });

  test('Se é redirecionada para a página inicial, na URL / ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('Se é redirecionada para a página about, na URL /about ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /About/i });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('Se é redirecionada para favorite pokémons ao clicar em Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Se é redirecionada para a not found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/flamengo');
    const notFoundTitle = screen.getByRole('heading', { level: 2, name: /not found/ });
    expect(notFoundTitle).toBeInTheDocument();
    history.push('/guyddo');
    expect(notFoundTitle).toBeInTheDocument();
  });
});
