<script setup lang="ts">
import { unopenedDocuments } from '@/variables/document'
</script>
<template>
  <LayoutDefault show-footer show-header class="relative">
    <div class="document-list">
      <div class="document-list__content">
        <app-document-status-information />
        <app-document-list title="Unopened document(s)" :list-documents="unopenedDocuments" />
        <app-document-list title="All document(s)" :list-documents="unopenedDocuments" />

        <p-text class="text-[#818385]" variant="caption">You can only <strong>Sign all</strong> after all documents have
          been
          approved</p-text>
      </div>
      <div class="document-list__actions">
        <p-divider class="my-0 sm:hidden" />
        <div class="px-7 pt-6 sm:pb-8 text-center">
          <app-button size="lg">Sign all</app-button>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.document-list {
  &__content {
    @apply m-10 max-sm:mx-6 max-sm:my-8 flex flex-col gap-4;
  }

  &__actions {
    @apply flex flex-col w-full justify-center;
  }
}
</style>
