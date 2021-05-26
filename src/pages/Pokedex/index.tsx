import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import req from '../../utils/request';

import s from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return { data, isLoading, isError };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <Layout className={s.root}>
        <Heading size="l" className={s.title}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          {data.pokemons.map(
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
