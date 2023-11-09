<template>
  <!-- add `data-active` and the event listeners -->
  <div class="px-[30px]">
    <label
      class="block mb-2 text-lg font-medium text-gray-900 dark:text-white text-center mt-5"
      for="user_avatar"
      >อัพโหลดหลักฐานการชำระ</label
    >
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      aria-describedby="user_avatar_help"
      id="user_avatar"
      type="file"
    />
    <div
      class="mt-1 text-sm text-gray-500 dark:text-gray-300"
      id="user_avatar_help"
    ></div>
  </div>
</template>

<script setup>
// make sure to import `ref` from Vue
import { ref, onMounted, onUnmounted } from "vue";
const emit = defineEmits(["files-dropped"]);

// Create `active` state and manage it with functions
let active = ref(false);

function setActive() {
  active.value = true;
}
function setInactive() {
  active.value = false;
}

function onDrop(e) {
  setInactive(); // add this line too
  emit("files-dropped", [...e.dataTransfer.files]);
}

// ... nothing changed below this
</script>
