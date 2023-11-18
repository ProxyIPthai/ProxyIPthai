import { RouterLink } from 'vue-router';
<template>
  <div class="h-auto">
    <div
      class="grid grid-cols-6 w-full flex-col items-center justify-center gap-6 py-8 lg:flex-row"
    >
      <div
        class="group col-span-6 md:col-span-6 lg:col-span-2 relative flex min-h-[572px] lg:max-w-[360px] max-w-full flex-col flex-wrap overflow-hidden rounded-2xl bg-[#38B6FF] p-6 sm:w-[150px] md:w-[384px]"
      >
        <div class="text-start text-white">
          <span class="text-[32px] font-light">ประหยัดมากขึ้น</span>
          <br />
          <span class="text-[32px] font-bold">ด้วย IP ราคาพิเศษ</span>
          <br />
          <span class="text-[19px]"> ติดต่อสั่งซื้อผ่านไลน์ OFFICAIL </span>
          <p class="text-[19px]">เพียง IP ละ 40฿</p>
          <p class="text-[19px]">สั่งซื้อเริ่มต้นที่ 10IP</p>
          <div class="mt-[20px]">
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9187 12.7757L13.1821 3.03919L15.7488 0.472548L29.8671 14.5909L15.7488 28.7092L13.1821 26.1426L22.9187 16.406H0.824509V12.7757H22.9187Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="bottom-0 flex justify-center h-60">
          <img
            src="../assets/img/ModernLogo.png"
            alt="girl image for promot pricing plan"
            class="h-52 drop-shadow-md"
          />
        </div>
        <a href="https://lin.ee/Fgv79qk">
          <button
            class="w-full rounded-xl bg-white px-4 py-3 text-[22px] font-semibold text-black"
          >
            สั่งซื้อ
          </button></a
        >
      </div>
      <div
        class="group col-span-6 md:col-span-3 lg:col-span-2 flex min-h-[572px] max-w-[360px] flex-col flex-wrap rounded-2xl border border-[#0B0641] bg-white p-6 md:w-[384px]"
      >
        <div class="flex-row items-center gap-5">
          <span class="text-3xl font-bold">ราคาพิเศษ</span>
          <p class="text-2xl font-bold">เมื่อสั่งซื้อ 100IP ขึ้นไป</p>
        </div>
        <span class="mt-4 flex text-[22px] text-[#A9A9AA]">
          สิ่งที่คุณจะได้รับ
        </span>
        <div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ไม่ต้อง KYC</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ไม่จำกัดแบนวิดท์</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>สปีดไม่ลด</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ความเร็ว 20-80 Mbps</span>
          </div>
        </div>
        <div class="flex grow flex-col justify-between">
          <div></div>
          <div class="flex flex-col align-bottom gap-4">
            <div class="flex items-baseline">
              <span class="text-[32px] font-bold">35฿</span>
              <span>/IP</span>
            </div>
            <a href="https://lin.ee/Fgv79qk">
              <button
                @click="modalPush"
                class="w-full rounded-xl bg-[#38B6FF] px-4 py-3 text-[22px] font-semibold text-white"
              >
                สั่งซื้อ
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        class="group col-span-6 md:col-span-3 lg:col-span-2 flex min-h-[572px] max-w-[360px] flex-col flex-wrap rounded-2xl border border-[#0B0641] bg-white p-6 md:w-[384px]"
      >
        <div class="flex-row items-center gap-5">
          <span class="text-3xl font-bold">ราคาพิเศษ</span>
          <p class="text-2xl font-bold">เมื่อสั่งซื้อ 200IP ขึ้นไป</p>
        </div>
        <span class="mt-4 flex text-[22px] text-[#A9A9AA]">
          สิ่งที่คุณจะได้รับ
        </span>
        <div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ไม่ต้อง KYC</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ไม่จำกัดแบนวิดท์</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>สปีดไม่ลด</span>
          </div>
          <div
            class="mt-6 flex flex-row items-start gap-[10px] text-left text-lg"
          >
            <div class="shrink-0 pt-1">
              <img src="../assets/img/barnd/icon.svg" alt="" />
            </div>
            <span>ความเร็ว 20-80 Mbps</span>
          </div>
        </div>
        <div class="flex grow flex-col justify-between">
          <div></div>
          <div class="flex flex-col align-bottom gap-4">
            <div class="flex items-baseline">
              <span class="text-[32px] font-bold">30฿</span>
              <span>/IP</span>
            </div>
            <a href="https://lin.ee/Fgv79qk">
              <button
                @click="modalPush"
                class="w-full rounded-xl bg-[#38B6FF] px-4 py-3 text-[22px] font-semibold text-white"
              >
                สั่งซื้อ
              </button>
            </a>

            <!-- <router-link to="Cart">
              <button
                class="w-full rounded-xl bg-[#38B6FF] px-4 py-3 text-[22px] font-semibold text-white"
              >
                สั่งซื้อ
              </button></router-link
            > -->
          </div>
        </div>
      </div>
    </div>
    <!-- <Add_to :modalPushoder="modalPushoder" @close-model="modalPush" /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

import Add_to from "./Cart/Add_to.vue";

const modalPushoder = ref(false);

function modalPush() {
  modalPushoder.value = !modalPushoder.value;
  console.log(modalPushoder.value);
}
</script>

<style>
.holdal {
  position: fixed;
  inset: 0;
}
</style>
