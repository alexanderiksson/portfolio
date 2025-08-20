<script setup>
useSeoMeta({
    title: "Alexander Eriksson - Home",
    description: "Website built using nuxt.js and tailwind css.",
});
</script>

<template>
    <div class="content">
        <section id="intro" class="flex flex-col gap-8 mb-24">
            <h1 class="text-4xl font-medium">
                <div class="flex gap-2 items-center mb-4">
                    <span class="text-neutral-500">Hello</span>
                    <div>
                        <img src="/wavinghand.png" width="36px" height="36px" />
                    </div>
                </div>
                i'm Alexander Eriksson. Fullstack developer from Stockholm.
            </h1>
            <div class="flex gap-2">
                <NuxtLink class="button">Portfolio</NuxtLink>
                <NuxtLink class="button">Contact me</NuxtLink>
            </div>
        </section>

        <section id="skills" class="bg-neutral-200 p-8 rounded-3xl">
            <h2 class="text-2xl font-medium mb-8">Techstack</h2>
            <div class="grid grid-cols-6 gap-x-4 gap-y-12">
                <div title="HTML">
                    <Icon icon="flowbite:html-solid" width="24" height="24" />
                </div>
                <div title="CSS">
                    <Icon icon="flowbite:css-solid" width="24" height="24" />
                </div>
                <div title="JavaScript">
                    <Icon
                        icon="mdi:language-javascript"
                        width="24"
                        height="24"
                    />
                </div>
                <div title="TypeScript">
                    <Icon
                        icon="mdi:language-typescript"
                        width="24"
                        height="24"
                    />
                </div>
                <div title="React">
                    <Icon icon="uim:react" width="24" height="24" />
                </div>
                <div title="Vue">
                    <Icon icon="flowbite:vue-solid" width="24" height="24" />
                </div>

                <div title="Tailwind CSS">
                    <Icon
                        icon="flowbite:tailwind-solid"
                        width="24"
                        height="24"
                    />
                </div>
                <div title="Wordpress">
                    <Icon icon="mdi:wordpress" width="24" height="24" />
                </div>
                <div title="Node.js">
                    <Icon icon="grommet-icons:node" width="24" height="24" />
                </div>
                <div title="PostgreSQL">
                    <Icon icon="cib:postgresql" width="24" height="24" />
                </div>
                <div title="Figma">
                    <Icon icon="mage:figma" width="24" height="24" />
                </div>
            </div>
        </section>
    </div>
</template>
