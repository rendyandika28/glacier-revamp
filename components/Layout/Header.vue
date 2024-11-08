<script setup lang="ts">
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#FAFAFA'
  },
  fullRounded: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
  <header :style="{ backgroundColor: props.backgroundColor }" :class="[fullRounded ? 'rounded-md' : 'rounded-t-md']">
    <!-- Brand logo -->
    <NuxtImg src="https://kbsproperty.co.id/wp-content/uploads/2020/09/dummy-logo-2b.png" placeholder
      class="max-h-[37px]" />
    <!-- Multi Language -->
    <!-- TODO: Add multi language -->
  </header>
</template>
<style lang="scss" scoped>
header {
  @apply px-6 py-6 sm:py-8;
  @apply flex flex-row justify-between;
}
</style>
