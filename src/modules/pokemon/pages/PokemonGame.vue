<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
</script>

<template>
  <section v-if="false" class="flex flex-col items-center justify-center text-gray-200 w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemons</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center text-gray-200 w-screen h-screen gap-8">
    <h1 class="text-3xl">¿Quién es este Pokémon?</h1>

    <!-- Pokemon Picture -->
    <PokemonPicture />

    <!-- Pokemon Options -->
    <PokemonOptions />
  </section>
</template>

<style scoped></style>
