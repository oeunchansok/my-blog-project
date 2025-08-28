<template>
    <section
      class="text-white py-20 text-center bg-cover bg-center"
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
</template>

<script setup>
import { ref } from 'vue';

const particlesOptions = ref({
  fullScreen: {
    enable: false
  },
  background: {
    color: {
      value: 'transparent'
    }
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    opacity: {
      value: 0.15
    },
    size: {
      value: 1.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'none',
      outModes: {
        default: 'out'
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false
      }
    }
  }
});
</script>

<style scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
