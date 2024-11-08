<script setup lang="ts"></script>
<template>
  <div class="header-actions">
    <div class="navigations">
      <p-button variant="ghost" class="text-default max-sm:p-0"><pi-chevron-left-20 />Back to document list</p-button>
    </div>
    <div class="actions max-sm:hidden">
      <p-button class="px-12" color="primary">Sign</p-button>
      <p-button class="px-5" variant="ghost">Reject</p-button>
    </div>
    <div class="actions sm:hidden">
      <p-button icon variant="outline" size="xs" class="px-4 py-1"><pi-download-24 /></p-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header-actions {
  @apply fixed top-0 left-0 right-0 px-4 sm:px-8 py-6 z-[99] bg-base-white border-b flex flex-row items-center justify-between;

  & .actions {
    @apply space-x-4;
  }
}
</style>
