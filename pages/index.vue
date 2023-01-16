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

const members = [
  'abim',
  'anop',
  'dicky',
  'evan',
  'fahrio',
  'rahman',
  'rian',
  'alvaro',
  'ariq',
  'faiq',
  'fauzan',
  'irka',
  'muaz',
  'rasyid',
  'rihlan',
]
</script>

<template>
  <main
    class="max-h-screen overflow-y-scroll snap-y snap-mandatory bg-[#2b2526] text-white font-sans"
  >
    <!-- hero section -->
    <section id="hero" class="flex justify-center w-full h-screen snap-start">
      <div class="w-full h-full">
        <div
          id="banner"
          class="h-screen justify-center xl:mx-16 mx-8 leading-relaxed"
          flex="~ col"
          text="6xl center"
          font="extrabold"
        >
          <span>Open Recruitment</span>
          <span>Asisten Praktikum <span>2023</span></span>
          <div class="mt-16 w-full justify-center" flex="~">
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
      </div>
    </section>
    <!-- detail section -->
    <section
      id="details"
      class="flex flex-col items-center justify-center"
      xl="w-full h-screen snap-start"
    >
      <div class="w-full h-full px-8" flex="~ col xl:row" xl="px-16">
        <div class="w-full p-8 h-screen snap-start" xl="w-40% p-16 snap-none">
          <div class="mt-8">
            <h3 text="3rem" font="bold">
              <span text="[#fdca32]">What</span> you do
            </h3>
            <ul class="mt-8 list-disc ml-8" text="lg" font="light">
              <li>as facilitator, share your knowledge</li>
              <li>delivering the subject to students</li>
              <li>create, conduct, and examine assignments</li>
              <li>responsible for laboratory maintenance</li>
            </ul>
          </div>
          <div class="mt-16" xl="mt-24">
            <h3 text="3rem white" font="bold">
              <span text="[#fdca32]">Why</span> joining
            </h3>
            <ul class="mt-8 list-disc ml-8" text="lg" font="light">
              <li>gain valuable experience</li>
              <li>further develop and refine your skills</li>
              <li>gain confidence</li>
              <li>and many other benefits...</li>
            </ul>
          </div>
        </div>
        <div class="w-full p-8 snap-start h-screen" xl="w-60% p-16 snap-none">
          <h3 class="mt-4 leading-tight" text="4rem white" font="bold">
            Available
            <span class="text-[#fdca32]">Courses</span>
          </h3>
          <div
            class="mt-8 h-60% overflow-scroll"
            xl="mt-16 h-fit overflow-hidden"
            flex="~ row wrap"
          >
            <span
              v-for="course in courses"
              :key="course"
              class="bg-gray-300 px-4 py-2 mr-4 mt-4 h-fit rounded-full block cursor-pointer"
              text="black xl:lg base center"
              >{{ course }}</span
            >
          </div>
        </div>
      </div>
    </section>
    <!-- our family section -->
    <section
      id="our-family"
      class="items-start w-full h-screen snap-start pt-12"
      flex="~ col"
    >
      <div
        flex="~ xl:row col grow"
        class="max-h-[calc(100vh-6rem)] items-center h-fit"
      >
        <div
          class="w-fit flex flex-nowrap p-8 overflow-scroll"
          xl="w-40% ml-24 flex-wrap overflow-hidden max-h-80%"
        >
          <nuxt-img
            v-for="member in members"
            :key="member"
            class="h-24 w-24 rounded-full mr-4 mt-4"
            xl="h-28 w-28 "
            fit="contain"
            :src="`/images/${member}.webp`"
          />
        </div>
        <div
          class="w-fit p-4 justify-center ml-6"
          flex="~ col"
          xl="w-40% ml-24"
        >
          <span text="xl:7xl 5xl [#fdca32]" font="bold">Our Family</span>
          <p text="xl:2xl xl" class="leading-loose mt-4">
            Register now to be a part of our big family. <br />
            Gain all the benefits and valuable experience in your life! <br />
            - Laboratory Assistant 2021
          </p>
          <NuxtLink to="/requirements">
            <button
              class="w-fit px-4 py-2 rounded-lg xl:mt-12 mt-6"
              border="~ solid 2px"
              text="white xl xl:2xl"
              font="bold"
            >
              Register now
            </button>
          </NuxtLink>
        </div>
      </div>
      <Footer />
    </section>
  </main>
</template>
