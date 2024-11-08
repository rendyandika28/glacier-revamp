<script setup lang="ts">
defineProps({
  showFooter: {
    type: Boolean,
    default: false
  },
  showHeader: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <p-card class="layout-default">
    <layout-header v-if="showHeader" />
    <div class="layout-default__content">
      <slot />
    </div>
    <layout-footer v-if="showFooter" />
  </p-card>
</template>
<style lang="scss" scoped>
.layout-default {
  @apply max-w-lg w-full mx-auto bg-base-white max-sm:rounded-none max-sm:border-none;
  @apply flex flex-col max-sm:h-dvh;

  :deep(.card__body) {
    // override padding from p-card
    @apply p-0 flex-1 flex flex-col overflow-scroll;
  }

  &__content {
    @apply max-sm:flex-1 max-sm:flex max-sm:flex-col
  }
}
</style>
