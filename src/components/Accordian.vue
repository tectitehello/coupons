<script setup lang="ts">
import { ref, defineProps } from 'vue';
import Caret from './Caret.vue';

const props = defineProps({
  label: String
});

const shown = ref(false)
</script>

<template>
  <div class="accordian">
    <button @click="shown = !shown">{{props.label}}<Caret :flip="shown"></Caret></button>
    <div v-if="shown">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.accordian {
  width: 100%;
  display: flex;
  flex-direction: column;
}
button {
  width: 100%;
  padding: 2rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
