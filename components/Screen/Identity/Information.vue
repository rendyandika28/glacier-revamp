<script setup lang="ts">
interface Instruction {
  text: string
  icon: any
}

const instructions = markRaw<Instruction[]>([
  {
    text: "Position your passport within the frame",
    icon: ""
  },
  {
    text: "Passport must be clearly readable",
    icon: ""
  },
  {
    text: "Passport must be active and valid",
    icon: ""
  },
  {
    text: "Use the original Passport, not a copy",
    icon: ""
  },
])

const isMenuOpen = ref<boolean>(false)
</script>
<template>
  <div class="identity-information">
    <div class="identity-information__content">
      <div class="mx-3 sm:mx-auto p-2 bg-[#CFD4DE80] rounded-md sm:max-w-72 mb-8">
        <i-dummy-passport filled :fontControlled="false" class="size-full" />
      </div>
      <div class="identity-information__content__wrapper">
        <p-text variant="subheading" class="text-default mb-1">Take passport photo</p-text>
        <p-text variant="body2" class="text-subtlest text-center m-auto">This document is required to verify
          your
          identity to
          the
          <strong>Australian Population and Civil Registration Agency</strong></p-text>
        <div class="information">
          <template v-for="(instruction, idx) in instructions" :key="instruction.text">
            <div class="flex flex-row items-center gap-3 w-full">
              <i-instructions-card filled :fontControlled="false" class="size-12" />
              <p-text variant="body" class="text-left">{{ instruction.text }}</p-text>
            </div>
            <p-divider v-if="idx + 1 < instructions.length" class="my-6" />
          </template>
        </div>

        <app-button @click="isMenuOpen = true" class="mx-auto mt-8">Continue</app-button>
      </div>
    </div>
    <p-text variant="body2" class="text-subtle text-center mb-6 max-w-[80%] sm:max-w-full">By pressing the “Continue”
      button, you
      agree
      to our
      <nuxt-link href="#" class="text-brand-accent">Terms of
        Use</nuxt-link>
    </p-text>

    <modal-slide v-model="isMenuOpen">
      <div class="flex flex-col rounded-md overflow-hidden bg-[#F5F5F5B2] backdrop-blur-lg">
        <p-button size="lg" class="rounded-none hover:border-none" variant="link">
          <p-text variant="h6" class="text-[#007AFF]">Upload file or photo</p-text>
        </p-button>
        <p-divider class="my-0 text-base-black" />
        <p-button size="lg" class="rounded-none hover:border-none" variant="link">
          <p-text variant="h6" class="text-[#007AFF]">Take a photo</p-text>
        </p-button>
      </div>
    </modal-slide>
  </div>
</template>
<style lang="scss" scoped>
.identity-information {
  @apply flex flex-col items-center gap-6;

  &__content {
    @apply pt-6;

    &__wrapper {
      @apply flex flex-col text-center px-4 sm:px-11;

      & .information {
        @apply p-4 rounded-xl bg-default-alpha mt-6;
      }
    }
  }
}
</style>
