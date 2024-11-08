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
  placeholder: {
    type: String,
    default: ""
  },
  required: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<'text' | 'password'>,
    default: "text",
  },
  accept: {
    type: String as PropType<'numeric' | 'alpha' | 'alpha-numeric' | 'alpha-numeric-space-symbol'>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  inputClass: {
    type: String,
    default: ''
  },
  maxlength: {
    type: String,
    default: null
  }
})

// const placeholder = computed(() => props.placeholder === "" ? `Input ${props.label?.toLowerCase()}` : props.placeholder)
const { value, errorMessage } = useField<string>(toRef(props, "name"), undefined);
</script>
<template>
  <p-form-group :error="errorMessage" :required="required">
    <template #label>
      <p-text variant="formlabel2">{{ label }}</p-text>
    </template>
    <p-input-password v-if="type === 'password'" :disabled="disabled" v-model="value" :size="size"
      :class="inputClass" />
    <p-input v-else :readonly="readonly" :disabled="disabled" :type="type" v-model="value" :size="size" :accept="accept"
      :class="inputClass" :placeholder="placeholder" :maxlength="maxlength">
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend" />
      </template>
      <template v-if="$slots.append" #append>
        <slot name="append" />
      </template>
    </p-input>
  </p-form-group>
</template>
