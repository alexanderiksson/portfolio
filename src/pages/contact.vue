<script setup>
useSeoMeta({
    title: "Alexander Eriksson - Contact me",
});

import emailjs from "@emailjs/browser";
import PageHeading from "~/components/PageHeading.vue";

const name = ref("");
const email = ref("");
const message = ref("");

const sending = ref(false);
const statusMessage = ref("");
const isSuccess = ref(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    sending.value = true;
    statusMessage.value = "";

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
        statusMessage.value = "Message sent successfully!";
        isSuccess.value = true;
        name.value = "";
        email.value = "";
        message.value = "";
    } catch (error) {
        statusMessage.value = "Failed to send message. Please try again later.";
        isSuccess.value = false;
    }

    sending.value = false;
};
</script>

<template>
    <div class="content">
        <PageHeading class="mb-8">Contact me</PageHeading>

        <form class="flex flex-col gap-6" @submit="handleSubmit">
            <div class="grid lg:grid-cols-2 gap-6">
                <input
                    class="p-3 rounded-xl border border-[var(--text)]/10 bg-zinc-900/30 placeholder:text-neutral-500"
                    type="text"
                    id="name"
                    name="name"
                    v-model="name"
                    required
                    :disabled="sending"
                    placeholder="Name"
                />

                <input
                    class="p-3 rounded-xl border border-[var(--text)]/10 bg-zinc-900/30 placeholder:text-neutral-500"
                    type="email"
                    id="email"
                    name="email"
                    v-model="email"
                    required
                    :disabled="sending"
                    placeholder="Email"
                />
            </div>

            <textarea
                class="p-3 rounded-xl border border-[var(--text)]/10 bg-zinc-900/30 placeholder:text-neutral-500"
                name="message"
                id="message"
                rows="5"
                v-model="message"
                required
                :disabled="sending"
                placeholder="Message"
            ></textarea>

            <div
                v-if="statusMessage"
                :class="['p-4 rounded-xl', isSuccess ? 'bg-green-500/20' : 'bg-red-500/20']"
            >
                {{ statusMessage }}
            </div>
            <button type="submit" class="button" :disabled="sending">
                {{ sending ? "Sending..." : "Send message" }}
            </button>
        </form>
    </div>
</template>
