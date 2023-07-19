<template>
  <div class=" flex flex-col items-center mt-[80px] text-center">
    <h1 class=" text-[#1A1A1A] text-[3rem]">Simplified DNS and Domain Registration Solutions</h1>
    <p class=" text-[#1A1A1A] text-[1.9rem] mt-[35px] mb-[50px]">Secure and Efficient Domain Name System (DNS) Services</p>
    <ButtonComponent />
  </div>
</template>

<script>
  import ButtonComponent from './signup-button.vue';
  export default {
    components:{
      ButtonComponent
    }
  }
</script>