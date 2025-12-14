import { computed, onMounted, ref } from 'vue';
import { GameStatus } from '@/modules/pokemon/interfaces/game-status-enum.ts';
import pokemonApi from '@/modules/pokemon/api/pokemonApi.ts';
import type { Pokemon, PokemonListResponse } from '@/modules/pokemon/interfaces';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  });
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (hasMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    // Recupera los primeros 4 elementos de la lista
    pokemonOptions.value = pokemons.value.slice(0, hasMany);
    // Deja todos los elementos menos los 4 seleccionados
    pokemons.value = pokemons.value.slice(hasMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;
    if (hasWon){
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }

    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    pokemons.value = await getPokemons();
    getNextOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    // Methods
    getNextOptions,
    checkAnswer,
  };
};
