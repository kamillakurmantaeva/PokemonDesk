import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента: "getPokemons" и пустой объект. На выходе получить объект с полями: method, равный GET; объект uri с полями pathname, protocol, host и пустым query; а также пустой объект body.', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента: "getPokemons" и { name: "Pikachu" }. На выходе получить объект с полями: method, равный GET; объект uri с полями pathname, protocol, host и query с полем name, равным "Pikachu"; а также пустой объект body.', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента: "getPokemon" и { id: 25 }. На выходе получить объект с полями: method, равный GET; объект uri с полями pathname, protocol, host и пустым query; а также пустой объект body.', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });
});
