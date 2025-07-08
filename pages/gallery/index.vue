<template>
  <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">Gallery</h1>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      A collection of my favorite photos — nature, sunsets, and my creative workspace.
    </p>

    <!-- Image Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold"
        >
          {{ image.title }}
        </div>
      </div>
    </div>

    <!-- View More -->
    <div class="text-center mt-12">
      <NuxtLink
        to="/gallery"
        class="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
      >
        View Full Gallery
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const images = [
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Lush green forest',
    title: 'Lush Forest',
  },
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Orange sunset sky',
    title: 'Sunset Sky',
  },
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Workspace with laptop and coffee',
    title: 'My Workspace',
  },
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Mountain peaks',
    title: 'Mountain Peaks',
  },
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Flowing river in forest',
    title: 'Flowing River',
  },
  {
    src: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    alt: 'Starry night sky',
    title: 'Starry Night',
  },
]
</script>
