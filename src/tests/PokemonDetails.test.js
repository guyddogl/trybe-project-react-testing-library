import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

beforeEach(() => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
});

describe('Teste o componente <PokemonDetails.js />', () => {
  test('Se existe um h2 com o texto Pikachu Details', () => {
    const pageTitle = screen
      .getByRole('heading', { level: 2, name: /Pikachu Details/i });
    expect(pageTitle).toBeInTheDocument();
  });

  test('Se existe a label Pokémon favoritado?', () => {
    const isFavorite = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(isFavorite).toBeInTheDocument();
  });

  test('Se existe o h2 Summary', () => {
    const summaryH2 = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(summaryH2).toBeInTheDocument();
  });

  test('Se existe o parágrafo This intelligent Pokémon...', () => {
    const textP = screen.getByText(/This intelligent Pokémon/i);
    expect(textP).toBeInTheDocument();
  });

  test('Se existe o h2 Game Locations of Pikachu', () => {
    const gameLocationH2 = screen.getByRole('heading', { level: 2, name: /Locations/i });
    expect(gameLocationH2).toBeInTheDocument();
  });

  test('Se existem as imagens com as localizações', () => {
    const imagesSrc = ['https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png'];
    const images = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(images).toHaveLength(2);
    images.forEach((e, i) => {
      expect(e).toHaveAttribute('src', imagesSrc[i]);
    });
  });
});
