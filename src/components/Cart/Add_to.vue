<script setup>
import { computed, ref } from "vue";

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
    if (product.quantity >= 100) {
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
  <div
    class="flex items-center justify-center dark:text-white h-screen w-screen"
  >
    <div
      class="max-w-3xl w-full border border-gray-50 dark:border-gray-600 shadow-2xl rounded-md"
    >
    <p class="flex items-center p-5 drop-shadow-md">
          <img
            src="../../assets/img/3(1).png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white"
            >PROXY IP THAI</span
          >
        </p>
      <ul class="dark:text-white p-8">
        <p class="text-[22px] font-semibold">สั่งซื้อเริ่มต้นที่ 10IP</p>
        <li
          v-for="(product, index) in products"
          :key="product.id"
          class="flex flex-col my-2 w-full odd:bg-gray-100 odd:dark:bg-gray-700 p-4"
        >
          <span class="flex items-center justify-between w-full space-x-3">
            <span class="w-1/3 truncate">{{ product.name }}</span>
            <span>฿{{ product.price / 100 }}/IP</span>
            <span class="inline-flex items-center justify-between space-x-3">
              <button
                class="bg-blue-400 hover:bg-blue-600 py-1 px-2 rounded-md disabled:cursor-not-allowed"
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
                class="bg-blue-400 hover:bg-blue-600 py-1 px-2 rounded-md"
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
      <p class="flex-col flex items-center justify-between text-3xl mt-4 p-8">
        <div>
          <span>ราคารวม:</span>
        <span class="font-bold pl-5">{{ total / 100 }}฿</span>  
        </div>
        
        <!-- Display the discount if it's greater than 0 -->
        <span v-if="parseFloat(discount) > 0" class="text-xl text-red-500">
          ส่วนลด: -{{ discount / 100 }}฿
        </span>
      </p>
    </div>
  </div>
</template>
