<script setup lang="ts">
import type { TypeVariant, StyleVariant } from '@privyid/persona/components/button/index.js';

const props = defineProps({
  type: {
    type: String as PropType<TypeVariant>,
    default: "button"
  },
  bVariant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  variant: {
    type: String as PropType<StyleVariant>,
    default: 'link'
  },
  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg">,
    default: 'md'
  }
})

const classBtn = computed<string>(() => {
  if (props.bVariant === 'secondary') {
    return 'bg-transparent text-base-black'
  }
  return '!bg-brand-logo !text-base-white/95'
})
</script>
<template>
  <p-button :variant="variant" :type="type" :class="`app-button ${classBtn}`" :size="size">
    <p-text variant="btn">
      <slot />
    </p-text>
  </p-button>
</template>
<style lang="scss" scoped>
.app-button {
  @apply w-full sm:w-[312px] hover:scale-[1.005];
}
</style>
