<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const { isMobile: isMobileDevice } = useDevice()
const isBreakpointsGreaterSm = computed<boolean>(() => !isMobile.value && !isMobileDevice)

const isCheckedConsent = ref<boolean>(false)
</script>
<template>
  <LayoutDefault :show-footer="isBreakpointsGreaterSm">
    <div class="consent">
      <div class="consent__container">
        <p-heading element="h6" class="consent__container__header">
          Terms of Use
        </p-heading>
        <div class="consent__container__content">
          <i-logo-text filled :fontControlled="false" class="w-[120px] my-6 sm:my-10" />
          <p-heading class="max-sm:hidden" element="h6">
            Terms of Use & Privacy Policy
          </p-heading>
          <p-divider class="my-5 max-sm:hidden" />
          <div class="content">
            <p-subheading class="max-sm:hidden">
              Terms of use
            </p-subheading>
            <p-caption class="max-sm:hidden">
              Updated April 20, 2022
            </p-caption>
            <div class="sm:mt-4 text-justify sm:max-h-72 px-8 sm:px-10 ">
              <p-text variant="body2" class="text-subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate
                magnam esse nihil, officiis maiores recusandae aperiam facilis illo deserunt dignissimos dolor
                reiciendis
                ipsa
                ut sunt minus quos totam. Cum praesentium reiciendis quisquam eum autem, molestiae consequatur
                laboriosam
                officiis architecto minus quia veritatis molestias sit enim ullam, dolorem voluptatem voluptate quam
                esse
                beatae ipsa dignissimos nulla officia provident! Ipsa molestias cum cupiditate ratione dolorem enim
                voluptas
                placeat, totam aliquid hic! A autem repellat voluptate ratione dolorem sapiente delectus nisi tempore
                repellendus vitae deleniti consectetur dolore, impedit quasi assumenda atque esse animi nihil. Officiis
                enim
                maiores odio, fugit voluptatibus veniam ipsam ducimus eaque neque, commodi dolore. Nostrum labore
                asperiores
                quae quibusdam, similique corrupti doloremque repellat rem totam nisi distinctio cum expedita provident,
                et
                eaque consequatur, consectetur amet vero hic exercitationem cupiditate optio reprehenderit voluptates
                vel!
                Impedit, facilis! Delectus dignissimos nam blanditiis aspernatur sunt iure doloremque eaque libero, hic
                fugit
                provident nemo laudantium inventore, dicta ab quis quam, minima consectetur. Sequi iste minima vel illo
                ut
                iusto, non voluptatibus delectus provident inventore facilis excepturi. Quos nobis, mollitia accusantium
                unde
                assumenda sed repudiandae ab! Minima similique quasi accusantium ab fugiat impedit saepe consequatur,
                tempora,
                deserunt cumque quia repellat praesentium quo voluptate molestiae incidunt debitis, adipisci sed
                dolores.
                Inventore culpa consequatur, omnis sapiente perspiciatis quam minima est distinctio officiis tempore qui
                nulla
                earum nobis totam doloribus atque, ab vitae repudiandae, natus eveniet assumenda necessitatibus ratione?
                Vel
                praesentium temporibus earum quam nisi sequi ratione dolores, facilis harum, culpa veniam aliquid
                reprehenderit recusandae nesciunt. Enim fugiat, ducimus aliquam expedita eaque, distinctio maxime
                tempore
                ut,
                esse a reiciendis laudantium consectetur. Distinctio magni aperiam aliquam doloremque? Reprehenderit ex
                temporibus quam laborum a illo, corrupti optio inventore laudantium in voluptate fugiat perspiciatis
                nihil
                libero, rem modi consequuntur aut. Asperiores adipisci nam iusto amet recusandae suscipit, porro,
                exercitationem quam assumenda tempora temporibus reiciendis repellendus dolor, voluptatem quaerat earum
                est
                natus modi! Rem perferendis, reprehenderit alias, reiciendis tempore quibusdam necessitatibus officia
                qui
                magnam sed porro? Nemo harum amet totam error beatae repellendus delectus repellat, illo tempora
                voluptatum,
                recusandae, repudiandae perspiciatis veritatis nesciunt hic aliquam rem. Enim eaque magnam esse dicta
                voluptate quia minima, perspiciatis unde, asperiores autem fugiat. Iusto eligendi rem temporibus
                provident
                vero sequi harum mollitia, aspernatur aliquam atque quia molestiae maiores quod nostrum praesentium.
                Delectus
                ipsam ex illum quas magnam! Accusamus magnam molestiae nisi dolore animi nihil recusandae totam magni
                rem
                quasi sunt hic sequi consequuntur delectus doloremque nobis, corporis sit dolores, qui, aliquam
                officiis.
                Quae, porro nisi, non sapiente praesentium deleniti quisquam assumenda necessitatibus dolorum voluptas
                impedit
                quia distinctio cum, atque iste? Minus cumque obcaecati deserunt repellendus necessitatibus reiciendis
                quod
                sapiente, nostrum placeat reprehenderit corporis illo, distinctio odit voluptatum esse amet saepe?
                Architecto
                eius qui consequuntur animi ab quod tempore minus voluptate soluta! Voluptatem, aperiam? Nemo quos velit
                eum
                nam provident facere excepturi expedita adipisci! Quaerat maxime architecto quia unde, laborum suscipit
                nisi
                sequi a facere ut, corporis eum dolorum nihil assumenda sed! Culpa nulla illum at doloremque atque vitae
                earum
                ab tenetur architecto, minima cupiditate assumenda voluptates consequuntur.</p-text>
              <p-checkbox class="hidden sm:flex sm:flex-row sm:items-baseline" v-model="isCheckedConsent">
                <p-text variant="body2" class="text-subtle mt-4 block">I agree to be bound by Privy terms of use and
                  privacy
                  policy.</p-text>
              </p-checkbox>
            </div>
          </div>
        </div>
      </div>
      <div class="action">
        <p-checkbox v-model="isCheckedConsent" class="sm:hidden">
          <p-text variant="body2" class="text-subtle mt-4 block">I agree to be bound by Privy terms of use and
            privacy
            policy.</p-text>
        </p-checkbox>
        <app-button :disabled="!isCheckedConsent">Continue</app-button>
      </div>
    </div>
  </LayoutDefault>
</template>
<style lang="scss" scoped>
.consent {
  @apply flex flex-col items-center justify-between flex-1;

  &__container {
    @apply flex-1 flex flex-col;

    &__content {
      @apply flex flex-col items-center flex-1;

      & .content {
        flex: 1 1 0;
        @apply text-center overflow-y-scroll sm:flex-auto;
      }
    }

    &__header {
      @apply p-4 text-xl font-bold leading-[26px] mr-auto sm:hidden;
    }
  }

  .action {
    @apply px-8 pt-4 pb-6 sm:mt-10 sm:mb-8 w-full flex justify-center sm:items-center flex-col gap-3;
  }
}
</style>
