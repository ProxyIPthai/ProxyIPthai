<template>
  <!-- <Loading v-if="(status = 100)" /> -->

  <div
    v-for="items in Data_card"
    :key="items"
    class="bg-white rounded-md mt-5 shadow-md col-span-3 md:col-span-2 my-10 flex w-full"
  >
    <router-link :to="`/card/${items.id}`">
      <img
        :src="items.image"
        alt=""
        class="rounded-t-md object-cover w-full h-[250px]"
      />
      <div class="p-3">
        <p class="font-semibold text-[18px]">{{ items.title }}</p>
        <p class="truncate w-[250px]">
          {{ items.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "vue-router";

import Loading from "../components/Loading.vue";

const Data_card = ref([]);
const status = ref(100);
async function getCountries() {
  const { data } = await supabase.from("posts").select();
  Data_card.value = data;
  console.log(Data_card.value);
  if (data) {
    status.value = 100;
  } else {
    status.value = 200;
  }
}

onMounted(() => {
  getCountries();
});
</script>
