import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Se existe um h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const pageTitle = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(pageTitle).toBeInTheDocument();
  });

  test('Se as informações do pokemon aparecem na tela', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeInTheDocument();
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toBeInTheDocument();
  });

  test('Se a imagem do pokemon está correta', () => {
    renderWithRouter(<App />);
    const pokemonImg = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(pokemonImg).toBeInTheDocument();
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pokemonImg).toHaveAttribute('src', imgSrc);
  });

  test('Se o botão More Details funciona corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('Se o tipo do pokemon está correto', () => {
    renderWithRouter(<App />);
    const pokemonType = screen.getByTestId('pokemon-type', { name: 'Electric' });
    expect(pokemonType.innerHTML).toBe('Electric');
  });

  test('O ícone de favorito funciona', () => {
    renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    const linkMoreDetails = screen.getAllByRole('link', { name: 'More details' });
    userEvent.click(linkMoreDetails[0]);
    const checkFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(checkFavorite);
    history.push('/');
    const favoriteIcon = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
