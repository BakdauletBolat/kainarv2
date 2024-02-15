import { config } from '@/composable/useConfig'

// default settings
export const appConfig = config({
  title: ref('PrimeDash'),
  theme: ref('light'),
  navigationMenu: ref('vertical'),
  isBoxLayout: ref(true),
  isVerticalMenuMini: ref(false),
  defaultLocale: ref('ru'),
  isRtl: ref(false),
  isSemiDark: ref(true),
  skins: ref('classic'),
  isNavbarFixed: ref(true),
})
