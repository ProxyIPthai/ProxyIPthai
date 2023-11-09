<template>
  <div
    v-if="statusOrder == 100"
    class="flex-col flex justify-center items-center"
  >
    <div
      class="px-[30px] w-[400px] pt-5 flex-col flex justify-center items-center"
    >
      <h1 class="text-[22px] font-semiblod">ชำระเงินแสกน QR code</h1>

      <img src="../../assets/img/0958707347.png" alt="" />
      <h1 class="text-[22px] font-semiblod text-red-500">
        ยอดชำระ : {{ total / 100 }} บาท
      </h1>
      <h1 class="text-[16px] font-semiblod">*กรุณาชำระตามยอดที่ระบุ</h1>
      <DragAndDrop />
      <div class="flex w-full justify-between space-x-5">
        <button
          @click="OrderCon"
          class="rounded-xl bg-[#38B6FF] p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
        >
          สั่งซื้อ
        </button>
        <button
          @click="refreshPage"
          class="rounded-xl bg-red-500 p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
        >
          ยกเลิก
        </button>
      </div>
    </div>
  </div>
  <div
    v-if="statusOrder == 200"
    class="flex-col flex justify-center items-center"
  >
    <div
      class="px-[30px] w-[400px] pt-5 flex-col flex justify-center items-center"
    >
      <h1 class="text-[22px] font-semiblod text-red-500">
        ระบบกำลังตรวจสอบการชำระเงิน
      </h1>

      <h1 class="text-[22px] font-semiblod">ยอดชำระ : {{ total / 100 }} บาท</h1>
      <h1 class="text-[16px] font-semiblod">กรุณารอสักครู่...</h1>
      <img src="../../assets/img/Rolling-1s-200px.svg" alt="" class="h-14" />
      <div class="flex w-full justify-between space-x-5">
        <button
          @click="OrderCon"
          class="rounded-xl bg-[#38B6FF] p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
        >
          ตกลง
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="statusOrder == 300"
    class="flex-col flex justify-center items-center"
  >
    <div
      class="px-[30px] w-[400px] pt-5 flex-col flex justify-center items-center"
    >
      <h1 class="text-[22px] font-semiblod text-green-500">
        การสั่งซื้อเสร็จสิ้น
      </h1>

      <h1 class="text-[22px] font-semiblod">ยอดชำระ : {{ total / 100 }} บาท</h1>
      <h1 class="text-[16px] font-semiblod">
        IP ของคุณอยู่ในรายการสั่งซื้อของคุณแล้ว
      </h1>
      <img src="../../assets/img/confirm.svg" alt="" class="h-14 my-2" />
      <div class="flex w-full justify-between space-x-5">
        <button
          @click="refreshPage"
          class="rounded-xl bg-[#38B6FF] p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
        >
          ตกลง
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DragAndDrop from "./DragAndDrop.vue";
import Loading from "../Loading.vue";

const statusOrder = ref(100);

function OrderCon() {
  statusOrder.value = 200;
  console.log(statusOrder.value);
}

const refreshPage = () => {
  location.reload(); // Reloads the current page
};

const props = defineProps({
  modalPushoder: {
    type: Boolean,
    default: false,
  },

  total: {
    type: String,
  },
});
</script>
