<template>
  <div class="bg-gray-50 text-gray-800 pt-10">

    <!-- Hero /  Banner -->
    <section
      class="text-white py-20 text-center bg-cover bg-center"
      style="background-image: url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDQtNDVfMS5qcGc.jpg');"
    >
      <div class="container mx-auto px-6  bg-opacity-50 p-6 rounded-lg">
          <h1 class="neon-text text-4xl md:text-5xl font-bold mb-4">
            Welcome to Akemi’s Personal Website
          </h1>
        <p class="text-lg md:text-xl mb-6">Sharing my journey in web development, creativity, and life 🚀</p>
        <NuxtLink
          to="/quotes"
          class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Random quote →
        </NuxtLink>
      </div>
    </section>


    <!-- About Me (short) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-10">
        <img :src="isme" alt="Akemi" 
        class="w-48   object-cover shadow-md border border-blue-300 mb-6 md:mb-0"        />
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
    <!-- quotes -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8 text-center text-blue-600">Quotes </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-bold text-2xl mb-2 italic">“I don’t have to be perfect. I just have to try.”</h3>
            <p class="text-gray-600  text-xs">This quote reminds I (and others) that the effort matters more than perfection. Every time I try — even if I make mistakes — I'm already growing. It encourages I to keep going gently and bravely.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 class="font-bold text-2xl mb-2 italic">“Respect is earned through kindness, not fear.”</h3>
            <p class="text-gray-600  text-xs italic">I always show kindness — to my friends, my teachers, my juniors. This quote reflects how I give and receive respect: not by being strict or loud, but by being humble, honest, and caring. It reminds us that true respect comes from the heart, not power.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition md:col-span-2 md:max-w-xl md:mx-auto">
            <h3 class="font-bold text-2xl mb-2 italic">“I'm soft, but I'm strong. Quiet, but I has a voice. I'm kind, but I has boundaries. I don't need to be loud to be powerful.”</h3>
          </div>
        </div>
        <div class="text-center mt-6">
          <NuxtLink to="/quotes" class="text-blue-600 hover:underline font-semibold">Random Quote →</NuxtLink>
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
    class="py-16  text-white text-center bg-blue-50 px-20">
    <div class=" text-center bg-white rounded-lg shadow-md  px-10 py-20">
      <h2 class="text-3xl font-bold mb-8 text-blue-600">Connect with me on</h2>
      <div class="flex justify-center space-x-6 text-blue-600 text-3xl">
    <a href="#" target="_blank" aria-label="TikTok" class="hover:text-blue-800 transition">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.75 2h2.52c.1 1.05.56 2.03 1.27 2.8.7.78 1.66 1.28 2.71 1.41v2.5a6.5 6.5 0 01-3.23-.87v6.46a5.25 5.25 0 11-5.25-5.25h.25v2.5h-.25a2.75 2.75 0 102.75 2.75V2z"/>
      </svg>
    </a>
        <!-- Facebook -->
    <a href="#" target="_blank" aria-label="Facebook" class="hover:text-blue-800 transition">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.84 7.94 9.8v-6.92h-2.4v-2.88h2.4V9.6c0-2.38 1.43-3.68 3.56-3.68 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.6l-.42 2.88h-2.18v6.92C18.56 20.84 22 16.84 22 12z"/>
      </svg>
    </a>
        <!-- Instagram -->
    <a href="#" target="_blank" aria-label="Instagram" class="hover:text-blue-800 transition">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2C5.68 2 4 3.68 4 5.75v12.5C4 20.32 5.68 22 7.75 22h8.5C18.32 22 20 20.32 20 18.25V5.75C20 3.68 18.32 2 16.25 2h-8.5zm0 2h8.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25V5.25C6.5 4.56 7.06 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    </a>
        <!-- Telegram -->
    <a href="#" target="_blank" aria-label="Telegram" class="hover:text-blue-800 transition">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.033 16.814l-.378 4.937c.543 0 .778-.233 1.06-.512l2.547-2.43 5.285 3.873c.97.537 1.665.254 1.925-.901l3.488-16.324c.309-1.43-.547-1.992-1.45-1.647L1.98 9.388c-1.417.558-1.395 1.362-.24 1.718l4.638 1.45 10.758-6.77c.507-.31.97-.138.59.173L9.033 16.814z"/>
      </svg>
    </a>
        <!-- LinkedIn -->
    <a href="#" target="_blank" aria-label="LinkedIn" class="hover:text-blue-800 transition">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 11.01 5.001A2.5 2.5 0 014.98 3.5zM2 9h6v12H2zM9 9h5.5v1.8h.08a6.04 6.04 0 015.42-3c5.8 0 6.9 3.8 6.9 8.7V21h-6v-7c0-1.7-.03-3.9-2.5-3.9-2.5 0-2.9 1.9-2.9 3.8V21H9z"/>
      </svg>
    </a>
      </div>
    </div>
    </section>

  </div>
</template>
<script setup>
  const isme = "/isMe.png";
</script>
<style>
.neon-text {
  color: #fff;
  text-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 40px #0ff,
    0 0 80px #0ff;
  animation: neon-flow 2s ease-in-out infinite alternate;
}

@keyframes neon-flow {
  0% {
    text-shadow:
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff,
      0 0 80px #0ff;
  }
  100% {
    text-shadow:
      0 0 10px #f0f,
      0 0 20px #f0f,
      0 0 40px #f0f,
      0 0 80px #f0f,
      0 0 160px #f0f;
  }
}
</style>
