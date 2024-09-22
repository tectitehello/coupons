<script setup lang="ts">
import { ref } from 'vue';
import Accordian from './components/Accordian.vue';
import Addbutton from './components/Addbutton.vue';
import Grid from './components/Grid.vue';
import Modal from './components/Modal.vue';
const addmodalshown = ref(false)
const coupons = ref([
  {name:"Red Robin",amount:0,expiry:0},
  {name:"Outbacks",amount:0,expiry:3},
  {name:"Evergreens",amount:0,expiry:0},
])
</script>

<template>
  <div class="app">
    <Accordian v-for="coupon in coupons" :label="coupon.name">
      <Grid :coupon="coupon"></Grid>
    </Accordian>
    <Modal v-if="addmodalshown"></Modal>
    <Addbutton @click="addmodalshown = !addmodalshown"></Addbutton>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}
</style>
