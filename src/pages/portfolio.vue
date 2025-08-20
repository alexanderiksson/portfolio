<script setup>
useSeoMeta({
    title: "Alexander Eriksson - Portfolio",
});

const portfolioData = ref(null);

onMounted(async () => {
    const response = await fetch("/portfolio/portfolio.json");
    portfolioData.value = await response.json();
});
</script>

<template>
    <div class="content">
        <h1 class="text-4xl font-medium mb-8">Portfolio</h1>

        <section class="grid grid-cols-1 gap-4">
            <div
                v-for="item in [...(portfolioData || [])].reverse()"
                class="p-8 flex gap-8 bg-neutral-200 rounded-3xl"
            >
                <div class="flex justify-center items-center w-1/2">
                    <img :src="item.img" alt="" class="max-w-full max-h80" />
                </div>
                <div class="flex flex-col gap-4 w-1/2 relative">
                    <h2 class="text-xl font-medium">{{ item.title }}</h2>
                    <div class="flex gap-2 flex-wrap">
                        <div
                            v-for="tag in item.tags"
                            class="text-sm border-1 border-[var(--primary)] px-2 rounded-full"
                        >
                            <span>{{ tag.name }}</span>
                        </div>
                    </div>

                    <p class="mb-16">{{ item.text }}</p>

                    <a
                        v-if="item.link"
                        :href="item.link"
                        class="button absolute bottom-0"
                    >
                        View on Github
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
