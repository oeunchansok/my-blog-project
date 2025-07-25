<template>
  <div class="h-[55vh]  pt-20 py-10 px-4 text-center">
    <h1 class="text-4xl font-bold mb-6 text-indigo-600">Quote </h1>
    <div class="inline-block animate-zoom-loop">
      <button
        @click="handleClick"
        class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition duration-300 ease-in-out"
      >
        Random Quote For You
      </button>
    </div>

    <!-- Quote Display -->
    <div
      v-if="selectedQuote"
      class="mt-8 max-w-xl border-l-4 border-indigo-500 mx-auto bg-gray-100 p-6 rounded-xl shadow"
    >
      <p class="text-2xl italic font-bold text-gray-800">“{{ selectedQuote.text }}”</p>
      <p class="text-sm text-right mt-2 text-indigo-500 font-semibold">— {{ selectedQuote.author }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quotes = [
 { text: "The path to success is to take massive, determined action.", author: "Tony Robbins" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "An idea not coupled with action will never get any bigger than the brain cell it occupied.", author: "Arnold Glasow" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your belief determines your action and your action determines your results.", author: "James Allen" },
  { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr." },
  { text: "To believe in yourself is to believe in your future.", author: "Unknown" },
  { text: "Whatever the mind can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { text: "Believe in your infinite potential. Your only limitations are those you set upon yourself.", author: "Unknown" },
  { text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don’t belong.", author: "Mandy Hale" },
  { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts" },
  { text: "If we don’t change, we don’t grow.", author: "Gail Sheehy" },
  { text: "Strength and growth come only through continuous effort and struggle.", author: "Napoleon Hill" },
  { text: "Be not afraid of growing slowly, be afraid only of standing still.", author: "Chinese Proverb" },
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "A dream you dream alone is only a dream. A dream you dream together is reality.", author: "John Lennon" },
  { text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", author: "Langston Hughes" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Don’t follow your dreams, chase them.", author: "Unknown" },
  { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
  { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" },
  { text: "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
  { text: "The greatest thing you'll ever learn is just to love and be loved in return.", author: "Eden Ahbez" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
  { text: "Happiness is not in things; it is in you.", author: "Unknown" },
  { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
  { text: "Happiness is letting go of what you think your life is supposed to look like.", author: "Unknown" },
  { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
  { text: "The walls we build around us to keep sadness out also keeps out the joy.", author: "Jim Rohn" },
  { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
  { text: "Don’t grieve. Anything you lose comes round in another form.", author: "Rumi" },
  { text: "The pain you feel today is the strength you’ll feel tomorrow.", author: "Unknown" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "The more I read, the more I acquire, the more certain I am that I know nothing.", author: "Voltaire" },
  { text: "Tell me and I forget, teach me and I may remember, involve me and I learn.", author: "Benjamin Franklin" },
  { text: "The beautiful thing about learning is that nobody can take it away from you.", author: "B.B. King" },
  { text: "Mistakes are proof that you are trying.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’", author: "Mary Anne Radmacher" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Fear kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Inaction breeds doubt and fear. Action breeds confidence and courage.", author: "Dale Carnegie" },
  { text: "Surround yourself with only people who are going to lift you higher.", author: "Oprah Winfrey" },
  { text: "You are the average of the five people you spend the most time with.", author: "Jim Rohn" },
  { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
  { text: "Kindness is a language which the deaf can hear and the blind can see.", author: "Mark Twain" },
  { text: "Time is what we want most, but what we use worst.", author: "William Penn" },
  { text: "Lost time is never found again.", author: "Benjamin Franklin" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Whether you think you can, or you think you can’t – you’re right.", author: "Henry Ford" },
  { text: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.", author: "Unknown" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "The meaning of life is to find your gift. The purpose of life is to give it away.", author: "Pablo Picasso" },
  { text: "Your purpose in life is to find your purpose and give your whole heart and soul to it.", author: "Buddha" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "You were born to be real, not perfect.", author: "Unknown" },
  { text: "Stars can’t shine without darkness.", author: "Unknown" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "He who opens a school door, closes a prison.", author: "Victor Hugo" },
  { text: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop" },
  { text: "Be kind whenever possible. It is always possible.", author: "Dalai Lama" },
  { text: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Unknown" },
  { text: "When you feel like quitting, think about why you started.", author: "Unknown" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "A smooth sea never made a skilled sailor.", author: "Unknown" },
  { text: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Unknown" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Live for the moments you can’t put into words.", author: "Unknown" },
  { text: "Do small things with great love.", author: "Mother Teresa" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.", author: "Marie Forleo" }
]

const selectedQuote = ref(null)

function handleClick() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  selectedQuote.value = quotes[randomIndex]
}
</script>
