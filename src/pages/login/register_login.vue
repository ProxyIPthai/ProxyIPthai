<template>
  <div class="flex-col flex justify-center items-center w-full space-y-5">
    <div class="pt-40 space-y-5">
      <div class="grid grid-cols-6 gap-3 w-full">
        <div class="col-span-6 w-full">
          <label for="email">e-mail</label>
          <input
            v-model="email"
            name="email"
            type="text"
            class="w-full bg-gray-200 outline-none rounded-md border border-white"
          />
        </div>
        <div class="col-span-3 w-full">
          <label for="name">username</label>
          <input
            v-model="username"
            name="name"
            type="text"
            class="w-full bg-gray-200 outline-none rounded-md"
          />
        </div>
        <div class="col-span-3 w-full">
          <label for="tel">เบอร์โทรศัพท์</label>
          <input
            v-model="phonnumber"
            type="tel"
            class="w-full bg-gray-200 outline-none rounded-md"
          />
        </div>
        <div class="col-span-3 w-full">
          <label for="pass">รหัสผ่าน</label>
          <input
            v-model="password"
            name="pass"
            type="password"
            class="w-full bg-gray-200 outline-none rounded-md"
          />
        </div>
        <div class="col-span-3 w-full">
          <label for="pass">ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            class="w-full bg-gray-200 outline-none rounded-md"
          />
        </div>
      </div>
    </div>
    <div class="flex-col flex justify-center">
      <button
        class="bg-blue-600 p-3 px-10 rounded-md text-white hover:bg-blue-700"
        @click="createAccount"
      >
        Create
      </button>
      <!-- <button @click="login">Login</button>
      <button @click="seeCurrentUser">See user</button>
      <button @click="logout">Logout</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../lib/supabaseClient";

const email = ref("");
const password = ref("");
const loading = ref(false);
const username = ref("");
const phonnumber = ref("");

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username: username.value,
        tel: phonnumber.value
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
    console.log(error);
  } else {
    console.log(data);
  }
}

async function seeCurrentUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("seuccess");
  }
}
</script>
