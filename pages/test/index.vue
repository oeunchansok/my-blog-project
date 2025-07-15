<template>
      <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">Quotes</h1>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      A collection of my favorite photos — nature, sunsets, and my creative workspace.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(q, index) in quotes"
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition hover:shadow-lg"
      >
        <p class="text-lg text-gray-700 dark:text-gray-200 italic mb-4">“{{ q.text }}”</p>
        <div class="text-right">
          <p class="text-sm text-gray-400">#{{ q.category }}</p>
        </div>
      </div>
    </div>

      </section>
</template>

<script setup>
const quotes = [
  {
    text: 'Start again — not because you failed, but because you’ve grown.',
    category: 'Success',
  },
  {
    text: 'You are closer than you think — not to the goal, but to your real self.',
    category: 'Growth',
  },
  {
    text: 'Trust your direction, even if you don’t know the full map yet.',
    category: 'Belief',
  },
  {
    text: 'When you act with care, even small things become meaningful.',
    category: 'Action',
  },
  {
    text: 'Let your heart guide your hands — that’s where real strength begins.',
    category: 'Action',
  },
  {
    text: 'No one sees the inner work, but it still transforms you.',
    category: 'Growth',
  },
  {
    text: 'When you feel unsure, that’s not a stop — it’s a sign to take your next step slowly.',
    category: 'Belief',
  },
  {
    text: 'Every attempt adds another piece to the person you are becoming.',
    category: 'Growth',
  },
  {
    text: 'There is no failure in trying. Only progress in motion.',
    category: 'Belief',
  },
  {
    text: 'You don’t have to be confident. Just be honest and keep going.',
    category: 'Belief',
  },
  {
    text: 'Let your quiet effort speak louder than your doubt.',
    category: 'Success',
  },
  {
    text: 'You grow each time you say, ‘I’ll try again.',
    category: 'Growth',
  },
  {
    text: 'Sometimes the strongest thing you can do is keep trying gently.',
    category: 'Belief',
  },
  {
    text: 'The person you’re becoming is already inside you — keep uncovering her.',
    category: 'Growth',
  },
  {
    text: 'You don’t need to know everything. You just need to begin with what you know now.',
    category: 'Action',
  },
  {
    text: 'Keep choosing your path — even if others don’t understand it yet.',
    category: 'Belief',
  },
  {
    text: 'The more you listen to your heart, the more you find who you are.',
    category: 'Belief',
  },
  {
    text: 'Nothing is wasted if you learned something.',
    category: 'Success',
  },
  {
    text: 'Even when you don’t feel ready, your effort still matters.',
    category: 'Action',
  },
  {
    text: 'What you build quietly today may be the light someone needs tomorrow.',
    category: 'Dream',
  },
  {
    text: 'Even on the hardest days, showing up means you’re already doing something brave.',
    category: 'Success',
  },
  {
    text: 'You don’t have to rush. Just don’t stop.',
    category: 'Belief',
  },
  {
    text: 'Each time you keep going, you become someone stronger than before.',
    category: 'Growth',
  },
  {
    text: 'Some things bloom slowly. That doesn’t make them any less beautiful.',
    category: 'Growth',
  },
  {
    text: 'When your heart says yes, don’t wait for perfect timing — begin.',
    category: 'Action',
  },
  {
    text: 'There’s power in simply not giving up.',
    category: 'Belief',
  },
  {
    text: 'Even small efforts create big change when you repeat them with care.',
    category: 'Growth',
  },
  {
    text: 'You don’t need a loud beginning. You only need a real one.',
    category: 'Belief',
  },
  {
    text: 'What you imagine quietly today could be the reason you shine tomorrow.',
    category: 'Dream',
  },
  {
    text: 'Keep moving, even when the path is unclear — your steps will shape it.',
    category: 'Action',
  },

]
</script>
