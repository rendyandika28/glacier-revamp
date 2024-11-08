<script setup lang="ts">
const currentCountdown = computed(() => `01:52`)
</script>
<template>
  <div class="form-otp">
    <div class="form-otp__input">
      <p-input-pin accept="1234567890" />
      <p-banner :dismissable="false" variant="danger">
        <template #icon>
          <pi-exclamation-circle-solid-20 class="text-danger mt-1" />
        </template>
        <h5>
          Make sure you type in the correct
          OTP code (2x remaining)
        </h5>
      </p-banner>
    </div>

    <h6>Remaining time: {{ currentCountdown }}</h6>
  </div>
</template>
<style lang="scss" scoped>
.form-otp {
  @apply flex flex-col justify-center items-center;

  :deep(div.input-pin) {
    @apply space-x-1 mb-4;
  }

  :deep(input) {
    @apply size-12;
  }

  h6 {
    @apply text-xs font-normal leading-[16px] tracking-wide text-[#444F62] text-left
  }

  &__input {
    @apply max-w-[260px] mb-4;

    h5 {
      @apply text-xs font-normal leading-[16px] tracking-wide text-left
    }
  }
}
</style>
