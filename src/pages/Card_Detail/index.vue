<template>
  <!-- <Loading v-if="(status = 100)" /> -->
  <div class="py-20 flex justify-center w-full px-[30px] mt-20 min-h-screen">
    <div class="max-w-screen-xl w-full">
      <div class="flex justify-between w-full">
        <p class="text-[32px] font-bold drop-shadow-md">บทความทั้งหมด</p>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="ค้นหา..."
          class="mb-4 p-2 rounded outline-none"
        />
      </div>
      <div v-if="filteredData.length === 0" class="text-center mt-10">
        <p>ไม่เจอบทความที่คุณค้นหา</p>
      </div>

      <div v-else class="grid grid-cols-8 gap-4">
        <div
          v-for="items in filteredData"
          :key="items.id"
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { supabase } from "../../lib/supabaseClient";
import moment from "moment";

const searchQuery = ref("");
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

const filteredData = computed(() => {
  if (!searchQuery.value) {
    console.log("not found");
    return Data_card.value;
  }
  return Data_card.value.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(() => {
  getCountries();
});
</script>
