<template>
  <div
    v-if="card"
    class="py-40 flex-col flex justify-center items-center px-[20px] w-full"
  >
    <div
      class="max-w-screen-xl w-full flex-col flex justify-center items-center"
    >
      <div
        class="grid grid-cols-6 w-full justify-center items-center space-y-5"
      >
        <div
          class="col-span-6 w-full flex-col flex justify-center items-center"
        >
          <p class="text-[32px] font-bold text-center">
            {{ card.title }}
          </p>
          <p class="text-[20px] max-w-xl text-center">
            {{ card.header }}
          </p>
        </div>

        <div
          class="col-span-6 w-full flex-col flex justify-center items-center px-[20px]"
        >
          <img
            :src="card.img"
            alt=""
            class="rounded-md max-w-xl h-60 md:h-auto"
          />
        </div>
      </div>

      <div class="flex-col w-full mt-10 max-w-4xl space-y-5">
        <div>
          <h1 class="text-[22px] font-bold">{{ card.title_1 }}</h1>
          <p>
            {{ card.article }}
          </p>
        </div>
        <div>
          <h1 class="text-[22px] font-bold">{{ card.title_2 }}</h1>
          <p>
            {{ card.article_1 }}
          </p>
        </div>

        <div>
          <h1 class="text-[22px] font-bold">
            {{ card.title_3 }}
          </h1>
          <ul class="list-disc pl-5 space-y-5">
            {{
              card.article_2
            }}
          </ul>
        </div>
        <div class="pb-10">
          <p>
            {{ card.article_3 }}
          </p>
        </div>
        <iframe
          class="h-[500px] w-full rounded-md border-y-2 py-10"
          :src="card.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "../../lib/supabaseClient";

const route = useRoute();
const cardId = route.params.id;

const card = ref(null);

onMounted(async () => {
  const { data } = await supabase
    .from("Data_for_news")
    .select("*")
    .eq("id", cardId);
  if (data && data.length > 0) {
    card.value = data[0];
  }
});
</script>
