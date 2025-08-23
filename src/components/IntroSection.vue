<template>
    <section id="intro" class="flex flex-col gap-8 mb-24">
        <h1 class="sm:text-4xl text-3xl font-medium">
            <div class="flex gap-2 items-center mb-4">
                <span class="text-neutral-500">Hello</span>
                <div>
                    <img
                        src="../assets/img/wavinghand.webp"
                        alt="Waving Hand Emoji"
                        width="36px"
                        height="36px"
                    />
                </div>
            </div>
            I'm Alexander Eriksson, Fullstack developer from Stockholm.
        </h1>
        <div class="flex gap-4">
            <NuxtLink class="button" to="/portfolio">Portfolio</NuxtLink>
            <NuxtLink class="button" to="/contact">Contact me</NuxtLink>
        </div>
    </section>
</template>
