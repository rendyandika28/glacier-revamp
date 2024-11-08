<script setup lang="ts"></script>
<template>
  <footer>
    <span>Powered by</span>
    <i-logo-text class="w-[50px]" :fontControlled="false" filled />
  </footer>
</template>
<style lang="scss" scoped>
footer {
  @apply flex flex-row justify-center items-center gap-2 mb-10 max-sm:mt-5;
  @apply text-[9px] leading-[10.89px] text-[#474747];
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
}
</style>
