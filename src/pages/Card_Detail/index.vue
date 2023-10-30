<template>
  <div class="py-40 flex justify-center items-center w-full">
    <div class="max-w-screen-xl">
      <p class="text-[32px] font-bold drop-shadow-md">บทความทั้งหมด</p>
      <div class="grid grid-cols-8 gap-4">
        <div
          v-for="items in Data_card"
          :key="items"
          class="bg-white rounded-md col-span-2 my-5"
        >
          <router-link :to="`/card/${items.id}`">
            <img
              :src="items.img"
              alt=""
              class="rounded-t-md h-[250px] object-cover w-full"
            />
            <div class="p-3">
              <p class="font-semibold text-[18px]">{{ items.title }}</p>
              <p class="truncate">
                {{ items.header }}
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

const Data_card = ref([]);

async function getCountries() {
  const { data } = await supabase.from("Data_for_news").select();
  Data_card.value = data;
  console.log(Data_card.value);
}

onMounted(() => {
  getCountries();
});
</script>
