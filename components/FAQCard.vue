<script setup lang="ts">
const props = defineProps<{
  faq: FaqItem
}>()
</script>

<template>
  <details>
    <summary class="py-2 text-lg outline-none cursor-pointer">
      {{ props.faq.question }}
    </summary>
    <div class="px-4 pb-4 mt-2">
      <p>Answer : {{ props.faq.answer }}</p>
    </div>
  </details>
</template>
