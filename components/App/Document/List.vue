<script setup lang="ts">
import PiStopwatch16 from "@privyid/persona-icon/vue/stopwatch/16.vue";
import type { Document } from "~/variables/document";

defineProps({
  title: {
    type: String,
    required: true
  },
  listDocuments: {
    type: Array as PropType<Document[]>,
    required: true
  }
})

const model = ref(1)
const total = ref(50)
const perPage = ref(5)
const perPageOptions = ref([5, 10, 15])
</script>
<template>
  <div class="list">
    <div class="list__header">
      <div class="rounded-full size-10 bg-[#F6F7F9] grid place-items-center">
        <pi-document-filled-24 class="text-gray-40" />
      </div>
      <p-text class="font-bold" variant="subheading2">{{ title }}</p-text>
    </div>
    <p-divider class="my-0" />
    <div class="list__documents">
      <button v-for="doc in listDocuments" class="item">
        <div class="item__title">
          <p-text class="text-[#1C1C1E]" variant="caption">{{ doc.title }}</p-text>
          <p-text class="text-subtlest" variant="caption">{{ doc.extension }}</p-text>
        </div>
        <div class="item__status">
          <component :is="doc.icon"
            :class="[doc.type === 'error' ? 'text-red-50' : doc.type === 'success' ? 'text-green-40' : 'text-orange-40']" />
          <p-text
            :class="[doc.type === 'error' ? 'text-red-50' : doc.type === 'success' ? 'text-green-40' : 'text-orange-40']"
            variant="caption">{{
              doc.status_doc }}</p-text>
        </div>
      </button>
    </div>
    <p-pagination v-model="model" v-model:per-page="perPage" :per-page-options="perPageOptions" :total="total"
      navigation-only show-counter class="p-3 pb-6 px-5">
      <template #pagination-count="{ range, total }">
        <p-text class="text-[#818385] pl-3" variant="caption2">{{ range.join('-') }} of {{ total }}
          documents</p-text>
      </template>
      <template #next-navigation>
        <p-button variant="link" icon class="p-0">
          <pi-chevron-right-16 class="text-base-black" />
        </p-button>
      </template>
      <template #prev-navigation>
        <p-button variant="link" icon class="p-0">
          <pi-chevron-left-16 class="text-base-black" />
        </p-button>
      </template>
    </p-pagination>
  </div>
</template>
<style lang="scss" scoped>
.list {
  @apply rounded-md border border-[#D6D9DE];

  &__header {
    @apply p-4 flex flex-row items-center gap-3;
  }

  &__documents {
    @apply p-4 space-y-2;

    & .item {
      @apply bg-default-alpha py-2 px-[14px] rounded block w-full;

      &__title {
        @apply flex flex-row justify-between mb-1;
      }

      &__status {
        @apply flex flex-row justify-start items-center gap-1;
      }
    }
  }
}
</style>
