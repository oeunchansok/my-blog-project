<template>
  <section class="bg-gradient-to-b from-blue-50 to-white py-16">
    <div class="container mx-auto px-6 max-w-6xl space-y-14">

      <!-- Header -->
      <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">About Me</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Get to know me better — my habits, what I love, and how I spend my free time.
        </p>
      </div>

      <!-- Profile & Intro -->
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-6 md:space-y-0 bg-white rounded-2xl shadow-lg p-8">
        <img
          src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn"
          alt="akime Profile"
          class="w-64 h-64 rounded-full object-cover border-4 border-blue-300 shadow-md"
        />
        <div class="space-y-4">
          <p class="text-lg text-gray-700 leading-relaxed">
            Hi! I’m <span class="font-bold text-blue-600">Akime</span> — a web developer and tech lover from Cambodia 🇰🇭.
            I enjoy coding, exploring nature, and sharing what I learn. This blog reflects my journey, my thoughts, and my creative side.
          </p>
          <p class="text-lg text-gray-700">
            I value simplicity, kindness, and continuous growth 🌱.
          </p>
        </div>
      </div>

      <!-- My Habits -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">My Habits</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Write in my journal every morning and night 📝</li>
          <li>Take quiet evening walks 🌙</li>
          <li>Read or watch something educational daily 📚</li>
        </ul>
      </div>

      <!-- Free Time -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">What I Do in My Free Time</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Write blog posts about coding and life</li>
          <li>Explore and take photos of nature and sunsets 🌅</li>
          <li>Listen to calming instrumental music 🎶</li>
          <li>Watch inspiring movies or anime</li>
        </ul>
      </div>

      <!-- Likes -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">What I Like</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          I love the color <span class="font-bold text-blue-500">blue</span>, quiet nights under the stars 🌌, full moons 🌕, and peaceful places that help me think and create.
        </p>
      </div>

      <!-- Picture Gallery -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Some Moments I Love</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn"
            alt="Nature"
            class="rounded-xl shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
          <img
            src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn"
            alt="Sunset"
            class="rounded-xl shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
          <img
            src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn"
            alt="Coding Setup"
            class="rounded-xl shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
/* Optional: if you want smoother shadow on hover */
/* img:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.2); } */
</style>
