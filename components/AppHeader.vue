<template>
  <header class="bg-white shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
         <NuxtLink to="/">
           <div class="flex-shrink-0 text-xl font-bold text-blue-600">
             AkemiSite
           </div>

         </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-600">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600">About Me</NuxtLink>
          <NuxtLink to="/projects" class="text-gray-700 hover:text-blue-600">Projects</NuxtLink>
          <NuxtLink to="/gallery" class="text-gray-700 hover:text-blue-600">Gallery</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600">Contact</NuxtLink>
        </nav>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button @click="menuOpen = !menuOpen" class="text-gray-700 focus:outline-none">
            <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-3 space-y-2">
        <NuxtLink to="/" class="block text-gray-700 hover:text-blue-600">Home</NuxtLink>
        <NuxtLink to="/about" class="block text-gray-700 hover:text-blue-600">About Me</NuxtLink>
        <NuxtLink to="/projects" class="block text-gray-700 hover:text-blue-600">Projects</NuxtLink>
        <NuxtLink to="/gallery" class="block text-gray-700 hover:text-blue-600">Gallery</NuxtLink>
        <NuxtLink to="/contact" class="block text-gray-700 hover:text-blue-600">Contact</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
