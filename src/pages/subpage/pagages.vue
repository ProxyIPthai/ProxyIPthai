<template>
  <div class="py-20 min-h-screen flex justify-center items-center">
    <Price />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Price from "../../components/Price.vue";

const modalPushoder = ref(false);
</script>
