import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Se existe um h2 com o texto Favorite pokémons', () => {
    render(<FavoritePokemons />);
    const pageTitle = screen
      .getByRole('heading', { level: 2, name: /Favorite pokémons/i });
    expect(pageTitle).toBeInTheDocument();
  });
  test('Se existe um parágrafo com o texto No favorite pokemon found', () => {
    render(<FavoritePokemons />);
    const noFavorite = screen.getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
});
