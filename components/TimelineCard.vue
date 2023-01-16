<script setup lang="ts">
const props = defineProps<{
  event: TimelineEvent
}>()
</script>

<template>
  <div
    class="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white border border-white rounded md:flex-row md:space-y-0"
  >
    <div
      class="absolute z-10 flex items-center w-12 h-12 mt-2 transform bg-white rounded-full -left-10 -translate-x-2/4 md:mt-0"
    >
      <div :class="`i-${props.event.icon} mx-auto text-gray-800 h-8 w-8`"></div>
    </div>

    <div class="absolute z-0 w-10 h-1 bg-gray-200 -left-10"></div>

    <div class="flex-auto">
      <h1 class="text-xl text-[#fdca32] font-bold mb-2">
        {{ props.event.title }}
      </h1>
      <h1 v-if="props.event.date" class="mb-4 -mt-2 text-lg">
        {{ props.event.date }}
      </h1>
      <p v-if="props.event.description" class="mb-2">
        {{ props.event.description }}
      </p>
      <ul class="ml-4 list-disc">
        <li v-for="(step, i) in props.event.steps" :key="i">{{ step }}</li>
        <ul v-if="props.event.additionalSteps" class="ml-4 list-square">
          <li
            v-for="(additionalStep, j) in props.event.additionalSteps"
            :key="j"
          >
            {{ additionalStep }}
          </li>
        </ul>
      </ul>
      <div
        v-if="props.event.links"
        class="gap-4 mt-4"
        flex="~ col lg:row justify-center wrap"
      >
        <a
          v-for="(link, k) in props.event.links"
          :key="k"
          :href="link.url"
          target="_blank"
          border="~ white solid 2px"
          class="p-3 text-center text-white rounded-lg w-fit"
          hover="text-gray-800 bg-white"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>
