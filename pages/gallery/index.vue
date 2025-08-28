<template>
  <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">Gallery</h1>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      A collection of my favorite photos — nature, sunsets, and my creative workspace.
    </p>

    <!-- Image Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="(image, index) in someMoment"
        :key="index"
        class="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative"
      >
        <img
          :src="image.src"
          class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>

    <!-- View More -->
    <!-- <div class="text-center mt-12">
      <NuxtLink
        to="/gallery"
        class="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
      >
        View Full Gallery
      </NuxtLink>
    </div> -->
  </section>
</template>

<script setup>
const someMoment = [
  { src : " /drawing.png"},
  { src : " /family.png"},
  { src : " /moon.png"},
  { src : " /music.png"},
  { src : " /rain.png"},
  { src : " /silence.png"},
  { src : " /sunrise.png"},
  { src : " /walk.png"},
  { src : " /write.png"},
]
</script>
