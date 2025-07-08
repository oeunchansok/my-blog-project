<template>
  <div class="bg-gray-50 text-gray-800 pt-10">

    <!-- Hero /  Banner -->
    <section
      class="text-white py-20 text-center bg-cover bg-center"
      style="background-image: url('https://imgs.search.brave.com/KXxwwz7U3lW-JkGkaSHhZ9BqWCUepvpM1lYQpXvj3K8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzcyLzE5LzM5/LzM2MF9GXzQ3MjE5/Mzk1NV9jbHF5SkZB/b0JSMWFKZXJwTUQ5/NmNlODRqaENjWFps/dS5qcGc');"
    >
      <div class="container mx-auto px-6  bg-opacity-50 p-6 rounded-lg">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Akemi’s Personal Website</h1>
        <p class="text-lg md:text-xl mb-6">Sharing my journey in web development, creativity, and life 🚀</p>
        <NuxtLink
          to="/projects"
          class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          See My Projects
        </NuxtLink>
      </div>
    </section>


    <!-- About Me (short) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-10">
        <img src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn" alt="Akemi" class="w-48 h-48 rounded-full object-cover shadow-md border-4 border-blue-300 mb-6 md:mb-0" />
        <div>
          <h2 class="text-3xl font-bold mb-3 text-blue-600">About Me</h2>
          <p class="text-lg text-gray-700">
            I’m Akemi, a web developer from Cambodia 🇰🇭. I love creating websites using Nuxt, Vue, and Tailwind. I enjoy learning, sharing, and building beautiful things on the web.
          </p>
          <NuxtLink to="/about" class="inline-block mt-4 text-blue-600 hover:underline font-semibold">Learn more →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills / What I Do -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8 text-blue-600">What I Do</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl mb-2">Web Development</h3>
            <p class="text-gray-600">Building modern, responsive websites with Nuxt, Vue, and Tailwind.</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl mb-2">UI/UX Design</h3>
            <p class="text-gray-600">Designing user-friendly, clean interfaces for a great experience.</p>
          </div>
          <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-xl mb-2">Content Writing</h3>
            <p class="text-gray-600">Sharing coding tips, tutorials, and personal stories on my blog.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-center text-blue-600">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-semibold text-xl mb-2">My Portfolio Website</h3>
            <p class="text-gray-600">A personal website built with Nuxt 3 and Tailwind CSS to showcase my work.</p>
          </div>
          <div class="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-semibold text-xl mb-2">Simple Blog</h3>
            <p class="text-gray-600">A minimalist blog platform for sharing articles and tutorials.</p>
          </div>
        </div>
        <div class="text-center mt-6">
          <NuxtLink to="/projects" class="text-blue-600 hover:underline font-semibold">See all projects →</NuxtLink>
        </div>
      </div>
    </section>
    <!-- Blog -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8 text-center text-blue-600">Quotes </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-bold text-2xl mb-2">“I don’t have to be perfect. I just have to try.”</h3>
            <p class="text-gray-600  text-xs">This quote reminds I (and others) that the effort matters more than perfection. Every time I try — even if I make mistakes — I'm already growing. It encourages I to keep going gently and bravely.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-bold text-2xl mb-2">“Respect is earned through kindness, not fear.”</h3>
            <p class="text-gray-600  text-xs">I always show kindness — to my friends, my teachers, my juniors. This quote reflects how I give and receive respect: not by being strict or loud, but by being humble, honest, and caring. It reminds us that true respect comes from the heart, not power.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition md:col-span-2 md:max-w-xl md:mx-auto">
            <h3 class="font-bold text-2xl mb-2">“I'm soft, but I'm strong. Quiet, but I has a voice. I'm kind, but I has boundaries. I don't need to be loud to be powerful.”</h3>
          </div>
        </div>
      </div>
    </section>


    <!-- Gallery -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-center text-blue-600 ">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn" alt="Nature" class="rounded-lg shadow object-cover w-full h-48" />
          <img src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn" alt="Sunset" class="rounded-lg shadow object-cover w-full h-48" />
          <img src="https://imgs.search.brave.com/C6eWMXY3QclLfV2TSJTB588usWmIHSMrse8kbP1uXKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MjExOTg4L3Iv/aWwvNjM3NmQ1LzE5/MDQzMTI2NTYvaWxf/NjAweDYwMC4xOTA0/MzEyNjU2X3JuYnEu/anBn" alt="Coding Setup" class="rounded-lg shadow object-cover w-full h-48" />
        </div>
        <div class="text-center mt-6">
          <NuxtLink to="/gallery" class="text-blue-600 hover:underline font-semibold">View full gallery →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section 
    style="background: linear-gradient(135deg, #005cf1, #06fa58e6);"
    class="py-16  text-white text-center bg-blue-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p class="text-lg mb-6">Have a question or want to work together? Feel free to reach out!</p>
        <NuxtLink to="/contact" class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">Contact Me</NuxtLink>
      </div>
    </section>

  </div>
</template>
