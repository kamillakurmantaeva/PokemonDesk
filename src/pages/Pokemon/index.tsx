import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return <div>{id}</div>;
};

export default Pokemon;
