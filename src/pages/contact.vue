<script setup>
useSeoMeta({
    title: "Alexander Eriksson - Contact me",
});

import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const message = ref("");

const sending = ref(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    sending.value = true;

    try {
        await emailjs.send(
            "service_w4r7hwo",
            "template_z70d7rw",
            {
                from_name: name.value,
                from_email: email.value,
                message: message.value,
            },
            "WZwgN1nzjJgqg5Wtu"
        );
        alert("Message sent successfully!");
        name.value = "";
        email.value = "";
        message.value = "";
    } catch (error) {
        alert("Failed to send message. Please try again later.");
    }

    sending.value = false;
};
</script>

<template>
    <div class="content">
        <h1 class="text-4xl font-medium mb-4">Contact me</h1>
        <p class="mb-12">Any questions? Just give me a shout!</p>

        <section class="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl" id="contact-form">
            <form class="flex flex-col gap-8" @submit="handleSubmit">
                <div class="flex flex-col gap-2">
                    <label for="name">Name</label>
                    <input
                        class="p-3 rounded-xl border border-[var(--text)]/10 bg-[var(--background)]/50"
                        type="text"
                        id="name"
                        name="name"
                        v-model="name"
                        required
                        :disabled="sending"
                        placeholder="Your name"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">E-mail</label>
                    <input
                        class="p-3 rounded-xl border border-[var(--text)]/10 bg-[var(--background)]/50"
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        required
                        :disabled="sending"
                        placeholder="Your email"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="message">Message</label>
                    <textarea
                        class="p-3 rounded-xl border border-[var(--text)]/10 bg-[var(--background)]/50"
                        name="message"
                        id="message"
                        rows="5"
                        v-model="message"
                        required
                        :disabled="sending"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button type="submit" class="button" :disabled="sending">
                    {{ sending ? "Sending..." : "Send message" }}
                </button>
            </form>
        </section>
    </div>
</template>
