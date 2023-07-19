<template>
  <div class="bg-[#000000d6] fixed top-0 left-0 right-0 bottom-0 hidden" id="modal">
    <form class="relative bg-white w-[500px] mx-auto border-[5px] border-black p-10 mt-36" action="/account"  method="post">
        <button @click="onClick">
          <img :src="'/close.svg'" class=" absolute top-[10px] right-[10px] w-[50px] cursor-pointer"/>
        </button>
        <div class=" flex flex-col">
          <h1 class="mb-9 text-3xl">Let's go bananas!</h1>
          <label class=" font-bold mb-2" for="email">Email</label>
          <input required type="email" name="email" id="email">
          
          <label class=" font-bold mb-2 mt-5" for="password">Password</label>
          <input type="password" name="password" id="password">
          
          <input type="submit" name="commit" value="Create my Account" class="cursor-pointer bg-[#FAC710] font-bold px-[60px] py-[20px] text-[1.2rem] rounded-xl mt-9" data-disable-with="Create my Account">
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
    onClick() {
      const modal = document.getElementById('modal')
      modal.classList.add('hidden')
    }
  }
}
</script>