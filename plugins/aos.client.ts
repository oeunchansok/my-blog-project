import { defineNuxtPlugin } from '#app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
    })
  }
})
