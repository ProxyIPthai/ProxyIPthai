<template>
<div class=" bg-gray-100 flex-col flex justify-center items-center">
<Navbar />
<router-view />
<Footer />
</div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>