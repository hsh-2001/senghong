<template>
  <section id="contact" class="relative py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Work
            Together</span>
        </h2>
        <p class="text-xl text-gray-400 mb-4">
          Have a project in mind? Let's build something amazing.
        </p>
        <p class="text-gray-500 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12" >
          <a @click="openCloudFlareSite"
            class="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
            <!-- <svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg> -->
            Contact Me
          </a>
          <!-- <a href="#"
            class="px-8 py-4 border border-cyan-500/30 hover:border-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 flex items-center justify-center gap-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a> -->
        </div>

        <!-- Contact Form -->
        <div v-if="isFirebaseDomain" class="max-w-2xl mx-auto my-16" id="contact">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Name Input -->
              <div class="text-left">
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <!-- Email Input -->
              <div class="text-left">
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <!-- Subject Input -->
            <div class="text-left">
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                Subject <span class="text-red-500">*</span>
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500"
                placeholder="What's this about?"
              />
            </div>

            <!-- Message Input -->
            <div class="text-left">
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="6"
                class="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                <svg v-if="!isSubmitting" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <svg v-else class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>

            <!-- Success Message -->
            <div v-if="submitSuccess" class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p class="text-green-400 text-center">✓ Message sent successfully! I'll get back to you soon.</p>
            </div>

            <!-- Error Message -->
            <div v-if="submitError" class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p class="text-red-400 text-center">✗ {{ submitError }}</p>
            </div>
          </form>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          <a v-for="social in socials" :key="social.name" :href="social.url"
            class="w-14 h-14 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10 hover:scale-110">
            <span class="text-2xl">{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const isFirebaseDomain = computed(() => window?.origin.includes('senghong-portfolio.web.app'));

const openCloudFlareSite = () => {
  window.location.href = "https://senghong.pages.dev/#contact";
}
interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Props {
  socials: Social[];
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

defineProps<Props>();

const formData = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = '';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    // Reset form on success
    submitSuccess.value = true;
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';

    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    submitError.value = 'Failed to send message. Please try again or email directly.';
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}
</style>
