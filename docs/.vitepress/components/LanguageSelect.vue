<script setup lang="ts">
import { useGlobalLanguage } from '../theme/store'
import { onMounted } from 'vue'
import { whenever } from '@vueuse/core'

defineProps({
  hideOnMobile: Boolean,
  hideLabel: Boolean
})

const activeGlobalId = useGlobalLanguage()

const options = [
  { value: 'ts', text: 'TypeScript' },
  { value: 'js', text: 'JavaScript' }
]

onMounted(() => {
  document.body.setAttribute('data-language', activeGlobalId.value)

  whenever(activeGlobalId, (val) => {
    document.body.setAttribute('data-language', val)
  })
})
</script>

<template>
  <div :class="{ 'hidden lg:block': hideOnMobile }">
    <label>
      <span v-if="!hideLabel" class="language-select-label text-sm font-bold">Code Language</span>
      <div class="relative">
        <select
          v-model="activeGlobalId"
          class="language-select w-full border border-black/10 pl-3 py-1.5 bg-base-100 pr-10 font-semibold transition duration-200 ease-in-out rounded-md"
        >
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <div class="i-carbon-chevron-down absolute right-1.5 top-2.5" />
      </div>
    </label>
  </div>
</template>

<style lang="postcss">
.language-select-label {
  color: var(--vp-c-text-1);
}
</style>
