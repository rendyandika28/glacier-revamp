<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm");
const { isMobile: isMobileDevice } = useDevice();
const isBreakpointsGreaterSm = computed<boolean>(
  () => !isMobile.value && !isMobileDevice
);
</script>
<template>
  <LayoutDefault :show-footer="isBreakpointsGreaterSm" class="mt-20 sm:mt-32">
    <div class="document-viewer">
      <app-document-viewer-header-actions />
      <div class="max-sm:px-6 max-sm:pt-4">
        <app-document-information />
      </div>
      <app-document-viewer style="flex: 1 1 0" />
      <app-document-viewer-actions v-if="!isBreakpointsGreaterSm" />
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.document-viewer {
  @apply sm:p-10 flex flex-col gap-4 flex-1;
}
</style>
