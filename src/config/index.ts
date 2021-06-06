// eslint-disable-next-line no-shadow
export enum configEndpoint {
  getPokemon = 'getPokemon',
  getPokemons = 'getPokemons',
  getPokemonTypes = 'getPokemonTypes',
}

export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [configEndpoint.getPokemons]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [configEndpoint.getPokemon]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      // FAKE API
      // createPokemon: {
      //   method: 'POST',
      //   uri: {
      //     pathname: '/api/v1/pokemon/create',
      //   },
      // },
      // updatePokemon: {
      //   method: 'PATCH',
      //   uri: {
      //     pathname: '/api/v1/pokemon/{id}',
      //   },
      // },
      // deletePokemon: {
      //   method: 'DELETE',
      //   uri: {
      //     pathname: '/api/v1/pokemon/{id}/delete',
      //   },
      // },
    },
  },
};

export default config;
