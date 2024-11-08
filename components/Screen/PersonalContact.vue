<script setup lang="ts">
</script>
<template>
  <LayoutDefault show-footer>
    <div class="contact">
      <div class="contact__form">
        <div class="contact__form__header">
          <p-text variant="body" class="font-bold text-default">Personal contact</p-text>
          <p-text variant="body2" class="text-[#555555]">Enter your contact information</p-text>
        </div>
        <div class="contact__form__fields">
          <form-personal-contact />
        </div>
      </div>
      <div class="contact__action">
        <p-divider class="my-0 mb-6 sm:hidden" />
        <div class="px-7 sm:px-0 w-full flex justify-center">
          <app-button>Continue</app-button>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.contact {
  @apply sm:px-6 sm:py-8 flex flex-col justify-between flex-1;

  &__form {
    @apply px-6 py-8 sm:p-4 mb-8 flex flex-col gap-5;

    &__header {
      @apply flex flex-col gap-1
    }
  }

  &__action {
    @apply flex flex-col items-center justify-center
  }
}
</style>
