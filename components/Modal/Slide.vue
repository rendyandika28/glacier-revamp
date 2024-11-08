<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

defineProps({
  hideCancel: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: String,
    default: '2rem'
  }
})

const target = ref(null)
const isOpen = defineModel()

const closeModal = () => {
  if (!!isOpen.value) isOpen.value = false
}

onClickOutside(target, _ => {
  closeModal()
})

watch(isOpen, () => {
  document.body.classList.toggle('overflow-hidden')
})

</script>
<template>
  <Transition name="slide-fade-up">
    <div class="modal-slide" v-if="isOpen">
      <div class="modal-slide__inner" ref="target" :style="{ 'bottom': bottom }">
        <slot :closeModal="closeModal" />
        <p-button v-if="!hideCancel" size="lg" @click="closeModal" class="bg-base-white mt-2 rounded-md">
          <p-text variant="h6" class="text-[#007AFF]">Close</p-text>
        </p-button>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.modal-slide {
  @apply absolute inset-0 sm:rounded-[10px] bg-base-black/40 transition-all z-50;

  &__inner {
    @apply fixed max-w-lg w-full mx-auto flex flex-col px-2;
  }
}
</style>
