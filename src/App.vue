<template>
  <div class="bg-gray-100 flex-col flex justify-center items-center">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Loading from "./components/Loading.vue";
import { ref, onMounted } from "vue";
import { supabase } from "./lib/supabaseClient";

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
</script>

<style scoped>
.holdal {
  position: fixed;
  inset: 0;
}
</style>
