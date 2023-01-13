<script setup lang="ts">
useHead({
  title: 'Home',
})

function scrollTo(id: string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'auto' })
}

const courses = [
  'Algorithms and Programming',
  'Analysis of Algorithms',
  'Computer Architecture and Organization',
  'Artificial Intelligence',
  'Computer Networking',
  'Computer Graphics',
  'Cryptography',
  'Data Structures',
  'Database System I',
  'Database System II',
  'Numerical Methods',
  'Object-Oriented Programming',
  'Robotics',
  'Software Engineering',
  'Web Programming',
]
</script>

<template>
  <main
    class="max-h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-800 text-white font-sans"
  >
    <!-- hero section -->
    <section
      id="hero"
      class="flex justify-center w-full h-screen snap-start bg-gradient-radial from-gray-600 to-gray-800"
    >
      <div class="w-full h-full">
        <div
          id="banner"
          class="h-90vh justify-center lg:mx-16 mx-8"
          flex="~ col"
          text="lg:6rem lg:4rem 2rem center"
          font="extrabold"
        >
          <span text="teal-400">Open Recruitment</span>
          <span>Asisten Praktikum <span>2023</span></span>
        </div>
        <div class="w-full justify-center lg:visible invisible" flex="~">
          <button
            class="rounded-full block"
            border="none"
            @click="scrollTo('details')"
          >
            <div
              text="4rem"
              class="i-ph:arrow-fat-line-down-duotone animate-bounce"
            ></div>
          </button>
        </div>
      </div>
    </section>
    <!-- detail section -->
    <section
      id="details"
      class="flex flex-col items-center justify-center bg-gray-700"
      lg="w-full h-screen snap-start"
    >
      <div class="w-full h-full px-8" flex="~ col lg:row" lg="px-16">
        <div class="w-full p-8 h-screen snap-start" lg="w-40% p-16 snap-none">
          <div class="mt-8">
            <h3 text="1.5rem lg:3rem" font="bold">
              <span text="teal-300">What</span> you do
            </h3>
            <ul class="mt-8 list-disc ml-8" text="1rem lg:1.5rem" font="light">
              <li>as facilitator, share your knowledge</li>
              <li>delivering the subject to students</li>
              <li>create, conduct, and examine assignments</li>
              <li>responsible for laboratory maintenance</li>
            </ul>
          </div>
          <div class="mt-16" lg="mt-24">
            <h3 text="1.5rem lg:3rem white" font="bold">
              <span text="teal-200">Why</span> joining
            </h3>
            <ul class="mt-8 list-disc ml-8" text="1rem lg:1.5rem" font="light">
              <li>gain valuable experience</li>
              <li>further develop and refine your skills</li>
              <li>gain confidence</li>
              <li>and many other benefits...</li>
            </ul>
          </div>
        </div>
        <div
          class="w-full p-8 snap-start h-screen bg-gray-600"
          lg="w-60% p-16 snap-none"
        >
          <h3 class="mt-4" text="1.5rem lg:4rem white" font="bold">
            Available Courses
          </h3>
          <div
            class="mt-8 h-60% overflow-scroll"
            md="mt-16 h-fit overflow-hidden"
            flex="~ row wrap"
          >
            <span
              v-for="course in courses"
              :key="course"
              class="bg-gray-300 px-4 py-2 mr-4 mt-4 h-fit rounded-full block cursor-pointer"
              text="black lg:lg base center"
              >{{ course }}</span
            >
          </div>
        </div>
      </div>
    </section>
    <!-- our family section -->
    <section
      id="our-family"
      class="flex items-center justify-center w-full h-screen snap-start bg-gray-500"
    >
      <div class="w-full h-full justify-center ml-24" flex="~ col">
        <span text="2rem lg:4rem white" font="bold">Our Family</span>
        <NuxtLink to="/requirements">
          <button
            class="w-96 py-2 rounded-lg"
            border="~ solid 2px"
            text="white 2rem"
            font="bold"
          >
            Register now
          </button>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
