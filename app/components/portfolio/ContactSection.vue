<template>
  <section id="contact" class="relative px-3 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="animate-fade-in">
        <div class="mx-auto mb-14 max-w-3xl text-center">
          <h2 class="mb-6 text-4xl font-bold md:text-5xl">
            <span class="text-white">Contact Me</span>
          </h2>
          <p class="text-lg text-slate-400">
            Open to discussing product work, freelance opportunities, and new collaborations.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]">
            <p class="text-sm font-medium text-slate-300">Let&apos;s build something useful</p>
            <h3 class="mt-3 text-3xl font-semibold text-white">Start a conversation.</h3>
            <p class="mt-4 leading-7 text-slate-400">
              Share your idea, project scope, or current challenge. I&apos;ll review it and get back to you as soon as possible.
            </p>

            <div class="mt-8 flex flex-col gap-3">
              <a v-for="social in socials" :key="social.name" :href="social.url"
                class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:bg-white/10">
                <span class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
                  <SocialIcon :icon="social.icon" :name="social.name" />
                </span>
                <span class="text-sm font-medium">{{ social.name }}</span>
              </a>
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]">
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8" >
          <a v-if="isFirebaseDomain" @click="openCloudFlareSite"
            class="flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100">
            Contact Me
          </a>
          <!-- <a href="/files/Hang_Senghong_Fullstack_developer_CV.pdf" download
            class="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
            Download CV
          </a> -->
        </div>

        <div v-if="!isFirebaseDomain" class="mx-auto" id="contact">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="text-left">
                <label for="name" class="mb-2 block text-sm font-medium text-slate-300">
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-white/20"
                  placeholder="Your name"
                />
              </div>

              <div class="text-left">
                <label for="email" class="mb-2 block text-sm font-medium text-slate-300">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-white/20"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div class="text-left">
              <label for="subject" class="mb-2 block text-sm font-medium text-slate-300">
                Subject <span class="text-red-500">*</span>
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-white/20"
                placeholder="What's this about?"
              />
            </div>

            <div class="text-left">
              <label for="message" class="mb-2 block text-sm font-medium text-slate-300">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="6"
                class="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-white/20"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
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

            <div v-if="submitSuccess" class="rounded-xl border border-white/10 bg-white/5 p-4">
              <p class="text-center text-slate-200">✓ Message sent successfully! I'll get back to you soon.</p>
            </div>

            <div v-if="submitError" class="rounded-xl border border-white/10 bg-white/5 p-4">
              <p class="text-center text-slate-200">✗ {{ submitError }}</p>
            </div>
          </form>
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SocialIcon from './SocialIcon.vue';

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
