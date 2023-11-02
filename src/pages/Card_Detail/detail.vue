<template>
  <div
    v-if="status == 100"
    role="status"
    class="fixed holdal h-screen w-screen flex justify-center items-center z-0 bg-gray-100"
  >
    <svg
      aria-hidden="true"
      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
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
            class="rounded-md max-w-xl h-44 md:h-auto"
          />
        </div>
      </div>

      <div class="flex-col w-full mt-10 max-w-4xl space-y-5">
        <div class="flex-col space-y-5">
          <h1 class="text-[22px] font-bold">{{ card.title_1 }}</h1>
          <img
            :src="card.img_2"
            alt=""
            class="rounded-md max-w-3xl h-44 md:h-auto"
          />
          <p>
            {{ card.article }}
          </p>
        </div>
        <di class="space-y-5">
          <h1 class="text-[22px] font-bold">{{ card.title_2 }}</h1>
          <img
            :src="card.img_3"
            alt=""
            class="rounded-md max-w-3xl h-44 md:h-auto"
          />
          <p>
            {{ card.article_1 }}
          </p>
        </di>

        <div class="space-y-5">
          <h1 class="text-[22px] font-bold">
            {{ card.title_3 }}
          </h1>
          <p>
            {{ card.article_2 }}
          </p>
          <p>
            {{ card.article_3 }}
          </p>
          <img
            :src="card.img_4"
            alt=""
            class="rounded-md max-w-3xl h-44 md:h-auto"
          />
          <ul v-if="card.li == null" class="list-disc pl-5 space-y-5"></ul>
          <ul v-else="card.li" class="list-disc pl-5 space-y-5">
            <li>{{ card.li }}</li>
            <li>{{ card.li_1 }}</li>
            <li>{{ card.li_2 }}</li>
            <li>{{ card.li_3 }}</li>
            <li>{{ card.li_4 }}</li>
            <li>{{ card.li_5 }}</li>
          </ul>
        </div>
        <div>
          <h1 class="text-[22px] font-bold">{{ card.title_4 }}</h1>
          <p>
            {{ card.article_4 }}
          </p>
        </div>
        <div>
          <h1 class="text-[22px] font-bold">{{ card.title_5 }}</h1>
          <p>
            {{ card.article_5 }}
          </p>
        </div>
        <div>
          <h1 class="text-[22px] font-bold">
            {{ card.title_6 }}
          </h1>
          <h1 class="text-[22px] font-bold mt-5">
            {{ card.title_7 }}
          </h1>
          <p>
            {{ card.article_7 }}
          </p>
          <ul v-if="card.li_6 == null" class="list-disc pl-5 space-y-5"></ul>
          <ul v-else="card.li" class="list-disc pl-5 space-y-5">
            <li>{{ card.li_6 }}</li>
            <li>{{ card.li_6 }}</li>
            <li>{{ card.li_7 }}</li>
            <li>{{ card.li_8 }}</li>
            <li>{{ card.li_9 }}</li>
            <li>{{ card.li_10 }}</li>
          </ul>
          <h1 class="text-[22px] font-bold mt-5">
            {{ card.title_8 }}
          </h1>
          <p>
            {{ card.article_8 }}
          </p>
          <h1 class="text-[22px] font-bold mt-5">
            {{ card.title_9 }}
          </h1>
          <p>
            {{ card.article_9 }}
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
const status = ref(100);
const card = ref(null);

onMounted(async () => {
  const { data, error } = await supabase
    .from("Data_for_news")
    .select("*")
    .eq("id", cardId);

  if (data && data.length > 0) {
    card.value = data[0];
    status.value = 200;
    console.log(status.value);
  } else {
  }
});
</script>

<style scoped>
.holdal {
  position: fixed;
}
</style>
