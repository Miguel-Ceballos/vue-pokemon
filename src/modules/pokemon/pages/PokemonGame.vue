<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame.ts';
import { GameStatus } from '@/modules/pokemon/interfaces';

const {
  gameStatus,
  isLoading,
  clickCount,
  pokemonOptions: options,
  randomPokemon,
  checkAnswer,
  getNextRound,
} = usePokemonGame();
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col items-center justify-center text-gray-200 w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemons</h3>
  </section>

  <section
    v-else
    class="flex flex-col items-center justify-center text-gray-200 w-screen h-screen gap-8"
  >
    <h1 class="text-3xl">¿Quién es este Pokémon?</h1>
    <h3 class="text-xl capitalize">{{ gameStatus }}</h3>

    <button v-if="gameStatus !== GameStatus.Playing" class="bg-purple-500 text-white p-2 rounded-lg" @click="getNextRound(4)">
      ¿Jugar de nuevo?
    </button>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.Playing"
      :pokemon-id="randomPokemon.id"
    />
  </section>
</template>

<style scoped></style>
