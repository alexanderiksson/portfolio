<script setup>
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <nav
        class="hidden fixed left-0 top-0 bottom-0 w-56 md:flex flex-col justify-between gap-8 pt-20 pb-8 px-16"
    >
        <NuxtLink to="/" class="text-2xl">AE</NuxtLink>

        <ul class="flex flex-col gap-1 text-[22px] font-medium" role="navigation">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>

        <ul class="flex gap-6">
            <li>
                <a href="https://github.com/alexanderiksson">
                    <Icon icon="mdi:github" width="24" height="24" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/alexander-eriksson-302bb8237/"
                    ><Icon icon="mdi:linkedin" width="24" height="24"
                /></a>
            </li>
        </ul>
    </nav>

    <!-- Mobile nav -->
    <header class="md:hidden content flex justify-between items-center py-4">
        <NuxtLink to="/" class="text-2xl">AE</NuxtLink>
        <div class="cursor-pointer" @click="toggleMenu">
            <Icon icon="hugeicons:menu-09" width="32" height="32" />
        </div>
    </header>

    <div
        class="fixed top-0 h-screen w-screen bg-white z-30 py-4 transition-all duration-200 ease-in-out"
        :style="{ left: isOpen ? '0' : '-110%' }"
    >
        <div class="content">
            <div class="flex justify-end cursor-pointer mb-8" @click="toggleMenu">
                <Icon icon="material-symbols-light:close-rounded" width="32" height="32" />
            </div>
            <nav class="absolute top-0 h-screen flex items-center">
                <ul class="flex flex-col gap-8 text-3xl font-medium">
                    <li><NuxtLink @click="toggleMenu" to="/">Home</NuxtLink></li>
                    <li><NuxtLink @click="toggleMenu" to="/portfolio">Portfolio</NuxtLink></li>
                    <li><NuxtLink @click="toggleMenu" to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
