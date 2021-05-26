import React, { useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={s.root}>
        <Heading size="l" className={s.title}>
          {!isLoading && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div>
          {!isLoading &&
            data.pokemons.map(
              (item: { name: string; stats: { attack: number; defense: number }; types: object[]; img: string }) => (
                <PokemonCard
                  name={item.name}
                  attack={item.stats.attack}
                  defense={item.stats.defense}
                  types={item.types.map((el) => (
                    <span>{el}</span>
                  ))}
                  img={item.img}
                />
              ),
            )}
        </div>
      </Layout>
    </>
  );
};

export default PokedexPage;
