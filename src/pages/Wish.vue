<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { cipher } from '../utils/cipher'

const route = useRoute()
const routeParams = route.params
const cipheredName = routeParams.name
const name = cipher(cipheredName.toString(), true)
const title = `Happy CNY from ${name}!`
</script>

<template>
  <div class="fixed w-full h-full bg-dark-700 flex justify-center items-center">
    <n-card :title="title" class="max-w-[600px] w-[85vw]">
      Happy CNY
    </n-card>
  </div>
</template>