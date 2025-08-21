<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="p-8 flex flex-col sm:flex-row gap-8 bg-zinc-900/80 rounded-3xl">
        <div class="flex justify-center items-center sm:w-1/2">
            <img
                :src="data.img"
                :alt="'Screenshot of ' + data.title"
                class="max-w-full max-h80"
                loading="lazy"
            />
        </div>
        <div class="flex flex-col gap-4 sm:w-1/2 relative">
            <h2 class="text-2xl font-medium">{{ data.title }}</h2>
            <div class="flex gap-2 flex-wrap">
                <div
                    v-for="tag in data.tags"
                    class="text-sm border-1 border-[var(--primary)] px-2 rounded-full"
                >
                    <span>{{ tag.name }}</span>
                </div>
            </div>

            <p class="mb-16">{{ data.text }}</p>

            <a v-if="data.link" :href="data.link" class="button absolute bottom-0 w-full">
                View on <Icon icon="mdi:github" width="24" height="24" />
            </a>
        </div>
    </div>
</template>
