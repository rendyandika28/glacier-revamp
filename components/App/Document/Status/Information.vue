<script setup lang="ts">
import { statusInformations } from '@/variables/document'
const showModal = ref<boolean>(false);
</script>
<template>
  <p-banner :dismissable="false">
    <div class="information">
      <p-text variant="subheading2">Status information</p-text>
      <p-text variant="caption">See details status information here</p-text>

      <p-button @click="showModal = true" variant="link" class="w-fit px-0 mt-1 underline" size="xs">
        <p-text variant="caption2">Tap to open</p-text>
      </p-button>
    </div>

    <p-modal v-model="showModal" centered banner :dismissable="false" size="sm">
      <div class="information__modal">
        <p-button @click="showModal = false" variant="link" icon
          class="text-[#B7B8B9] ml-auto p-0"><pi-close-24 /></p-button>
        <p-text class="mt-2" variant="subheading2">Status information</p-text>

        <div class="information__modal__status">
          <template v-for="(status, _idx) in statusInformations">
            <div class="status" v-for="item in status.items">
              <div class="status__title">
                <component :is="item.icon"
                  :class="[status.type === 'error' ? 'text-red-50' : status.type === 'success' ? 'text-green-40' : 'text-orange-40']" />
                <p-text
                  :class="[status.type === 'error' ? 'text-red-50' : status.type === 'success' ? 'text-green-40' : 'text-orange-40']"
                  variant="caption">{{
                    item.title }}</p-text>
              </div>
              <p-text class="text-subtle" variant="caption">{{ item.description }}</p-text>
            </div>
            <p-divider v-if="_idx < statusInformations.length - 1" class="mt-6" />
          </template>
        </div>
      </div>
    </p-modal>
  </p-banner>
</template>
<style lang="scss" scoped>
.information {
  @apply flex flex-col gap-1;

  &__modal {
    @apply flex flex-col items-center justify-center py-6 px-8;

    &__status {
      @apply w-full mt-6 space-y-6;
      // @apply max-h-[70dvh] overflow-scroll;

      & .status {
        @apply w-full flex flex-col justify-start items-start max-w-[80%];


        &__title {
          @apply flex flex-row justify-center items-center gap-1 mb-2;
        }
      }
    }

  }
}
</style>
