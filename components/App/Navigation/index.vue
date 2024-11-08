<script setup lang="ts"></script>
<template>
  <div class="app-navigation">
    <p-button size="xs" icon variant="link" class="text-base-black"><pi-chevron-left-24 class="font-bold" /></p-button>
    <p-ringbar value="33" class="rotate-[190deg]" />
    <div class="app-navigation__header">
      <p-text variant="caption" class="text-muted">Step 1 of 3</p-text>
      <p-text variant="body" class="text-default">Scan and upload data</p-text>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-navigation {
  @apply p-4;
  @apply flex flex-row items-center gap-4;

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
