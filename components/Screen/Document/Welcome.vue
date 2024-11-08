<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const { isMobile: isMobileDevice } = useDevice()
const isBreakpointsGreaterSm = computed<boolean>(() => !isMobile.value && !isMobileDevice)

</script>
<template>
  <LayoutDefault show-footer :show-header="isBreakpointsGreaterSm">
    <div class="welcome">
      <div class="welcome__content">
        <div v-if="!isBreakpointsGreaterSm" class="welcome__content__header">
          <layout-header background-color="#86888B0D" full-rounded />
        </div>

        <div class="flex flex-col items-center flex-1 justify-center">
          <i-document class="size-[200px] max-sm:mx-6 max-sm:mt-6 max-sm:mb-4" filled :fontControlled="false" />
          <div class="welcome__content__text">
            <p-text class="text-base-black" variant="h5">Hi John!</p-text>
            <p-text class="text-gray-65" variant="subheading2">You received a document(s) from <br class="sm:hidden">
              <strong>{Enterprise}</strong>
            </p-text>
            <p-text class="text-[#9EA0A2] mt-2" variant="body2">Click open to read the document(s)</p-text>
          </div>
        </div>
      </div>

      <div class="welcome__action">
        <p-divider class="my-0 sm:hidden" />
        <div class="welcome__action__button">
          <app-button size="lg">Continue</app-button>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.welcome {
  @apply flex flex-col justify-between flex-1;

  &__content {
    @apply flex flex-col items-center sm:m-10 max-sm:flex-1;
    @apply max-sm:bg-default-alpha max-sm:mx-3 max-sm:rounded-[9px] max-sm:mt-2 max-sm:p-[10px];

    &__text {
      @apply flex flex-col items-center gap-2 mt-10 max-sm:mx-6 text-center max-sm:mb-6;
    }

    &__header {
      @apply w-full;
    }
  }

  &__action {
    @apply mt-8 w-full;

    &__button {
      @apply px-7 pt-6 sm:pb-6 flex justify-center;
    }
  }
}
</style>
