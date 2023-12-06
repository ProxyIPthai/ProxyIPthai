<template>
  <div class="py-20 min-h-screen flex-col flex justify-center items-center">
    <p class="text-[28px] font-bold drop-shadow-md mt-10">ราคาและโปรโมชั่น</p>
    <Price />
    <div class="mt-10 w-full flex-col flex justify-center items-center">
      <p class="text-[28px] font-bold drop-shadow-md">PROXY MINI SERVER</p>
      <div class="flex-col flex justify-center items-center mt-10">
        <p class="text-[22px] font-semibold">รายการที่จะได้ ต่อชุด</p>
        <ul class="text-[#161616] flex space-x-5 mt-4">
          <li class="flex">
            <img src="../../assets/img/Group.png" alt="" class="h-5" />Proxy Box
            + Software 10 ปี
          </li>
          <li class="flex">
            <img src="../../assets/img/Group.png" alt="" class="h-5" /> Aircard
            10 ตัว
          </li>
          <li class="flex">
            <img src="../../assets/img/Group.png" alt="" class="h-5" /> สายแลน 1
            เส้น
          </li>
          <li class="flex">
            <img src="../../assets/img/Group.png" alt="" class="h-5" /> USB HuB
            + Power Adapter 1
          </li>
        </ul>

        <iframe
          class="mt-10 w-full h-[400px]"
          src="https://www.youtube.com/embed/7hDdzf8C51k?si=NkWMXWR6ANbLKPtj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p class="text-[22px] font-bold mt-10">ราคา $1500</p>
        <a href="https://lin.ee/Fgv79qk" class="mt-5">
          <button
            class="w-full rounded-xl bg-[#38B6FF] px-20 py-3 text-[22px] font-semibold text-white"
          >
            สั่งซื้อ
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Price from "../../components/Price.vue";

const modalPushoder = ref(false);
</script>
