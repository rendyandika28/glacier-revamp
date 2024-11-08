<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ""
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
})

const isMenuOpen = ref<boolean>(false)
const { value, errorMessage } = useField<string>(toRef(props, "name"), undefined);
</script>
<template>
  <p-form-group :error="errorMessage" :required="required">
    <template #label>
      <p-text variant="formlabel2">{{ label }}</p-text>
    </template>
    <div @click="isMenuOpen = true"
      class="w-full bg-[#F6F7F9] flex flex-col justify-center items-center px-2 py-4 gap-2 border-2 border-dashed rounded-md">
      <p-button variant="link" class="flex flex-row items-center gap-2 text-[#E42E2C] p-0">
        <pi-camera-16 />
        <p-text variant="btn2">Take a photo</p-text>
      </p-button>

      <p-text variant="caption2" class="text-[#9EA0A2] tracking-wide text-center">This information is required to
        determine
        your complementary
        document. </p-text>
    </div>
  </p-form-group>

  <modal-slide v-model="isMenuOpen">
    <div class="flex flex-col rounded-md overflow-hidden bg-[#F5F5F5B2] backdrop-blur-lg">
      <p-button size="lg" class="rounded-none hover:border-none" variant="link">
        <p-text variant="h6" class="text-[#007AFF]">Upload file or photo</p-text>
      </p-button>
      <p-divider class="my-0 text-base-black" />
      <p-button size="lg" class="rounded-none hover:border-none" variant="link">
        <p-text variant="h6" class="text-[#007AFF]">Take a photo</p-text>
      </p-button>
    </div>
  </modal-slide>
</template>
