<script setup>
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
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
