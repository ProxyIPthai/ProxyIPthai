<template>
  <video
    class="absolute top-0 h-screen left-0 right-0 object-cover w-full -z-0 mt-[70px]"
    autoplay
    loop
    muted
    src="../assets/img/bg.mp4"
  ></video>
  <p
    class="bg-gradient-to-r from-black md:via-transparent h-screen w-full absolute top-0 mt-[70px]"
  ></p>
  <Header class="z-0 md:mt-20" />
  <div
    class="max-w-screen-xl pb-20 flex-col flex justify-center items-center w-full mt-20 px-[20px] relative"
  >
    <h1 class="text-[32px] font-semibold drop-shadow-md text-center">
      ใช้งานง่าย พร้อมทีมซัพพอร์ตตลอดการใช้งาน
    </h1>
    <div class="grid grid-cols-6 md:gap-12 gap-5 w-full mt-20">
      <div class="md:col-span-3 col-span-6 w-full space-y-3">
        <h1 class="text-[28px] font-semibold drop-shadow-md">
          HTTP Proxy พื้นที่ประเทศไทย
        </h1>
        <p>
          การใช้งาน Internet ในยุคปัจจุบัน,
          ความปลอดภัยและความเป็นส่วนตัวเป็นสิ่งที่มีความสำคัญมาก Proxy IP
          เป็นวิธีหนึ่งในการรับประโยชน์มากที่สุดจากการใช้งาน Internet
          โดยไม่ต้องกังวลเกี่ยวกับความเสี่ยง การใช้ Proxy IP
          เป็นวิธีที่ได้รับความนิยมในการปกป้องความเป็นส่วนตัวและการเข้าถึงเว็บไซต์หรือบริการต่างๆ
          ที่ถูกบล็อก
        </p>
        <ul>
          <li class="flex items-center">
            <img
              src="../assets/img/ok.png"
              alt=""
              class="h-10"
            />ปกป้องความเป็นส่วนตัว ปกปิด IP จริงของคุณ
            และป้องกันการติดตามจากภายนอก
          </li>
          <li class="flex items-center">
            <img src="../assets/img/ok.png" alt="" class="h-10" />ใช้งานง่าย
            ใช้ได้กับหลากหลายแพลตฟอร์ม
          </li>
          <li class="flex items-center">
            <img
              src="../assets/img/ok.png"
              alt=""
              class="h-10"
            />มีทีมงานคอยให้คำปรึกษาตลอดการใช้งาน
          </li>
        </ul>

        <div class="flex justify-start space-x-5">
          <a href="">
            <p
              class="bg-[#38B6FF] p-3 px-10 text-center rounded-full drop-shadow-md mt-5 text-white hover:bg-white hover:text-black"
            >
              สั่งซื้อ
            </p>
          </a>
          <a href="">
            <p
              class="bg-transparent border-[1px] border-[#38B6FF] p-3 px-10 text-center rounded-full drop-shadow-md mt-5 hover:bg-[#38B6FF] hover:text-white"
            >
              ติดต่อสอบถาม
            </p>
          </a>
        </div>
      </div>
      <div
        class="md:col-span-3 col-span-6 relative border-b-[1px] md:border-b-[0px] border-gray-300 pb-5"
      >
        <img
          src="../assets/img/map.gif"
          alt=""
          class="max-h-[350px] rounded-lg drop-shadow-md"
        />
      </div>

      <div class="md:col-span-3 col-span-6 relative md:mt-20">
        <img
          src="../assets/img/muti.png"
          alt=""
          class="max-h-[350px] rounded-lg drop-shadow-md"
        />
      </div>

      <div
        class="md:col-span-3 col-span-6 w-full md:mt-20 flex-col flex justify-center md:justify-start md:items-center"
      >
        <h1 class="text-[28px] font-semibold drop-shadow-md">
          ใช้งานได้หลากหลายแพลตฟอร์ม
        </h1>
        <p>รองรับการใช้งานกับแพลตฟอร์มต่าง ๆ ได้หลากหลาย</p>
        <p class="border-b-[1px] pb-5">
          ไม่ว่าจะเป็น Windows, macOS, Linux, หรือแม้แต่อุปกรณ์พกพา, Proxy IP
          สามารถใช้งานได้กับหลายแพลตฟอร์ม
        </p>
        <div
          class="flex justify-center md:justify-start items-center space-x-5 mt-5"
        >
          <img src="../assets/img/barnd/ios.png" alt="" class="h-10" />
          <img src="../assets/img/barnd/and.png" alt="" class="h-10" />
          <img src="../assets/img/barnd/win.png" alt="" class="h-10" />
          <img src="../assets/img/barnd/mac.png" alt="" class="h-8" />
        </div>
      </div>

      <div
        class="md:col-span-3 col-span-6 w-full mt-20 flex-col flex justify-start"
      >
        <h1 class="text-[28px] font-semibold drop-shadow-md">
          ไม่จำกัดแบนวิดท์
        </h1>
        <p>
          ความเร็วของ Proxy IP
          คือปัจจัยสำคัญที่กำหนดประสบการณ์การใช้งานของผู้ใช้ การเลือก Proxy IP
          ที่มีความเร็ว 20-80 Mbps
          ช่วยให้ได้รับประสบการณ์การใช้งานที่ราบรื่นและแบนด์วิดธ์ไม่จำกัด
          คุณสามารถเพลิดเพลินกับการเชื่อมต่อที่รวดเร็วและปลอดภัย
          มีการเชื่อมต่อแบนด์วิดธ์ไม่จำกัดหมายความว่าคุณสามารถใช้ Internet
          ได้ตามที่คุณต้องการโดยไม่ต้องกังวลเกี่ยวกับข้อจำกัด
          ไม่ว่าจะเป็นการดาวน์โหลดไฟล์ขนาดใหญ่, การสตรีมวิดีโอความละเอียดสูง,
          หรือการเล่นเกมออนไลน์
        </p>
      </div>

      <div
        class="md:col-span-3 col-span-6 relative md:mt-20 border-b-[1px] md:border-b-[0px] border-gray-300 pb-10"
      >
        <img
          src="../assets/img/nolimit.png"
          alt=""
          class="max-h-[450px] rounded-lg drop-shadow-md"
        />
      </div>
    </div>

    <div class="my-20">
      <p class="text-[32px] font-bold drop-shadow-md mb-10">ราคาโปรโมชั่น</p>
      <Price id="Price" />
    </div>
    <p class="text-[32px] font-bold drop-shadow-md">บทความที่เกี่ยวข้อง</p>
    <div class="border-y-[2px] w-full">
      <Card />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Header from "../components/Header.vue";
import Price from "../components/Price.vue";
import Card from "../components/Card.vue";

const data = ref(null);
const loading = ref(true);
const error = ref(null);

// onMounted(async () => {
//   try {
//     const response = await axios.get(
//       "https://newsdata.io/api/1/news?country=th&category=technology&apikey=pub_32083dca8b2848a2ac4ac85ad169dc85166f0"
//     );
//   } catch (err) {
//     error.value = "Failed to fetch data";
//   } finally {
//     loading.value = false;
//     console.log("success");
//   }
// });
</script>
