<template>
  <div class="w-full min-h-screen bg-gray-50 p-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Action Logs</h1>
          <p class="text-sm text-gray-500 mt-1">
            Monitor user activities and access history
          </p>
        </div>

        <div
          class="px-4 py-2 bg-white border rounded-xl shadow-sm text-sm text-gray-600"
        >
          Total Logs:
          <span class="font-semibold text-gray-900">
            {{ log?.length || 0 }}
          </span>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!log || log.length === 0"
        class="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border shadow-sm"
      >
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4"
        >
          📄
        </div>

        <h2 class="text-lg font-semibold text-gray-700">
          No logs available
        </h2>

        <p class="text-sm text-gray-500 mt-1">
          Activity logs will appear here once users interact with the system.
        </p>
      </div>

      <!-- Logs -->
      <div v-else class="grid gap-4">
        <div
          v-for="(entry, index) in log"
          :key="index"
          class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <!-- Top -->
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                >
                  {{ entry.action }}
                </span>

                <span class="text-xs text-gray-400">
                  #{{ index + 1 }}
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                {{ entry.ip }}
              </h2>

              <p class="text-sm text-gray-500 mt-1 break-all">
                {{ entry.device }}
              </p>
            </div>

            <div class="text-right">
              <p class="text-sm font-medium text-gray-700">
                {{
                  new Date(entry.timestamp).toLocaleDateString()
                }}
              </p>

              <p class="text-xs text-gray-400">
                {{
                  new Date(entry.timestamp).toLocaleTimeString()
                }}
              </p>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t my-4"></div>

          <!-- Details -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600"
          >
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-800">🌐 IP:</span>
                <span>{{ entry.ip }}</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-800">💻 Device:</span>
                <span class="truncate">{{ entry.device }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-800">📍 Location:</span>

                <a
                  v-if="entry.geo?.mapUrl"
                  :href="entry.geo.mapUrl"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Open Map
                </a>

                <span v-else class="text-gray-400">
                  Unknown
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-800">⏰ Time:</span>

                <span>
                  {{
                    new Date(entry.timestamp).toLocaleString()
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getLogs, log } = useActionLog();

onMounted(() => {
  getLogs();
});
</script>