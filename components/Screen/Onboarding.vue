<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const { isMobile: isMobileDevice } = useDevice()
const isBreakpointsGreaterSm = computed<boolean>(() => !isMobile.value && !isMobileDevice)

interface Step {
  text: string
  isCompleted: boolean
  isActive: boolean
}

const steppers = ref<Step[]>([
  {
    text: 'Proof of identity',
    isCompleted: true,
    isActive: false
  },
  {
    text: 'Face verification and selfie',
    isCompleted: false,
    isActive: true

  },
  {
    text: 'Upload a complementary document',
    isCompleted: false,
    isActive: false
  },
])
</script>
<template>
  <LayoutDefault :show-footer="isBreakpointsGreaterSm" :show-header="isBreakpointsGreaterSm">
    <div class="onboarding">
      <app-navigation />
      <div class="onboarding__content">
        <pil-id-card-spot class="mb-6" />

        <div class="onboarding__content__menu">
          <p-button v-for="step in steppers" :key="step.text" variant="link" class="menu">
            <div class="left">
              <pi-checkmark-circle-solid-24 v-if="step.isCompleted" class="text-green-40" />
              <div class="size-6 bg-[#EDEEF1] rounded-full" v-else></div>
              <div class="left-description">
                <p-text variant="subheading2" class="text-left max-w-[182px]"
                  :class="[!step.isActive && !step.isCompleted ? 'text-muted' : 'text-default']" v-text="step.text" />
                <p-text v-if="step.isActive" variant="caption" class="text-subtlest">Click to continue</p-text>
              </div>
            </div>
            <pi-chevron-right-16 class="text-base-black" />
          </p-button>
        </div>
      </div>
      <LayoutFooter v-if="!isBreakpointsGreaterSm" />
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.onboarding {
  @apply max-sm:m-4 max-sm:border max-sm:rounded-md;

  &__content {
    @apply p-4 flex flex-col items-center mb-4;

    &__menu {
      @apply flex flex-col gap-2 w-full;

      & .menu {
        @apply w-full flex flex-row items-center justify-between bg-[#F7F8FB] rounded-[10px] p-4;

        & .left {
          @apply flex flex-row items-center gap-4;

          &-description {
            @apply flex flex-col items-start;
          }
        }
      }
    }


  }
}
</style>
