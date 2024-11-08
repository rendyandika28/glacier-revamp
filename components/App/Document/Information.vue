<script setup lang="ts">
import { recipients } from "@/variables/document";
const showModal = ref<boolean>(false);
</script>
<template>
  <p-banner :dismissable="false">
    <div class="information">
      <p-text variant="subheading2">Document information</p-text>
      <p-text variant="caption">See details document information here</p-text>

      <p-button @click="showModal = true" variant="link" class="w-fit px-0 mt-1 underline" size="xs">
        <p-text variant="caption2">Tap to open</p-text>
      </p-button>
    </div>

    <p-modal v-model="showModal" centered banner :dismissable="false" size="sm">
      <div class="information__modal">
        <p-button @click="showModal = false" variant="link" icon
          class="text-[#B7B8B9] ml-auto p-0"><pi-close-24 /></p-button>
        <p-text class="mt-2" variant="subheading2">{Document name}</p-text>
        <p-text class="mt-1 text-subtle" variant="caption">Received: January 24, 2022 13:32</p-text>

        <div class="information__modal__recipients">
          <div v-for="recipient in recipients" class="recipients">
            <p-text class="mt-1 text-subtle capitalize" variant="caption">{{
              recipient.type
              }}</p-text>
            <div class="space-y-2">
              <div v-for="_recipient in recipient.recipients" class="recipient">
                <p-avatar variant="alias" :name="_recipient.fullName" />
                <div>
                  <p-text class="font-medium" variant="caption">{{ _recipient.fullName }}</p-text>
                  <div class="status__title">
                    <p-text variant="caption">{{ _recipient.status }}</p-text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </p-modal>
  </p-banner>
</template>
<style lang="scss" scoped>
.information {
  @apply flex flex-col gap-1;

  &__modal {
    @apply flex flex-col items-center justify-center py-6 px-4 sm:px-8;

    &__recipients {
      @apply w-full space-y-6;

      & .recipients {
        & .recipient {
          @apply flex flex-row items-center gap-2;
          @apply rounded-[8px] border border-[#E7E7E8] p-2;
        }
      }
    }
  }
}
</style>
