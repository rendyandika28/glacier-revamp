<script setup lang="ts">
interface Instruction {
  text: string
  icon: any
}

const instructions = markRaw<Instruction[]>([
  {
    text: "Position your face within the frame",
    icon: ""
  },
  {
    text: "Take off your glasses, hat, or mask",
    icon: ""
  },
  {
    text: "Make sure the lighting is bright and your face is clearly visible",
    icon: ""
  }
])

const isMenuOpen = ref<boolean>(false)
</script>
<template>
  <div class="selfie-information">
    <div class="selfie-information__content">
      <div class="flex justify-center mb-6 ">
        <pil-liveness-spot />
      </div>
      <div class="selfie-information__content__wrapper">
        <p-text variant="subheading" class="text-default mb-1">Instruction</p-text>
        <p-text variant="body2" class="text-subtlest text-center m-auto">We want to ensure that your account matches
          your personal data.</p-text>
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
.selfie-information {
  @apply flex flex-col items-center gap-6;

  &__content {
    @apply pt-6;

    &__wrapper {
      @apply flex flex-col text-center px-4;

      & .information {
        @apply p-4 rounded-xl bg-default-alpha mt-6;
      }
    }
  }
}
</style>
