<template>
  <div class=" flex flex-col justify-center gap-[20px]">
    <img :src="image" alt="illustration" class=" h-[100px]"/>
    <p class=" w-[350px] text-center">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'image']
}
</script>