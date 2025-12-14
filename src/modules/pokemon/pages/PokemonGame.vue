<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame.ts';
import { GameStatus } from '@/modules/pokemon/interfaces';

const { gameStatus, isLoading, pokemonOptions: options, randomPokemon } = usePokemonGame();

const onSelectedOption = (value: number) => {
  console.log(value);
};
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
    <h3 class="text-xl capitalize">{{gameStatus}}</h3>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions :options="options" @selected-option="onSelectedOption" />
  </section>
</template>

<style scoped></style>
