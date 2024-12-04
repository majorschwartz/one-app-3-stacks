<script setup>
import { ref, onMounted } from "vue";
import AddMessage from "./components/AddMessage.vue";
import MessageList from "./components/MessageList.vue";

const messages = ref([]);

const fetchMessages = async () => {
	try {
		const response = await fetch("http://localhost:5000/api/messages");
		const data = await response.json();
		messages.value = data;
	} catch (error) {
		console.error("Error fetching messages:", error);
	}
};

onMounted(() => {
	fetchMessages();
});
</script>

<template>
	<div class="min-h-screen bg-gray-50">
		<header class="bg-white shadow-sm">
			<div class="max-w-4xl mx-auto px-4 py-6">
				<h1 class="text-3xl font-bold text-gray-900">
					Note To Self (Vue + Flask + PostgreSQL)
				</h1>
			</div>
		</header>
		<main class="max-w-4xl mx-auto px-4 py-8">
			<div class="space-y-6">
				<AddMessage @message-added="fetchMessages" />
				<MessageList :messages="messages" />
			</div>
		</main>
	</div>
</template>

<style>
@import "./assets/main.css";
</style>
