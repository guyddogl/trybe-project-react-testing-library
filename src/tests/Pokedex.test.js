import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Se existe um h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const pageTitle = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(pageTitle).toBeInTheDocument();
  });

  test('Se existe o botão Próximo Pokemon', () => {
    renderWithRouter(<App />);
    const buttonNextPokemon = screen.getByTestId('next-pokemon');
    expect(buttonNextPokemon).toBeInTheDocument();
  });

  test('Se ao clicar em Próximo Pokemon aparece Charmander', () => {
    renderWithRouter(<App />);
    const buttonNextPokemon = screen.getByTestId('next-pokemon');
    expect(buttonNextPokemon).toBeInTheDocument();
    userEvent.click(buttonNextPokemon);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();
  });

  test('Se existem os botões de filtro', () => {
    renderWithRouter(<App />);
    const filters = 7;
    const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
    expect(buttonsFilter).toHaveLength(filters);
    const buttonFilterAll = screen.getByText('All');
    expect(buttonFilterAll).toBeInTheDocument();
    userEvent.click(buttonFilterAll);
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
    const totalButtons = 9;
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(totalButtons);
  });

  test('Se existem os botões de cada tipo de pokemon', () => {
    renderWithRouter(<App />);
    const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
    const pokemonType = [
      'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    buttonsFilter.forEach((button, index) => {
      expect(button).toHaveTextContent(pokemonType[index]);
    });
  });
});
