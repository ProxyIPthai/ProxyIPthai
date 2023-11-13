<script setup>
import { computed, ref, watchEffect } from "vue";

import Order from "./Order.vue";

defineEmits(["close-model"]);

const props = defineProps({
  modalPushoder: {
    type: Boolean,
    default: false,
  },
});

const refreshPage = () => {
  location.reload(); // Reloads the current page
};

const checkoutOrders = ref(100);

function orders() {
  checkoutOrders.value = 200;
}

const products = ref([
  { id: 1, name: "Proxy IP Thai", price: 4000, quantity: 10 },
]);

const qtyMinValue = 10;

function calculateDiscountedPrice(product) {
  let finalPrice = product.price * product.quantity;
  if (product.quantity > 199) {
    finalPrice *= 0.75; // Apply a 25% discount
  } else if (product.quantity > 99) {
    finalPrice *= 0.875; // Apply a 12.5% discount for quantities over 99
  }
  return finalPrice;
}

const total = computed(() => {
  return products.value
    .reduce((acc, product) => {
      return acc + calculateDiscountedPrice(product);
    }, 0)
    .toFixed(2);
});

// ...existing script setup code...

function updateQuantity(product, newQuantity) {
  const quantity = parseInt(newQuantity, 10);
  if (!isNaN(quantity)) {
    product.quantity = quantity > qtyMinValue ? quantity : qtyMinValue;
  }
}

// ...existing script setup code...

// ...existing script setup code...

const discount = computed(() => {
  let discountAmount = 0;
  products.value.forEach((product) => {
    if (product.quantity >= 200) {
      // Calculate the discount amount for this product
      discountAmount += product.price * product.quantity * 0.250;
    } else if (product.quantity >= 100) {
      // Calculate the discount amount for this product
      discountAmount += product.price * product.quantity * 0.125;
    }
  });
  return discountAmount.toFixed(2);
});

const totalAfterDiscount = computed(() => {
  return (parseFloat(total.value) - parseFloat(discount.value)).toFixed(2);
});

// ...existing script setup code...

function increaseQuantity(product) {
  product.quantity += 1;
}

function decreaseQuantity(product) {
  if (product.quantity > qtyMinValue) {
    product.quantity -= 1;
  }
}

const isOdd = (index) => index % 2;
</script>

<template>
  <!-- <div v-show="modalPushoder" class="">
    <div
      v-if="modalPushoder"
      class="flex-col flex justify-center items-center w-full space-y-5 fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 px-[30px] z-30"
    >
      <div class="flex items-center justify-center bg-white rounded-md">
        <div class="shadow-2xl rounded-md relative">
          <img
            @click="$emit('close-model'), refreshPage"
            src="../../assets/img/x_circle_icon_173469.png"
            alt=""
            class="h-7 absolute top-2 right-3 hover:cursor-pointer z-10"
          />
          <p class="flex items-center p-5 drop-shadow-md bg-[#38B6FF]">
            <span class="dark:text-white">สั่งซื้อ Proxy</span>
          </p>
          <div v-if="checkoutOrders == 100">
            <ul class="dark:text-white p-8">
              <p class="text-[18px] font-semibold">
                เลือกจำนวน IP ที่ต้องการสั่งซื้อ
              </p>
              <p class="text-gray-500">*สั่งซื้อเริ่มต้นที่ 10IP</p>
              <li
                v-for="(product, index) in products"
                :key="product.id"
                class="flex flex-col my-2 w-full p-4"
              >
                <span
                  class="flex items-center justify-between w-full space-x-3"
                >
                  <span class="w-1/3 truncate">{{ product.name }}</span>
                  <span>฿{{ product.price / 100 }}/IP</span>
                  <span
                    class="inline-flex items-center justify-between space-x-3"
                  >
                    <button
                      class="bg-[#38B6FF] hover:bg-blue-600 py-1 px-2 rounded-md disabled:cursor-not-allowed"
                      :class="{
                        'disabled:bg-gray-200': !isOdd(index),
                        'disabled:dark:bg-gray-900': !isOdd(index),
                        'disabled:bg-white': isOdd(index),
                        'disabled:dark:bg-gray-700': isOdd(index),
                      }"
                      @click="decreaseQuantity(product)"
                      :disabled="product.quantity <= qtyMinValue"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      class="form-input w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center outline-none rounded-md border bg-gray-200"
                      min="0"
                      :value="product.quantity"
                      @input="updateQuantity(product, $event.target.value)"
                      placeholder="10"
                    />
                    <button
                      class="bg-[#38B6FF] hover:bg-blue-600 py-1 px-2 rounded-md"
                      @click="increaseQuantity(product)"
                    >
                      +
                    </button>
                  </span>
       
                </span>
              </li>
            </ul>

            <div class="px-[40px]">
              <span class="text-xl">ราคารวม:</span>
              <span class="font-bold pl-5"
                >{{ total / 100 }}฿ <span class="text-xl">/เดือน</span></span
              >
              <p v-if="parseFloat(discount) > 0" class="text-sm text-red-500">
                ส่วนลด: -{{ discount / 100 }}฿
              </p>

              <button
                @click="orders"
                class="rounded-xl bg-[#38B6FF] p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
              >
                สั่งซื้อ
              </button>
            </div>
          </div>

        
          <Order v-else="checkoutOrders == 200" :total="total" />
        </div>
      </div>
    </div>
  </div> -->

  <div v-show="modalPushoder" class="">
    <div
      v-if="modalPushoder"
      class="flex-col flex justify-center items-center w-full space-y-5 fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 px-[30px] z-30"
    >
      <div class="flex items-center justify-center bg-white rounded-md">
        <div class="shadow-2xl rounded-md relative">
          <img
            @click="$emit('close-model'), refreshPage"
            src="../../assets/img/x_circle_icon_173469.png"
            alt=""
            class="h-7 absolute top-2 right-3 hover:cursor-pointer z-10"
          />
          <p class="flex items-center p-5 drop-shadow-md bg-[#38B6FF]">
            <span class="dark:text-white">สั่งซื้อ Proxy</span>
          </p>
          <div v-if="checkoutOrders == 100">
            <ul class="dark:text-white p-8">
              <p class="text-[18px] font-semibold">
                เลือกจำนวน IP ที่ต้องการสั่งซื้อ
              </p>
              <p class="text-gray-500">*สั่งซื้อเริ่มต้นที่ 10IP</p>
              <li
                v-for="(product, index) in products"
                :key="product.id"
                class="flex flex-col my-2 w-full p-4"
              >
                <span
                  class="flex items-center justify-between w-full space-x-3"
                >
                  <span class="w-1/3 truncate">{{ product.name }}</span>
                  <span>฿{{ product.price / 100 }}/IP</span>
                  <span
                    class="inline-flex items-center justify-between space-x-3"
                  >
                    <button
                      class="bg-[#38B6FF] hover:bg-blue-600 py-1 px-2 rounded-md disabled:cursor-not-allowed"
                      :class="{
                        'disabled:bg-gray-200': !isOdd(index),
                        'disabled:dark:bg-gray-900': !isOdd(index),
                        'disabled:bg-white': isOdd(index),
                        'disabled:dark:bg-gray-700': isOdd(index),
                      }"
                      @click="decreaseQuantity(product)"
                      :disabled="product.quantity <= qtyMinValue"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      class="form-input w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center outline-none rounded-md border bg-gray-200"
                      min="0"
                      :value="product.quantity"
                      @input="updateQuantity(product, $event.target.value)"
                      placeholder="10"
                    />
                    <button
                      class="bg-[#38B6FF] hover:bg-blue-600 py-1 px-2 rounded-md"
                      @click="increaseQuantity(product)"
                    >
                      +
                    </button>
                  </span>
                  <!-- <span class="w-16 text-right">
              {{ ((product.price * product.quantity) / 100).toFixed(2) }}฿
            </span> -->
                </span>
              </li>
            </ul>

            <div class="px-[40px]">
              <span class="text-xl">ราคารวม:</span>
              <span class="font-bold pl-5"
                >{{ total / 100 }}฿ <span class="text-xl">/เดือน</span></span
              >
              <p v-if="parseFloat(discount) > 0" class="text-sm text-red-500">
                ส่วนลด: -{{ discount / 100 }}฿
              </p>

              <button
                @click="orders"
                class="rounded-xl bg-[#38B6FF] p-2 w-full mt-5 mb-10 px-5 text-[22px] font-semibold text-white"
              >
                สั่งซื้อ
              </button>
            </div>
          </div>

          <!-- Display the discount if it's greater than 0 -->
          <!-- <Order :total="total" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
