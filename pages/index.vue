<script setup lang="ts">
useHead({
  title: 'Home',
})

function scrollTo(id: string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
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

const members = ['Rizky', 'Fakhri', 'Sultan', 'Panji', 'Tegar', 'Rumi']
</script>

<template>
  <main
    class="max-h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-[#2b2526] text-white font-sans"
  >
    <!-- hero section -->
    <section
      id="hero"
      class="flex justify-center w-full h-screen snap-start"
      bg="[url(/bg/home-narrow.png)] cover xl:[url(/bg/home-wide.png)]"
    >
      <div class="w-full h-full">
        <div
          id="banner"
          class="justify-center h-screen mx-8 leading-tight xl:mx-16 xl:leading-relaxed"
          flex="~ col"
          text="xl:6xl 3xl center"
          font="extrabold"
        >
          <span class="text-[#fdca32]">Open Recruitment</span>
          <span>Asisten Praktikum <span>2025</span></span>
          <div class="justify-center w-full mt-16" flex="~">
            <button
              class="block rounded-full"
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
      class="flex flex-col items-center justify-center bg-none md:bg-[url(/bg/home-alt-wide.png)] bg-cover"
      xl="w-full h-screen snap-start "
    >
      <div class="w-full h-full px-8" flex="~ col md:row" xl="px-16">
        <div
          class="w-full p-8 h-screen snap-start bg-[url(/bg/home-alt-narrow.png)] bg-cover md:bg-none justify-center"
          flex="~ col"
          xl="w-40% p-16 snap-none"
        >
          <div class="mt-8">
            <h3 text="4xl" font="bold">
              <span text="[#fdca32]">What</span> you do =?
            </h3>
            <ul class="mt-8 ml-8 list-disc" text="lg" font="light">
              <li>As facilitator, share your knowledge</li>
              <li>Delivering the subject to students</li>
              <li>Create, conduct, and examine assignments</li>
              <li>Responsible for laboratory maintenance</li>
            </ul>
          </div>
          <div class="mt-8" xl="mt-24">
            <h3 text="4xl" font="bold">
              <span text="[#fdca32]">Why</span> joining?
            </h3>
            <ul class="mt-8 ml-8 list-disc" text="lg" font="light">
              <li>Gain valuable experience</li>
              <li>Further develop and refine your skills</li>
              <li>Gain confidence</li>
              <li>And many other benefits...</li>
            </ul>
          </div>
        </div>
        <div
          class="w-full p-8 snap-start h-screen bg-[url(/bg/home-alt-narrow.png)] bg-cover md:bg-none justify-center"
          flex="~ col"
          xl="w-60% p-16 snap-none"
        >
          <h3 class="mt-4 leading-tight" text="5xl white" font="bold">
            Available
            <span class="text-[#fdca32]">Courses</span>
          </h3>
          <div
            class="mt-8 h-60% overflow-auto"
            xl="mt-16 h-fit overflow-hidden"
            flex="~ row wrap"
          >
            <span
              v-for="(course, i) in courses"
              :key="i"
              class="block px-4 py-2 mt-4 mr-4 bg-gray-300 rounded-full cursor-pointer min-w-fit h-fit shrink-0"
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
      class="items-start w-full h-screen pt-12 snap-start"
      flex="~ col"
      bg="[url(/bg/home-narrow.png)] cover xl:[url(/bg/home-wide.png)]"
    >
      <div
        flex="~ xl:row col grow"
        class="maxmax-h-[calc(100vh-6rem)] h-fit xl:items-center justify-center"
      >
        <div
          class="flex w-screen p-6 overflow-scroll flex-nowrap"
          xl="w-40% ml-24 flex-wrap overflow-hidden max-h-80%"
        >
          <nuxt-img
            v-for="(member, i) in members"
            :key="i"
            class="w-24 h-24 mt-4 mr-4 rounded-full"
            fit="contain"
            :src="`/images/${member}.webp`"
          />
        </div>
        <div
          class="justify-center p-4 ml-6 w-fit"
          flex="~ col"
          xl="w-40% ml-24"
        >
          <span text="xl:7xl 5xl [#fdca32]" font="bold">Our Family</span>
          <p text="xl:2xl xl" class="mt-4 leading-loose">
            Register now to be a part of our big family. <br />
            Gain all the benefits and valuable experience in your life! <br />
            - Laboratory Assistant 2025
          </p>
          <NuxtLink to="/requirements">
            <button
              class="px-4 py-2 mt-6 rounded-lg w-fit xl:mt-12"
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
