<script setup lang="ts">
interface IdentityOption {
  text: string
}
const identityOptions = ref<IdentityOption[]>([
  {
    text: 'Passport'
  },
  {
    text: 'Medicare'
  },
  {
    text: 'Driving License'
  },
  {
    text: 'Birth Certificate'
  },
])
</script>
<template>
  <div class="identity-options">
    <p-text variant="body2" class="text-subtlest text-center">You can choose the type of proof of your identity, please
      choose one
      at the bottom:</p-text>

    <div class="identity-options__menu">
      <p-radio v-for="identity in identityOptions" :key="identity.text" appearance="none">
        <template #default="{ isChecked }">
          <p-card element="div" class="px-4 py-2">
            <p-text variant="body" v-text="identity.text" />
          </p-card>
        </template>
      </p-radio>
    </div>

    <app-button class="mx-auto">Continue</app-button>
  </div>
</template>
<style lang="scss" scoped>
.identity-options {
  @apply py-4 px-4 sm:px-11 flex flex-col;

  &__menu {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-12;
  }
}
</style>
