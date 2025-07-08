<template>
  <section class="max-w-3xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md pt-20">
    <h1 class="text-4xl font-bold mb-6 text-center text-blue-700">Contact Me</h1>

    <p class="text-center text-gray-700 mb-10">
      Whether you have questions, want to collaborate, or just want to say hello, feel free to reach out!
    </p>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label for="name" class="block mb-2 font-semibold text-gray-800">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Your full name"
          required
          class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block mb-2 font-semibold text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="your.email@example.com"
          required
          class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block mb-2 font-semibold text-gray-800">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Write your message here..."
          required
          rows="5"
          class="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>

    <!-- Confirmation Message -->
    <p
      v-if="submitted"
      class="mt-6 text-center text-green-600 font-semibold"
    >
      Thanks for reaching out! I will get back to you soon.
    </p>

    <!-- Social Links -->
    <div class="mt-16 text-center border-t pt-10">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Or connect with me on</h2>
      <div class="flex justify-center space-x-6 text-blue-600 text-3xl">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="hover:text-blue-800 transition"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.029-2.678-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.698 1.028 1.588 1.028 2.678 0 3.842-2.337 4.687-4.565 4.935.36.31.68.923.68 1.86 0 1.342-.012 2.423-.012 2.754 0 .268.18.58.688.481A10.014 10.014 0 0022 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          class="hover:text-blue-800 transition"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.11 9.11 0 01-2.88 1.1A4.52 4.52 0 0016.67 2c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.11 1.03-3.76-.2-7.1-2-9.33-4.73-.4.7-.63 1.52-.63 2.4 0 1.66.85 3.13 2.15 4-.8 0-1.54-.25-2.2-.63v.06c0 2.32 1.65 4.25 3.83 4.7-.4.1-.83.15-1.28.15-.31 0-.62-.03-.91-.09a4.48 4.48 0 004.2 3.14 9 9 0 01-5.6 1.93c-.37 0-.73-.02-1.1-.06A12.7 12.7 0 0011 20c7.54 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.3 8.3 0 0023 3z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function submitForm() {
  // Simple validation can be enhanced or replaced with real API calls
  if (!form.name || !form.email || !form.message) return alert('Please fill all fields.')

  // Simulate form submission
  submitted.value = true

  // Reset form fields
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
