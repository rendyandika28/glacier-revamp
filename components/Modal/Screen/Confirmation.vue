<script setup lang="ts">
const isOpen = defineModel<boolean>()

defineProps({
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  centered: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<"sm" | "lg">,
    default: "sm"
  },
  dismissable: {
    type: Boolean,
    default: false
  },
  banner: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits<{
  (e: 'on:cancel'): void
  (e: 'on:submit'): void
}>()

watch(isOpen, () => {
  document.body.classList.toggle('overflow-hidden')
})

const onClickAction = (type: string) => {
  isOpen.value = false
  if (type === 'cancel') {
    emits('on:cancel')
  } else {
    emits('on:submit')
  }
}

</script>
<template>
  <p-modal v-model="isOpen" :size="size" :centered="centered" :dismissable="dismissable" :banner="banner"
    style="border-radius: 12px;">
    <div class="confirmation-document">
      <i-confirmation-document class="w-[180px]" filled :fontControlled="false" />

      <div class="confirmation-document__caption">
        <p-text variant="h6">{{ label }}</p-text>
        <p-text class="text-subtle" variant="body">{{ description }}</p-text>
      </div>

      <div class="confirmation-document__action">
        <p-button @click="onClickAction('cancel')" class="text-default" variant="link">Recheck data</p-button>
        <p-button @click="onClickAction('submit')" class="px-8 bg-brand-logo text-base-white/95"
          variant="link">Continue</p-button>
      </div>
    </div>
  </p-modal>
</template>
<style lang="scss" scoped>
.confirmation-document {
  @apply flex flex-col items-center justify-center p-4 rounded-md;

  &__caption {
    @apply flex flex-col justify-center items-center text-center mt-4 mb-8 gap-2;
  }

  &__action {
    @apply flex flex-row gap-4;
  }
}
</style>
