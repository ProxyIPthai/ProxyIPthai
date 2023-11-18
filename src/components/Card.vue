<template>
  <!-- <Loading v-if="(status = 100)" /> -->

  <div class="grid grid-cols-8 gap-4">
    <div
      v-for="items in Data_card"
      :key="items"
      class="bg-white rounded-md col-span-4 md:col-span-2 mt-5 shadow-md"
    >
      <router-link :to="`/card/${items.id}`">
        <img
          :src="items.image"
          alt=""
          class="rounded-t-md h-[100px] md:h-[250px] object-cover w-full"
        />
        <div class="p-3">
          <p class="font-semibold text-[18px]">{{ items.title }}</p>
          <p class="truncate">
            {{ items.description }}
          </p>
          <p class="text-sm mt-2">
            {{ moment(items.updated_at).format("ll") }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";
import moment from "moment";

import Loading from "../components/Loading.vue";

const Data_card = ref([]);
const status = ref(100);

async function getCountries() {
  let { data, error } = await supabase
    .from("posts")
    .select()
    .order("updated_at", { ascending: false }) // Order by updated_at in descending order
    .limit(4); // Limit to 3 items

  if (error) {
    console.error(error);
    status.value = 200;
  } else {
    Data_card.value = data;
    status.value = 100;
  }
}

onMounted(() => {
  getCountries();
});
</script>
