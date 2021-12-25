<script lang="ts" setup>
import { useMagicKeys } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { cipher } from '../utils/cipher'

const name = ref('')
const buttonRef = ref()
const router = useRouter()
const { enter } = useMagicKeys()

const entered =  () => {
  const cipherName = cipher(name.value.toString())
  router.push({ path: `/wish/${cipherName}` })
}

watch(enter, (v) => {
  if (v) {
    buttonRef.value.click()
  }
})
</script>

<template>
  <n-card title="Enter your name" class="max-w-[600px] w-[85vw]">
    <div class="flex justify-center">
      <n-input 
        v-model:value="name" 
        type="text" placeholder="e.g. John Doe" 
        spellcheck="false"
      ></n-input>
      <n-button @click="entered()">
        <span ref="buttonRef">Enter</span>
      </n-button>
    </div>
  </n-card>
</template>