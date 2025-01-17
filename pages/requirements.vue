<script setup lang="ts">
useHead({
  title: 'Requirements',
})

const events: TimelineEvent[] = [
  {
    icon: 'ph:files',
    title: 'Make sure you fit the requirements.',
    steps: [
      'Active Student of Teknik Informatika Universitas Padjadjaran and currently in third year (2021) or second year (2022).',
      'Minimum GPA 3.00.',
      'Have minimum grade B for the subject you wanted.',
    ],
  },
  {
    icon: 'ph:newspaper-clipping',
    title: 'Registration & Pre-screening Assessment.',
    date: '17 January 2025 - 22 January 2025',
    steps: [
      'Register yourself by filling the form.',
      'Upload the requirement files (CV, Cover Letter) in .pdf files.',
      'Upload your Academic Transcript from students.unpad.ac.id',
      'Submit Instagram URL/ link for your short introduction video. The rules of the video are :',
    ],
    additionalSteps: [
      'Make sure your face is shown and your voice can be heard clearly',
      'Introduce yourself',
      'Tell the reason why you want to be part of us',
      'Make it as creative as possible',
      'Use hashtag #oprectasprak2025',
      'Make sure your Instagram account is not private',
    ],
  },
  {
    icon: 'ph:laptop',
    title: 'Online Assessment.',
    date: '23 January 2025',
    steps: [
      'This test is intended to assess the technical skills relevant to the subject(s) you have chosen.',
      'You will be given a chance to answer some questions in 5 hours ( From 01.00 PM to 06.00 PM ).',
      'File format for the submission is NPM.pdf',
      'Test questions will be given at 01.00 PM and submission link will be closed at 06.00 PM.',
      'After going through 2 stages of registration with various assessments, qualified applicants will be invited to Line multichat and proceed to the final assessment.',
    ],
    links: [],
  },
  {
    icon: 'ph:user',
    title: 'On-the-ground Assessment.',
    date: '27 January 2025 - 29 January 2025',
    steps: ['Lecture Simulation.', 'Face-to-face Interview.', 'Coding test.'],
    description:
      'This is a follow-up assessment to complete your application process. You will be tested based on your skills and knowledge in programming and communication skills.',
  },
  {
    icon: 'ph:speaker-high',
    date: '2 February 2025',
    title: 'Results Announcement.',
    steps: [
      "Selected applicants will be announced on Laboratory Assistant Line Official Account's posts feed.",
    ],
  },
]

const contacts = [
  'Rizky Ramadhan Sudjarmono (Line ID : rizky09oktober2004)',
  'Muhamad Rumi Rifai (Line ID : rifaikikifaqih)',
]
</script>

<template>
  <main class="overflow-x-hidden">
    <div class="w-screen bg-[#2b2526] h-fit" xl="h-screen" flex="~ col wrap">
      <div
        class="w-full mt-8 grow"
        flex="~ col xl:row"
        bg="[url(/bg/timeline-narrow.png)] cover xl:[url(/bg/timeline-wide.png)]"
      >
        <div class="justify-center w-full p-12" xl="w-40% p-20" flex="~ col">
          <span
            class="leading-tight"
            text="2rem lg:4rem [#fdca32]"
            font="sans bold"
            >Timeline &<br />
            Requirements</span
          >
          <span text="1rem white">
            Want to take part in Lab Assistant 2025 selection? <br />There are
            some things that you must prepare beforehand. <br />
            See the timeline for more information.
          </span>

          <a class="cursor-pointer" href="" target="_blank">
            <button
              class="bg-[#fdca32] text-black px-4 py-2 mt-4 rounded-lg"
              hover="bg-[#F2B602]"
              hidden
            >
              Register Now
            </button>
          </a>

          <div class="w-full mt-12 mb-4 border border-white"></div>

          <div class="flex flex-col">
            <span class="text-[#fdca32] text-lg font-bold"
              >Further Questions?</span
            >
            <span text="1rem white">
              Please check our
              <NuxtLink to="/faq">
                <span
                  class="underline cursor-pointer"
                  text="white 1rem"
                  font="sans bold"
                >
                  FAQ
                </span>
              </NuxtLink>
              page first <br />or drop your questions to :<br />
            </span>
            <ul class="mt-1 ml-6 text-white list-disc">
              <li>{{ contacts[0] }}</li>
              <li>{{ contacts[1] }}</li>
            </ul>
          </div>
        </div>
        <div
          class="relative w-full p-12"
          xl="w-60% overflow-y-scroll max-h-[calc(100vh-6rem)] p-16"
        >
          <div class="border-l-2">
            <TimelineCard
              v-for="(event, i) in events"
              :key="i"
              :event="event"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<style scoped>
main {
  --bg-image: url('/bg/timeline-narrow.png');
}

@media (min-width: 1280px) {
  main {
    --bg-image: url('/bg/timeline-wide.png');
  }
}
</style>
