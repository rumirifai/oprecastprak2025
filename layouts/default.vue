<template>
  <div class="flex flex-no-wrap">
    <div
      ref="sidebar"
      class="w-16 h-screen sticky fixed z-40 absolute bg-[#211C1D] shadow flex-col justify-between transition duration-150 ease-in-out"
    >
      <button
        ref="openSidebar"
        aria-label="toggle sidebar"
        class="h-12 w-12 bg-[#211C1D] absolute right-0 mt-4 -mr-12 flex items-center shadow rounded-tr-lg rounded-br-lg justify-center cursor-pointer"
        @click="toggleSidebar()"
      >
        <div
          class="text-white"
          :class="`${state.isSidebarOpen ? 'i-ph:x' : 'i-ph:list'}`"
        ></div>
      </button>
      <div class="flex flex-col h-full pt-16">
        <NuxtLink
          class="w-full flex items-start text-white text-2xl py-4 cursor-pointer"
          to="/"
          @click="toggleSidebar()"
        >
          <div class="i-ph:house mx-auto"></div>
        </NuxtLink>
        <NuxtLink
          class="w-full flex items-start text-white text-2xl py-4 cursor-pointer"
          to="/requirements"
          @click="toggleSidebar()"
        >
          <div class="i-ph:pencil mx-auto"></div>
        </NuxtLink>
        <NuxtLink
          class="w-full flex items-start text-white text-2xl py-4 cursor-pointer"
          to="/faq"
          @click="toggleSidebar()"
        >
          <div class="i-ph:question mx-auto"></div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="w-screen max-h-screen overflow-y-scroll absolute inset-0"
      xl="overflow-hidden"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

interface PageState {
  isSidebarOpen: boolean
}

const state: PageState = reactive({
  isSidebarOpen: false,
})

const sidebar = ref<HTMLElement>()

onMounted(() => {
  if (sidebar.value) {
    sidebar.value.style.transform = 'translateX(-4rem)'
  }
})

function toggleSidebar() {
  if (sidebar.value) {
    state.isSidebarOpen = !state.isSidebarOpen
    sidebar.value.style.transform = state.isSidebarOpen
      ? 'translateX(0px)'
      : 'translateX(-4rem)'
  }
}
</script>

<style>
*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #211c1d;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

@media (min-width: 1280px) {
  *::-webkit-scrollbar {
    width: 12px;
  }
}
</style>
