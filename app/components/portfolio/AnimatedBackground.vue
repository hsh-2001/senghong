<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <!-- Grid pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <!-- Animated gradient orbs -->
    <div
      class="absolute top-0 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float">
    </div>
    <div
      class="absolute top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed">
    </div>
    <div
      class="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow">
    </div>

    <!-- Scanning line -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-scan">
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div v-for="i in 20" :key="i" class="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-particle" :style="{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: (Math.random() * 3 + 2) + 's'
      }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes scan {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-scan {
  animation: scan 3s linear infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-10px) translateX(10px);
  }
}

@keyframes particle {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    transform: translateY(-100px) scale(0);
    opacity: 0;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-particle {
  animation: particle 3s ease-in infinite;
}
</style>
