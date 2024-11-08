<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const { isMobile: isMobileDevice } = useDevice()
const isBreakpointsGreaterSm = computed<boolean>(() => !isMobile.value && !isMobileDevice)
</script>
<template>
  <LayoutDefault :show-footer="isBreakpointsGreaterSm" :show-header="isBreakpointsGreaterSm" class="relative">
    <div class="additional">
      <!-- navigation -->
      <div class="sm:px-6">
        <app-navigation-simple class="items-start">
          <div class="flex flex-col gap-2">
            <p-text class="font-bold" variant="subheading">Upload a complementary document</p-text>
            <p-text class="text-subtlest" variant="body2">Upload the following complementary document to ensure your
              validity during
              verification</p-text>
          </div>
        </app-navigation-simple>
      </div>

      <!-- content -->
      <div class="additional__form">
        <form-additional />
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.additional {
  @apply sm:pt-10 space-y-9;

  &__form {
    @apply px-4 sm:px-10
  }
}
</style>
