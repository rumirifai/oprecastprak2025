<script setup lang="ts">
useHead({
  title: 'FAQ',
})
</script>

<template>
  <main class="h-screen bg-gray-800">
    <div class="h-full justify-center ml-24" flex="~ col">
      <NuxtLink to="/requirements">
        <div class="i-ph:arrow-left" text="white 2rem"></div>
      </NuxtLink>
      <span text="2rem md:4rem white" font="sans bold">Faq</span>
    </div>
  </main>
</template>
