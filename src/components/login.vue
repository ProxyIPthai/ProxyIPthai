<template>
  <div v-show="modalAction" class="">
    <div
      v-if="modalAction"
      class="flex-col flex justify-center items-center w-full space-y-5 fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 px-[30px] z-30"
    >
      <div
        v-if="status == 200"
        class="space-y-5 bg-white p-[30px] rounded-md drop-shadow-md relative"
      >
        <img
          @click="$emit('close-model')"
          src="../assets/img/x_circle_icon_173469.png"
          alt=""
          class="h-7 absolute top-2 right-3 hover:cursor-pointer"
        />
        <h1 class="text-[26px] font-bold text-center drop-shadow-md">
          เข้าสู่ระบบสำเร็จ
        </h1>

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
        v-else="status == null"
        class="space-y-5 bg-white p-[30px] rounded-md drop-shadow-md relative"
      >
        <img
          @click="$emit('close-model')"
          src="../assets/img/x_circle_icon_173469.png"
          alt=""
          class="h-7 absolute top-2 right-3 hover:cursor-pointer"
        />
        <h1 class="text-[26px] font-bold text-center drop-shadow-md">
          เข้าสู่ระบบ
        </h1>

        <div class="grid grid-cols-6 gap-3 w-full">
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
            <label for="pass">รหัสผ่าน</label>
            <input
              v-model="password"
              name="pass"
              type="password"
              class="w-full bg-gray-200 outline-none rounded-md border border-white"
            />
          </div>
        </div>
        <div class="flex-col flex justify-center space-y-3">
          <button
            class="bg-blue-600 p-3 px-10 rounded-md text-white hover:bg-blue-700"
            @click="login"
          >
            เข้าสู่ระบบ
          </button>
          <h3 v-if="status == 404" class="text-red-500">
            รหัสผ่านหรืออีเมลไม่ถูกต้อง
          </h3>
          <!-- <button @click="login">Login</button>
        <button @click="seeCurrentUser">See user</button>
        <button @click="logout">Logout</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

defineEmits(["close-model"]);

const props = defineProps({
  modalAction: {
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
const loading = ref(false);
const username = ref("");
const phonnumber = ref("");
const status = ref(null);

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value,
        tel: phonnumber.value,
      },
    },
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    status.value = 404;
  } else {
    status.value = 200;
    console.log(status.value);
    console.log(data);

    // setTimeout(() => {
    //   refreshPage();
    // }, 3000);
    // console.log(setTimeout());
  }
}
</script>
