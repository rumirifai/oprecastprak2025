<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <main
    class="max-h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-800"
  >
    <section class="flex justify-center w-full h-screen snap-start bg-home-1">
      <div
        class="w-full h-full justify-center ml-24"
        flex="~ col"
        text="2rem md:4rem white"
        font="sans bold"
      >
        <span>Open Recruitment</span>
        <span>Asisten Praktikum 2023</span>
      </div>
    </section>
    <section
      class="flex items-center justify-center w-full h-screen snap-start bg-gray-700"
    >
      <div
        class="w-full h-full justify-center ml-24"
        flex="~ col"
        text="2rem md:4rem white"
        font="sans bold"
      >
        <span>What? Why? + Available Courses</span>
      </div>
    </section>
    <section
      class="flex items-center justify-center w-full h-screen snap-start bg-gray-600"
    >
      <div class="w-full h-full justify-center ml-24" flex="~ col">
        <span text="2rem md:4rem white" font="sans bold">Our Family</span>
        <NuxtLink to="/requirements">
          <button
            class="w-96 py-2 rounded-lg"
            border="~ solid 2px"
            text="white 2rem"
            font="sans bold"
          >
            Register now
          </button>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
