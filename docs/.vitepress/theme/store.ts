import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalLanguage = createGlobalState(() => useStorage('global-language', 'ts'))
