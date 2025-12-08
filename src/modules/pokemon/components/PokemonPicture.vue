<script setup lang="ts"></script>

<template>
  <section>
    <img
      class="brightness-0"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
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
