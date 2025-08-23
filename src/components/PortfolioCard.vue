<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="p-6 sm:p-8 flex flex-col sm:flex-row gap-8 sm:gap-12 bg-zinc-900/80 rounded-3xl">
        <div class="flex justify-center items-center sm:w-1/2">
            <img
                :src="data.image"
                :alt="'Screenshot of ' + data.title"
                class="max-w-full max-h80"
                loading="lazy"
            />
        </div>
        <div class="flex flex-col gap-4 sm:w-1/2 relative">
            <h2 class="text-2xl font-medium text-center sm:text-left truncate">{{ data.title }}</h2>
            <div class="flex justify-center sm:justify-start gap-2 flex-wrap">
                <div
                    v-for="tag in data.tags"
                    class="text-sm bg-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 text-neutral-200"
                >
                    <img
                        :src="tag.fields.icon.fields.file.url"
                        :alt="tag.fields.name"
                        width="14"
                        height="14"
                    />
                    <span>{{ tag.fields.name }}</span>
                </div>
            </div>

            <p class="mb-16 text-center sm:text-left">{{ data.description }}</p>

            <a v-if="data.githubURL" :href="data.githubURL" class="button absolute bottom-0 w-full">
                View on <Icon icon="mdi:github" width="24" height="24" />
            </a>
        </div>
    </div>
</template>
