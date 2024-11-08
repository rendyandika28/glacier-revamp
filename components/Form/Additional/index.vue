<script setup lang="ts">
const modalCenter = ref<boolean>(false)
</script>
<template>
  <form action="" class="form-additional">
    <div class="form-additional__fields">
      <app-file-input name="passport" label="Passport" />
      <app-file-input name="selfie" label="Selfie" />
      <app-file-input name="kk" label="Family registration card" />
    </div>

    <div class="form-additional__actions">
      <app-button @click="modalCenter = !modalCenter">Continue</app-button>
      <app-button b-variant="secondary">Back</app-button>
    </div>
  </form>

  <modal-screen-confirmation v-model="modalCenter" label="Confirmation"
    description="Before you continue, please check that the data you've entered is correct." />
</template>
<style lang="scss" scoped>
.form-additional {
  &__fields {
    @apply flex flex-col gap-4;
  }

  &__actions {
    @apply flex flex-col items-center justify-center gap-4 pt-9 pb-4;
  }
}
</style>
