<template>
    <nav
        class="fixed left-0 top-0 bottom-0 w-48 flex flex-col justify-between gap-8 py-16 px-8"
    >
        <NuxtLink to="/" class="text-2xl">Alexander Eriksson</NuxtLink>

        <ul class="flex flex-col gap-2 text-xl font-medium" role="navigation">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/skills">Skills</NuxtLink></li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>

        <ul class="flex gap-4">
            <li>
                <a href="">
                    <Icon icon="mdi:github" width="24" height="24" />
                </a>
            </li>
            <li>
                <a href=""
                    ><Icon icon="mdi:linkedin" width="24" height="24"
                /></a>
            </li>
        </ul>
    </nav>
</template>
