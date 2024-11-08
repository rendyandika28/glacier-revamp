<script setup lang="ts"></script>
<template>
  <div class="form-identity">
    <div class="fields">
      <form-identity-confirmation />
      <!-- <form-identity-default /> -->
    </div>
    <p-divider class="my-6 sm:invisible" />
    <div class="actions">
      <app-button>Continue</app-button>
      <app-button b-variant="secondary">Back</app-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-identity {
  @apply mb-1;

  & .fields {
    @apply px-4;
  }

  & .actions {
    @apply flex flex-col items-center gap-2 sm:gap-4 max-sm:mx-7
  }
}
</style>
