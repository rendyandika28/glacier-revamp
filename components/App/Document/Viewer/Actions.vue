<script setup lang="ts"></script>
<template>
  <div class="viewer-actions">
    <p-divider class="my-0" />
    <div class="actions">
      <app-button>Next document</app-button>
      <app-button b-variant="secondary">Previous</app-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.viewer-actions {
  & .actions {
    @apply px-4 py-6 space-y-4;
  }
}
</style>
