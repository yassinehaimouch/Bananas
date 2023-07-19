<template>
  <button @click="onClick" class="signupButton bg-[#FAC710] font-bold px-[60px] py-[20px] text-[1.2rem] rounded-xl">Get started for free</button>
</template>

<script>
  export default {
    methods: {
    onClick() {
      const modal = document.getElementById('modal');
      modal.classList.remove('hidden');
    }
  }
  }
</script>
