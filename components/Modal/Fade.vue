<script setup lang="ts">
const isOpen = defineModel<boolean>()

defineProps({
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

watch(isOpen, () => {
  document.body.classList.toggle('overflow-hidden')
})
</script>
<template>
  <p-modal v-model="isOpen" :size="size" :centered="centered" :dismissable="dismissable" :banner="banner">
    <slot />
  </p-modal>
</template>
<style lang="scss" scoped></style>
