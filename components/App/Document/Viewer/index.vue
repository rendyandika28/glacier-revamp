<script setup lang="ts">
</script>
<template>
  <div class="viewer">
    <p-text class="mb-2 max-sm:hidden sm:block" variant="h6">Document name</p-text>
    <client-only>
      <template #fallback>
        <p-shimmer width="100%" height="600px">
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
        </p-shimmer>
      </template>
      <p-pdf-viewer src="dummy.pdf" class="rounded-tn" />
    </client-only>
  </div>
</template>
<style lang="scss" scoped></style>
