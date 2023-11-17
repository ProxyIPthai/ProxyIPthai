<template>
  <!-- <Loading v-if="(status = 100)" /> -->
  <div class="py-20 flex justify-center w-full px-[30px] mt-20 min-h-screen">
    <div class="max-w-screen-xl">
      <p class="text-[32px] font-bold drop-shadow-md">บทความทั้งหมด</p>
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
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "vue-router";

import Loading from "../../components/Loading.vue";

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
