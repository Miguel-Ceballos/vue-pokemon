<script setup lang="ts">
import type { Pokemon } from '@/modules/pokemon/interfaces';

interface Props {
  options: Pokemon[];
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<template>
  <section class="mt-5 flex flex-col gap-2">
    <button
      v-for="{ name, id } in options"
      @click="$emit('selectedOption', id)"
      :key="id"
      class="p-2 bg-white rounded-md hover:active:bg-primary-100:5 text-gray-700 hover:cursor-pointer hover:bg-gray-100 capitalize"
    >
      {{ name }}
    </button>
  </section>
</template>

<style scoped></style>
