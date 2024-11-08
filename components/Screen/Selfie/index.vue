<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const { isMobile: isMobileDevice } = useDevice()
const isBreakpointsGreaterSm = computed<boolean>(() => !isMobile.value && !isMobileDevice)
const isLayoutWithBorder = computed<boolean>(() => true)
</script>
<template>
  <LayoutDefault :show-footer="isBreakpointsGreaterSm" :show-header="isBreakpointsGreaterSm" class="relative">
    <div class="selfie" :class="{ 'with-border': isLayoutWithBorder }">
      <!-- navigation -->
      <app-navigation-simple title="Face verification & selfie" />

      <!-- content -->
      <screen-selfie-information />
      <!-- <screen-selfie-form /> -->

      <LayoutFooter v-if="!isBreakpointsGreaterSm" />
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.selfie {
  &.with-border {
    @apply max-sm:m-4 max-sm:border max-sm:rounded-md;
  }

  @apply py-4 sm:py-6;
}
</style>
