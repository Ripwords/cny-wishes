<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { cipher } from '../utils/cipher'

const route = useRoute()
const cipheredName = route.params.name
const name = cipher(cipheredName.toString(), true)
const title = `Happy CNY from ${name}!`
</script>

<template>
  <div class="fixed w-full h-full bg-dark-700">
    <div class="flex justify-center mt-10">
      <n-card :title="title" class="max-w-[90vw] h-[133px]">
        Happy CNY
      </n-card>
    </div>
  </div>
</template>