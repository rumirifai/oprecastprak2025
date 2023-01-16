<script setup lang="ts">
const props = defineProps<{
  event: TimelineEvent
}>()
</script>

<template>
  <div
    class="ml-10 relative flex items-center px-6 py-4 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0 border border-white"
  >
    <div
      class="w-12 h-12 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0 items-center flex"
    >
      <div :class="`i-${props.event.icon} mx-auto text-gray-800 h-8 w-8`"></div>
    </div>

    <div class="w-10 h-1 bg-gray-200 absolute -left-10 z-0"></div>

    <div class="flex-auto">
      <h1 class="text-xl text-[#fdca32] font-bold mb-2">
        {{ props.event.title }}
      </h1>
      <h1 v-if="props.event.date" class="text-lg -mt-2 mb-4">
        {{ props.event.date }}
      </h1>
      <p v-if="props.event.description" class="mb-2">
        {{ props.event.description }}
      </p>
      <ul class="list-disc ml-4">
        <li v-for="(step, i) in props.event.steps" :key="i">{{ step }}</li>
        <ul v-if="props.event.additionalSteps" class="list-square ml-4">
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
        class="mt-4 gap-4"
        flex="~ col lg:row justify-center"
      >
        <a
          v-if="props.event.links[0]"
          :href="props.event.links[0]"
          target="_blank"
          border="~ white solid 2px"
          class="w-fit p-3 rounded-lg text-center text-white"
          hover="text-gray-800 bg-white"
        >
          Download Questions
        </a>
        <a
          v-if="props.event.links[1]"
          :href="props.event.links[1]"
          target="_blank"
          border="~ white solid 2px"
          class="w-fit p-3 rounded-lg text-center text-white"
          hover="text-gray-800 bg-white"
        >
          Upload Answer
        </a>
      </div>
    </div>
  </div>
</template>
