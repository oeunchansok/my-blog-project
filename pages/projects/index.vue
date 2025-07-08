<template>
  <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">Projects</h1>
    <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Here are some of my favorite projects, showcasing my skills and creativity.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">{{ project.title }}</h2>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in project.technologies"
              :key="index"
              class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-4">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-blue-600 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with Nuxt 3 and Tailwind CSS to showcase my skills and projects.',
    image: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    technologies: ['Nuxt 3', 'Tailwind CSS', 'Vue 3'],
    link: 'https://github.com/your-github/portfolio',
  },
  {
    title: 'Simple Blog',
    description:
      'A minimalistic blog platform with markdown support and SEO optimization.',
    image: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    technologies: ['Nuxt 3', 'Markdown', 'SEO'],
    link: 'https://github.com/your-github/simple-blog',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app to help organize daily tasks with a clean UI and intuitive features.',
    image: 'https://img.freepik.com/free-vector/illustrated-about-me-concept_52683-59123.jpg',
    technologies: ['Vue 3', 'Pinia', 'Firebase'],
    link: 'https://github.com/your-github/task-manager',
  },
]
</script>
