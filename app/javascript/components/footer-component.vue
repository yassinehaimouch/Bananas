<template>
  <div class="flex bg-[#FAC710] justify-between py-[70px] items-end px-[100px]">
    <div>
      <a href="/">
        <img :src="'/banana.svg'" alt="logo" class="w-[80px]" />
        <h1 class=" font-bold text-3xl my-[10px]">Banana</h1>
      </a>
      <p>We're bananas about DNS since 2010!</p>
    </div>
    <ul class=" text-right">
      <li><a href="/">About us</a></li>
      <li><a href="/">The company</a></li>
      <li><a href="/">Privacy policies</a></li>
      <li><a href="/">I hope this was fun</a></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>