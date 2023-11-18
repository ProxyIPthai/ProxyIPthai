<template>
  <div v-show="modalRe" class="">
    <div
      v-if="modalRe"
      class="flex-col flex justify-center items-center w-full space-y-5 fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 px-[30px] z-30"
    >
      <div
        v-if="status"
        class="space-y-5 bg-white p-[30px] max-w-xl mx-[20px] rounded-md drop-shadow-md relative"
      >
        <img
          @click="$emit('close-model')"
          src="../assets/img/x_circle_icon_173469.png"
          alt=""
          class="h-7 absolute top-2 right-3 hover:cursor-pointer"
        />
        <h1 class="md:text-[26px] font-bold text-center drop-shadow-md">
          ขอบคุณสำหรับการเข้าร่วมเป็นสมาชิก
          โปรดยืนยันตัวตนให้เสร็จเพิ่อเริ่มการใช้งาน
        </h1>
        <div class="flex-col flex justify-center items-center text-gray-500">
          <p>เราได้ส่งอีเมลยืนยันไปที่ {{ email }}</p>
          <p>เปิดอีเมลและยืนยันบัญชีของคุณ!</p>
        </div>

        <div class="flex-col flex justify-center">
          <button
            class="bg-blue-600 p-3 px-10 rounded-md text-white hover:bg-blue-700"
            @click="refreshPage"
          >
            ปิด
          </button>
          <!-- <button @click="login">Login</button>
          <button @click="seeCurrentUser">See user</button>
          <button @click="logout">Logout</button> -->
        </div>
      </div>
      <div
        v-else="status == 200"
        class="space-y-5 bg-white p-[30px] rounded-md drop-shadow-md relative"
      >
        <img
          @click="$emit('close-model')"
          src="../assets/img/x_circle_icon_173469.png"
          alt=""
          class="h-7 absolute top-2 right-3 hover:cursor-pointer"
        />
        <h1 class="text-[26px] font-bold text-center drop-shadow-md">
          สมัครสมาชิก
        </h1>
        <div class="grid grid-cols-6 gap-3 w-full">
          <div class="col-span-6 w-full">
            <label for="email">ชื่อ</label>
            <input
              v-model="name"
              name="name"
              type="text"
              class="w-full bg-gray-200 outline-none rounded-md border border-white"
            />
          </div>
          <div class="col-span-6 w-full">
            <label for="email">อีเมล</label>
            <input
              v-model="email"
              name="email"
              type="text"
              class="w-full bg-gray-200 outline-none rounded-md border border-white"
            />
          </div>
          <div class="col-span-6 w-full">
            <label for="tel">เบอร์โทรศัพท์</label>
            <input
              v-model="phonnumber"
              name="tel"
              type="tel"
              class="w-full bg-gray-200 outline-none rounded-md border border-white"
            />
          </div>

          <div class="col-span-6 w-full">
            <label for="pass">รหัสผ่าน</label>
            <input
              v-model="password"
              name="pass"
              type="password"
              class="w-full bg-gray-200 outline-none rounded-md border border-white"
            />
          </div>
        </div>
        <div class="flex-col flex justify-center">
          <button
            class="bg-blue-600 p-3 px-10 rounded-md text-white hover:bg-blue-700 flex-col flex justify-center items-center"
            @click="createAccount"
          >
            <img
              v-if="loading == true"
              src="../assets/img/loading.gif"
              alt=""
              class="h-[20px]"
            />
            <p v-else="loading">สมัครสมาชิก</p>
          </button>
          <!-- <button @click="login">Login</button>
          <button @click="seeCurrentUser">See user</button>
          <button @click="logout">Logout</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../lib/supabaseClient";

defineEmits(["close-model"]);

const props = defineProps({
  modalRe: {
    type: Boolean,
    default: false,
  },
  seeCurrentUser: {
    type: Function,
  },
});

const refreshPage = () => {
  location.reload(); // Reloads the current page
};

const email = ref("");
const password = ref("");
const enter_password = ref("");
const tel = ref("");
const loading = ref(false);
const name = ref("");
const phonnumber = ref("");
const status = ref("");

async function createAccount() {
  loading.value = true;
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,

    options: {
      data: {
        full_name: name.value,
        phone: phonnumber.value,
        updated_at: new Date(),
      },
    },
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    status.value = 100;
    console.log(status.value);
    loading.value = false;
  }
}

async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
}

function isNameValid() {
  // Add your validation logic here (e.g., check if the name is not empty)
  return name.value.trim() == "";
}
</script>
