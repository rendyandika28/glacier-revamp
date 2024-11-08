<script setup lang="ts"></script>
<template>
  <div class="identity-form">
    <div class="identity-form__image">
      <i-dummy-passport filled :fontControlled="false" class="size-full" />
      <p-divider class="my-6" />
    </div>


    <div class="identity-form__fields">
      <form-identity />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.identity-form {
  @apply pt-6;

  &__image {
    @apply px-4;
  }
}
</style>
