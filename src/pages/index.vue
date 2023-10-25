<template>
    <Navbar />
    <Header />

    <div class="max-w-screen-xl pb-20 flex-col flex justify-center items-center w-full mt-28">
        <h1 class="text-[32px] font-semibold drop-shadow-md">
            ใช้งานง่าย พร้อมทีมซัพพอร์ตตลอดการใช้งาน
        </h1>
        <div class="grid grid-cols-6 gap-12 w-full mt-20">
            <div class="col-span-3 w-full">
                <h1 class="text-[28px] font-semibold drop-shadow-md">
                    HTTP Proxy พื้นที่ประเทศไทย
                </h1>
                <p>ใช้งานง่าย ใช้ได้กับหลากหลายแพลตฟอร์ม</p>
                <p>ไม่ต้องปวดหัวกับการ KYC</p>
                <p>มีทีมงานคอยให้คำปรึกษาตลอดการใช้งาน</p>
                <div class="flex justify-start space-x-5">
                    <a href="">
                        <p
                            class="bg-[#38B6FF] p-3 px-10 text-center rounded-full drop-shadow-md mt-5 text-white hover:bg-white hover:text-black">
                            สั่งซื้อ
                        </p>
                    </a>
                    <a href="">
                        <p
                            class="bg-transparent border-[1px] border-[#38B6FF] p-3 px-10 text-center rounded-full drop-shadow-md mt-5 hover:bg-[#38B6FF] hover:text-white">
                            ติดต่อสอบถาม
                        </p>
                    </a>
                </div>
            </div>
            <div class="col-span-3 relative">
                <img src="../assets/img/map.png" alt="" class="max-h-[350px] rounded-lg drop-shadow-md" />
                <img src="../assets/img/pin.png" alt="" class="h-8 absolute right-40 top-[150px]" />
            </div>


           
            <div class="col-span-3 relative mt-20">
                <img src="../assets/img/muti.png" alt="" class="max-h-[350px] rounded-lg drop-shadow-md" />
           
            </div>

            <div class="col-span-3 w-full mt-20 flex-col">
                <h1 class="text-[28px] font-semibold drop-shadow-md">
                    ใช้งานได้หลากหลายแพลตฟอร์ม
                </h1>
                <p>รองรับการใช้งานกับแพลตฟอร์มต่าง ๆ ได้หลากหลาย</p>
                <p class=" border-b-[1px] pb-5">พร้อมใช้งานทุกระบบปฎิบัติการ</p>
                <div class="flex justify-start items-center space-x-5 mt-5">
                    <img src="../assets/img/barnd/ios.png" alt="" class="h-10">
                    <img src="../assets/img/barnd/and.png" alt="" class="h-10">
                    <img src="../assets/img/barnd/win.png" alt="" class="h-10">
                    <img src="../assets/img/barnd/mac.png" alt="" class="h-8">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
</script>
