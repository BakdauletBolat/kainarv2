<script setup>
import Logo from '@/components/Logo.vue'
import { useAppConfig } from '@/composable/useAppConfig'
import verticalItems from '@/menus/vertical'
import { appConfig } from '@appConfig'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import { useLocale } from 'vuetify'
import VerticalNavGroup from './VerticalNavGroup.vue'
import VerticalNavLink from './VerticalNavLink.vue'
import { isGroupActive } from './utils'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDrawerOpen'])

const { t } = useLocale()
const { isVerticalMenuMini, isSemiDark, skins } = useAppConfig()
const OpenedGroup = ref([])

const resolveNavLinkGroup = computed(() => {
  return navItem => navItem.children ? VerticalNavGroup : VerticalNavLink
})

OpenedGroup.value = isGroupActive(verticalItems)

// remove group active when only link active
const handleGroupClose = () => {
  OpenedGroup.value = ['']
}
</script>

<template>
  <VNavigationDrawer
    touchless
    :rail="$vuetify.display.lgAndUp ? isVerticalMenuMini : false"
    :model-value="$vuetify.display.lgAndUp ? true : props.isDrawerOpen"
    :rail-width="skins === 'modern' ? 96 : 80"
    width="260"
    :theme="isSemiDark ? 'dark' : undefined"
    :permanent="$vuetify.display.lgAndUp"
    class="layout-vertical-nav"
    @update:model-value="(val) => $emit('update:isDrawerOpen', val)"
  >
    <div class="d-flex flex-column h-100">
      <div
        class="menu"
        style="min-height: 64px;"
      >
      
        <!-- toggle rail mode in medium and up screen -->
        <VBtn
          v-if="$vuetify.display.lgAndUp"
          icon
          variant="plain"
          size="x-small"
          @click="isVerticalMenuMini = !isVerticalMenuMini"
        >
          <VIcon
            size="20"
            :icon="isVerticalMenuMini ? 'mdi-menu' : 'mdi-close'"
          />
        </VBtn>

        <!-- close nav in small screen -->
        <VBtn
          v-else
          icon
          variant="text"
          size="x-small"
          @click="$emit('update:isDrawerOpen', false)"
        >
          <VIcon
            size="24"
            icon="mdi-close"
          />
        </VBtn>
      </div>

      <VList
        v-model:opened="OpenedGroup"
        nav
        density="compact"
        open-strategy="single"
        class="layout-vertical-nav-list text-high-emphasis"
      >
        <template
          v-for="navItem in verticalItems"
          :key="navItem.title"
        >
          <VListSubheader
            v-if="navItem.heading"
            class="text-uppercase text-disabled"
          >
            {{ t(navItem.heading) }}
          </VListSubheader>

          <Component
            :is="resolveNavLinkGroup(navItem)"
            v-else
            :nav-item="navItem"
            @close-group="handleGroupClose"
          />
        </template>
      </VList>
    </div>
  </VNavigationDrawer>
</template>
<style>
.menu{
  display: flex!important;
  justify-content: center!important;;
  align-items: center!important;
  width: 100%;
}
</style>