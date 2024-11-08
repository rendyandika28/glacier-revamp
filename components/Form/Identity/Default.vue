<script setup lang="ts"></script>
<template>
  <div class="default">
    <div class="default__header">
      <p-text variant="h6">Personal data</p-text>
    </div>
    <form-identity-fields />
  </div>
</template>
<style lang="scss" scoped>
.default {
  @apply flex flex-col gap-6;

  &__header {
    @apply flex flex-row items-center justify-between;
  }
}
</style>
