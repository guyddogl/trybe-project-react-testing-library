import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Teste o componente <About.js />', () => {
  test('Se existe um h2 com o texto About Pokédex', () => {
    render(<About />);
    const pageTitle = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(pageTitle).toBeInTheDocument();
  });
  test('Se existe um parágrafo com o texto This application simulates', () => {
    render(<About />);
    const pageText = screen.getByText(/This application simulates/i);
    expect(pageText).toBeInTheDocument();
  });
  test('Se existe a imagem da Pokédex', () => {
    render(<About />);
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex).toBeInTheDocument();
    expect(imgPokedex.getAttribute('src')).toBe(imgSrc);
    expect(imgPokedex).toHaveAttribute('src', imgSrc);
  });
});
