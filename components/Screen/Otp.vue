<script setup lang="ts">
import IEmailNotify from '@/assets/icons/email-notify.svg'

const destinationOtpIcon = computed(() => {
  return IEmailNotify
})

const destinationOtpText = computed(() => {
  return `To get started, we just need to make sure it's really you. Tap the <strong>'Request OTP'</strong> button
        below to receive your
        one-time password (OTP) via email <strong>[email]</strong>. `
})

const hasRequestOtp = ref<boolean>(false)
const onRequestOtp = () => {
  hasRequestOtp.value = true
}

const isShowLayoutHeader = computed<boolean>(() => !hasRequestOtp.value)
const isShowLayoutFooter = computed<boolean>(() => true)

</script>
<template>
  <LayoutDefault :show-header="isShowLayoutHeader" :show-footer="isShowLayoutFooter">
    <div class="otp">
      <template v-if="!hasRequestOtp">
        <div class="otp__info">
          <destination-otp-icon filled :fontControlled="false" class="w-[150px]" />
          <div class="otp__content">
            <h2 class="title">Welcome</h2>
            <h5 class="destination" v-html="destinationOtpText" />
            <h5 class="description">Once you've received the OTP, simply enter it in the following page and you're good
              to
              go!
            </h5>
          </div>
        </div>
        <div class="otp__action_info">
          <p-divider class="my-0 mb-6 sm:hidden" />
          <div class="px-7 sm:px-0 w-full">
            <app-button @click="onRequestOtp">Request OTP</app-button>
          </div>
        </div>
      </template>
      <div v-else class="otp__form">
        <h2>Verify your email address</h2>
        <h5>Please enter the 5-digit code sent via <br> email to: {email address}</h5>
        <form-otp />
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.otp {
  @apply sm:pt-10 flex flex-col justify-between flex-1;

  &__info {
    @apply flex flex-col justify-between items-center;
  }

  &__content {
    @apply flex flex-col gap-2 text-center mt-10 px-4 sm:px-8;

    & .title {
      @apply text-base font-bold leading-[24px] tracking-wide text-base-black;
    }

    & .destination,
    .description {
      @apply text-sm font-normal leading-[24px] tracking-wide text-gray-65;
    }
  }

  &__form {
    @apply text-center pt-10 px-9;

    h2 {
      @apply text-xl font-bold leading-[26px] text-brand-logo mb-4 max-sm:text-left;
    }

    h5 {
      @apply text-sm font-normal leading-[20px] tracking-wide text-[#818B9C] mb-28 sm:mb-10 max-sm:text-left;
    }
  }

  &__action {
    &_info {
      @apply sm:my-10 flex flex-col items-center justify-center;

      button {
        @apply text-base font-medium tracking-wider !bg-brand-logo !text-base-white/95 hover:text-base-white w-full sm:w-[312px];
      }
    }
  }
}
</style>
