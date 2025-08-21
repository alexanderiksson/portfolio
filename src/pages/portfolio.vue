<script setup>
import PortfolioCard from "~/components/PortfolioCard.vue";

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

        <section class="flex flex-col gap-8" id="portfolio">
            <template v-for="post in [...(portfolioData || [])].reverse()">
                <PortfolioCard :data="post" />
            </template>
        </section>
    </div>
</template>
