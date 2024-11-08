<script setup lang="ts">
const isMenuOpen = ref<boolean>(false)
</script>
<template>
  <div class="confirmation">
    <div class="confirmation__header">
      <p-text variant="h6">Personal data</p-text>
      <p-button @click="isMenuOpen = true" variant="link" color="primary" class="p-0">
        <p-text variant="btn2">Change</p-text>
      </p-button>
    </div>

    <div class="confirmation__fields">
      <div class="field">
        <div class="field__value">
          <p-text class="font-bold text-[#56585D]" variant="body2">Full name</p-text>
          <p-text class="text-[#56585D]" variant="body">Tarjono Sukmawati</p-text>
        </div>
        <div class="field__confirmation">
          <p-checkbox><p-text variant="body2">Confirm</p-text></p-checkbox>
        </div>
      </div>
      <div class="field">
        <div class="field__value">
          <p-text class="font-bold text-[#56585D]" variant="body2">ID card number</p-text>
          <p-text class="text-[#56585D]" variant="body">3371092109990005</p-text>
        </div>
        <div class="field__confirmation">
          <p-checkbox><p-text variant="body2">Confirm</p-text></p-checkbox>
        </div>
      </div>
      <div class="field">
        <div class="field__value">
          <p-text class="font-bold text-[#56585D]" variant="body2">Date of birth</p-text>
          <p-text class="text-[#56585D]" variant="body">21/09/1999</p-text>
        </div>
        <div class="field__confirmation">
          <p-checkbox><p-text variant="body2">Confirm</p-text></p-checkbox>
        </div>
      </div>
    </div>

    <modal-slide v-model="isMenuOpen" bottom="0.5rem" hide-close>
      <div class="confirmation__modals">
        <p-text class="text-center block mb-6" variant="subheading">Personal data</p-text>
        <div class="fields">
          <form-identity-fields />
        </div>
        <app-button class="w-full mt-4">Save</app-button>
      </div>
    </modal-slide>
  </div>
</template>
<style lang="scss" scoped>
.confirmation {
  @apply flex flex-col gap-6;

  &__header {
    @apply flex flex-row items-center justify-between;
  }

  &__fields {
    @apply flex flex-col gap-6;

    & .field {
      @apply flex flex-row justify-between items-start;

      &__value {
        @apply flex flex-col
      }
    }
  }

  &__modals {
    @apply bg-base-white p-4 rounded-md;

    .fields {
      @apply max-h-[50dvh] sm:max-h-[50dvh] overflow-scroll
    }
  }
}
</style>
