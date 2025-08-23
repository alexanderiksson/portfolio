<script setup>
useSeoMeta({
    title: "Alexander Eriksson - Portfolio",
});

const {
    data: portfolioItems,
    pending: loading,
    error,
} = await useAsyncData("portfolio", () => $fetch("/api/portfolio"), {
    server: true,
    immediate: true,
});
</script>

<template>
    <div class="content">
        <PageHeading class="mb-8">Portfolio</PageHeading>

        <section class="flex flex-col gap-8" id="portfolio">
            <template v-if="loading">
                <Loader />
            </template>

            <template v-else-if="error">
                <p>Something went wrong</p>
            </template>

            <template v-else v-for="item in portfolioItems" :key="item.title">
                <PortfolioCard :data="item" />
            </template>
        </section>
    </div>
</template>
