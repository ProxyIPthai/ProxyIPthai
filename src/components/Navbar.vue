<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/">
        <a href="" class="flex items-center">
          <img
            src="../assets/img/3(1).png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white"
            >PROXY IP THAI</span
          >
        </a>
      </router-link>

      <!-- <div class="flex md:order-2">
        <div v-if="dataUser" class="flex items-center space-x-5">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="bg-[#38B6FF] h-12 w-12 rounded-full text-center flex items-center justify-center uppercase drop-shadow-xl border-2 border-green-500"
              >
                {{ leadingCharacters }}
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="flex justify-center items-center py-5 flex-col">
                  <p
                    class="bg-[#38B6FF] h-16 w-16 rounded-full text-center flex items-center justify-center uppercase drop-shadow-md"
                  >
                    {{ leadingCharacters }}
                  </p>
                  <p class="text-[18px]">{{ dataUser }}</p>
                  <p class="text-sm text-gray-400">{{ getEmail }}</p>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <router-link to="Invioce">
                      <p
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        แอดมิน
                      </p>
                    </router-link>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >ตั้งค่าโปรไฟล์</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >ติดต่อแอดมิน</a
                    >
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <button
                      @click="logout"
                      :class="[
                        active ? 'bg-gray-100 text-red-500' : 'text-red-500',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      ออกจากระบบ
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <Menu v-else="dataUser == null">
          <div class="md:space-x-5 flex items-center">
            <button
              @click="modelRegis"
              type="button"
              class="text-white text-[12px] md:text-[14px] bg-[#38B6FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 md:px-4 md:py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              สมัครสมาชิก
            </button>

            <button
              @click="modelLogin"
              type="button"
              class="text-white text-[12px] md:text-[14px] bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 md:px-4 md:py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </Menu>

    
      </div> -->
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link to="/">
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >หน้าแรก</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="Article"
              ><p
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                บทความ
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="Pagages">
              <p
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                แพ็คเกจ
              </p>
            </router-link>
          </li>
          <li>
            <a
              href="https://lin.ee/Fgv79qk"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >ติดต่อ</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <login
    :seeCurrentUser="seeCurrentUser"
    :modalAction="modalAction"
    @close-model="modelLogin"
    class="holdal z-30"
  />
  <Register :modalRe="modalRe" @close-model="modelRegis" />
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { ref, onMounted, computed } from "vue";
import { supabase } from "../lib/supabaseClient";

import Register from "../components/Register.vue";
import login from "./login.vue";

const modalAction = ref(false);
const modalRe = ref(false);
const dataUser = ref(null);
const getEmail = ref("");

function modelLogin() {
  modalAction.value = !modalAction.value;
}

function modelRegis() {
  modalRe.value = !modalRe.value;
}
onMounted(() => {
  seeCurrentUser();
});

async function seeCurrentUser() {
  const localUser = await supabase.auth.getSession();
  dataUser.value = localUser.data.session.user.user_metadata.full_name;
  getEmail.value = localUser.data.session.user.email;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("seuccess");
    refreshPage();
  }
}
const leadingCharacters = computed(() => {
  return dataUser.value
    .split(" ")
    .map((word) => word[0])
    .join("");
});
const refreshPage = () => {
  location.reload(); // Reloads the current page
};
</script>

<style>
.holdal {
  position: fixed;
  inset: 0;
}
</style>
