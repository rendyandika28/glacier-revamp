<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
})

</script>
<template>
  <h1>Error Page</h1>
</template>
<style lang="scss" scoped></style>
