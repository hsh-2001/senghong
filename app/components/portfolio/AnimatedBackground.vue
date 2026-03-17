<template>
  <div class="pointer-events-none fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(180deg,#020202_0%,#0a0a0a_55%,#111111_100%)]"></div>
    <div class="absolute inset-0 subtle-grid opacity-40"></div>

    <div class="ambient-glow ambient-glow-left"></div>
    <div class="ambient-glow ambient-glow-right"></div>

    <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.subtle-grid {
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 92%);
}

.ambient-glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  opacity: 0.22;
  animation: drift 16s ease-in-out infinite;
}

.ambient-glow-left {
  top: 4rem;
  left: -8rem;
  height: 22rem;
  width: 22rem;
  background: rgba(255, 255, 255, 0.08);
}

.ambient-glow-right {
  right: -7rem;
  bottom: 8rem;
  height: 20rem;
  width: 20rem;
  background: rgba(255, 255, 255, 0.06);
  animation-delay: 2s;
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(0, -18px, 0) scale(1.04);
  }
}
</style>
