<script setup lang="ts">
useHead({
  title: 'Requirements',
})
</script>

<template>
  <main class="h-screen bg-gray-800">
    <div class="h-full justify-center ml-24" flex="~ col">
      <NuxtLink to="/">
        <div class="i-ph:arrow-left" text="white 2rem"></div>
      </NuxtLink>
      <span text="2rem md:4rem white" font="sans bold"
        >Timeline / Requirements</span
      >
      <NuxtLink to="/faq">
        <span text="white 2rem" font="sans bold">
          Frequently Asked Questions
        </span>
      </NuxtLink>
    </div>
  </main>
</template>
