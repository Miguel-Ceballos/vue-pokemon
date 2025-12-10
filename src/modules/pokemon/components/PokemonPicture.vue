<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonPicture = computed(
  () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`);
</script>

<template>
  <section>
    <img
      v-if="!showPokemon"
      class="brightness-0 h-[200px]"
      :src="pokemonPicture"
      alt="Pokemon Picture"
    />
    <img
      v-else
      class="h-[200px] fade-in delay-300"
      :src="pokemonPicture"
      alt="Pokemon Picture"
    />
  </section>
</template>

<style scoped>
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

.fade-in {
  animation: fadeIn 0.3s;
  -webkit-animation: fadeIn 0.3s;
  -moz-animation: fadeIn 0.3s;
  -o-animation: fadeIn 0.3s;
  -ms-animation: fadeIn 0.3s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>
