<script setup>
import { Analytics } from "@vercel/analytics/nuxt";

useHead({
    htmlAttrs: {
        lang: "sv",
    },
    script: [
        {
            src: "https://scripts.simpleanalyticscdn.com/latest.js",
            async: true,
        },
    ],
});
</script>

<template>
    <Analytics />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
