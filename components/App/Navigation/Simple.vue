<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="app-navigation">
    <p-button size="xs" icon variant="link" class="text-base-black"><pi-chevron-left-24 class="w-5 h-fit" /></p-button>
    <slot>
      <p-text variant="h6">{{ title }}</p-text>
    </slot>
  </div>
</template>
<style lang="scss" scoped>
.app-navigation {
  @apply p-4;
  @apply flex flex-row items-center gap-2 sm:gap-4;

  :deep(.ringbar) {
    @apply size-[30px]
  }

  :deep(.ringbar__ring) {
    @apply stroke-[#0F092C]
  }

  &__header {
    @apply flex flex-col;
  }
}
</style>
